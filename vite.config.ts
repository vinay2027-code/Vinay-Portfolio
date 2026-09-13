import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

// LINT.IfChange(aistudio_media_plugin)
function aistudioMediaPlugin(): Plugin {
  return {
    name: 'vite-plugin-aistudio-media',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/assets/aistudio/')) {
          const rawPath = req.url.split('?')[0].split('#')[0];
          try {
            const decodedPath = decodeURIComponent(rawPath);
            const relativePath = decodedPath.replace(/^\//, '');
            const aistudioDir = path.resolve(
              __dirname,
              'public',
              'assets',
              'aistudio',
            );
            const filePath = path.resolve(__dirname, 'public', relativePath);
            if (
              filePath.startsWith(aistudioDir + path.sep) &&
              fs.existsSync(filePath) &&
              fs.statSync(filePath).isFile()
            ) {
              const ext = path.extname(filePath).toLowerCase();
              const mimeMap: Record<string, string> = {
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.bmp': 'image/bmp',
                '.ico': 'image/x-icon',
                '.mp4': 'video/mp4',
                '.webm': 'video/webm',
                '.ogv': 'video/ogg',
                '.mp3': 'audio/mpeg',
                '.wav': 'audio/wav',
                '.ogg': 'audio/ogg',
                '.pdf': 'application/pdf',
              };
              res.setHeader(
                'Content-Type',
                mimeMap[ext] || 'application/octet-stream',
              );
              res.setHeader('Cache-Control', 'no-cache');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          } catch {
            // Fall through if URI decoding or file access fails
          }
        }

        // Custom photo upload endpoint for Vinay's authentic photos
        if (req.url === '/api/upload-photo' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const { slot, dataUrl } = JSON.parse(body);
              if (!slot || !dataUrl) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Missing slot or dataUrl' }));
                return;
              }
              const slotFiles: Record<string, string> = {
                stall: 'dlf_stall.jpg',
                team: 'dlf_team.jpg',
                blinkit: 'gig_blinkit.jpg',
                auto: 'gig_auto.jpg',
                delivery: 'gig_delivery.jpg',
              };
              const filename = slotFiles[slot] || `${slot}.jpg`;
              const publicDir = path.resolve(__dirname, 'public', 'assets');
              const srcDir = path.resolve(__dirname, 'src', 'assets', 'images');
              if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
              if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });

              // Strip base64 prefix
              const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
              const buffer = matches ? Buffer.from(matches[2], 'base64') : Buffer.from(dataUrl, 'base64');

              fs.writeFileSync(path.resolve(publicDir, filename), buffer);
              fs.writeFileSync(path.resolve(srcDir, filename), buffer);

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, url: `/assets/${filename}?t=${Date.now()}` }));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }

        if (req.url === '/api/mela-photos' && req.method === 'GET') {
          const stallExists = fs.existsSync(path.resolve(__dirname, 'public', 'assets', 'dlf_stall.jpg'));
          const teamExists = fs.existsSync(path.resolve(__dirname, 'public', 'assets', 'dlf_team.jpg'));
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            stall: stallExists ? `/assets/dlf_stall.jpg` : null,
            team: teamExists ? `/assets/dlf_team.jpg` : null,
          }));
          return;
        }

        if (req.url === '/api/gig-photos' && req.method === 'GET') {
          const blinkitExists = fs.existsSync(path.resolve(__dirname, 'public', 'assets', 'gig_blinkit.jpg'));
          const autoExists = fs.existsSync(path.resolve(__dirname, 'public', 'assets', 'gig_auto.jpg'));
          const deliveryExists = fs.existsSync(path.resolve(__dirname, 'public', 'assets', 'gig_delivery.jpg'));
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            blinkit: blinkitExists ? `/assets/gig_blinkit.jpg` : null,
            auto: autoExists ? `/assets/gig_auto.jpg` : null,
            delivery: deliveryExists ? `/assets/gig_delivery.jpg` : null,
          }));
          return;
        }

        next();
      });
    },
  };
}
// LINT.ThenChange(//depot/google3/java/com/google/alkali/boq/makersuite/applet_dev_service/templates/initializers/react_theme/vite.config.ts:aistudio_media_plugin)

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), aistudioMediaPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
