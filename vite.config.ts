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

        // Helper to locate any image placed by user in public/assets, public/uploads, public, or src/assets/images
        const findMatchingImage = (keywords: string[]): string | null => {
          const searchDirs = [
            { dir: path.resolve(__dirname, 'public', 'assets'), prefix: '/assets/' },
            { dir: path.resolve(__dirname, 'public', 'uploads'), prefix: '/uploads/' },
            { dir: path.resolve(__dirname, 'public'), prefix: '/' },
            { dir: path.resolve(__dirname, 'src', 'assets', 'images'), prefix: '/assets/' },
          ];

          for (const { dir, prefix } of searchDirs) {
            if (!fs.existsSync(dir)) continue;
            try {
              const files = fs.readdirSync(dir);
              for (const file of files) {
                const lower = file.toLowerCase();
                if (lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png') || lower.endsWith('.webp')) {
                  for (const kw of keywords) {
                    if (lower.includes(kw.toLowerCase())) {
                      // If found in src/assets/images, ensure it's copied to public/assets for serving
                      if (prefix === '/assets/' && dir.includes('src')) {
                        const target = path.resolve(__dirname, 'public', 'assets', file);
                        if (!fs.existsSync(target)) {
                          fs.copyFileSync(path.resolve(dir, file), target);
                        }
                      }
                      return `${prefix}${file}`;
                    }
                  }
                }
              }
            } catch {}
          }
          return null;
        };

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
          const stallUrl = findMatchingImage(['dlf_stall', 'stall', 'booth', '15.32.19', 'cyberhub_stall']);
          const teamUrl = findMatchingImage(['dlf_team', 'team', 'taara', '14.06.17', 'cyberhub_team']);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            stall: stallUrl,
            team: teamUrl,
          }));
          return;
        }

        if (req.url === '/api/gig-photos' && req.method === 'GET') {
          const blinkitUrl = findMatchingImage(['gig_blinkit', 'blinkit', 'bistro', 'night_rider']);
          const autoUrl = findMatchingImage(['gig_auto', 'auto', 'rickshaw', 'e-auto', 'emobility']);
          const deliveryUrl = findMatchingImage(['gig_delivery', 'delivery', 'swiggy', 'lastmile', 'last_mile']);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            blinkit: blinkitUrl,
            auto: autoUrl,
            delivery: deliveryUrl,
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
