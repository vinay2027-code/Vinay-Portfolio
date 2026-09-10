import React, { useState } from 'react';
import { 
  Receipt, 
  Plus, 
  Minus, 
  Trash2, 
  QrCode, 
  CheckCircle2, 
  Share2, 
  Sparkles, 
  Zap, 
  Printer, 
  CreditCard, 
  Package, 
  Smartphone, 
  FileText, 
  Send, 
  AlertTriangle, 
  Layers,
  Search,
  Code2
} from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  hsn: string;
  category: string;
}

interface KhataCustomer {
  id: string;
  name: string;
  phone: string;
  business: string;
  outstanding: number;
  lastBilled: string;
  status: 'due' | 'clear' | 'overdue';
}

const SAMPLE_CATALOG: Omit<CartItem, 'qty'>[] = [
  { id: 'fmcg-1', name: 'Fortune Sunlite Oil (1L)', price: 145, hsn: '1512', category: 'FMCG' },
  { id: 'fmcg-2', name: 'Aashirvaad Atta (5kg)', price: 260, hsn: '1101', category: 'Grocery' },
  { id: 'fmcg-3', name: 'Tata Tea Gold (500g)', price: 295, hsn: '0902', category: 'Beverages' },
  { id: 'fmcg-4', name: 'Dettol Handwash Refill', price: 99, hsn: '3401', category: 'Personal Care' },
  { id: 'fmcg-5', name: 'Gemstone Healing Bracelet', price: 499, hsn: '7113', category: 'Retail' },
  { id: 'fmcg-6', name: 'Natural Amethyst Cluster', price: 1299, hsn: '7116', category: 'Retail' },
];

const INITIAL_KHATA: KhataCustomer[] = [
  { id: 'kh-1', name: 'Ramesh General Store', phone: '+91 98234 11201', business: 'Kirana Retailer', outstanding: 4850, lastBilled: '2 days ago', status: 'overdue' },
  { id: 'kh-2', name: 'Sharma Dairy & Provisions', phone: '+91 98112 44321', business: 'FMCG Reseller', outstanding: 2150, lastBilled: 'Yesterday', status: 'due' },
  { id: 'kh-3', name: 'Amit Supermart', phone: '+91 99341 87654', business: 'Supermarket', outstanding: 0, lastBilled: 'Today', status: 'clear' },
];

export const EasyBillShowcase: React.FC = () => {
  // Active demo view mode
  const [activeTab, setActiveTab] = useState<'billing' | 'khata' | 'inventory'>('billing');
  const [printFormat, setPrintFormat] = useState<'thermal' | 'a4'>('thermal');

  // Mini interactive POS state
  const [cart, setCart] = useState<CartItem[]>([
    { id: 'fmcg-1', name: 'Fortune Sunlite Oil (1L)', price: 145, qty: 2, hsn: '1512', category: 'FMCG' },
    { id: 'fmcg-3', name: 'Tata Tea Gold (500g)', price: 295, qty: 1, hsn: '0902', category: 'Beverages' },
  ]);

  const [includeGST, setIncludeGST] = useState<boolean>(true);
  const [customerName, setCustomerName] = useState<string>('Ramesh Kumar (Kirana)');
  const [customerPhone, setCustomerPhone] = useState<string>('+91 98765 43210');
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [invoiceNumber] = useState<string>(() => `EB-2026-${Math.floor(1000 + Math.random() * 9000)}`);
  const [reminderSentId, setReminderSentId] = useState<string | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [searchFilter, setSearchFilter] = useState<string>('');

  const addItemToCart = (item: Omit<CartItem, 'qty'>) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setIsGenerated(false);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
    setIsGenerated(false);
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setIsGenerated(false);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cgst = includeGST ? Math.round(subtotal * 0.09) : 0;
  const sgst = includeGST ? Math.round(subtotal * 0.09) : 0;
  const totalTax = cgst + sgst;
  const grandTotal = subtotal + totalTax;

  const handleSendReminder = (customerId: string) => {
    setReminderSentId(customerId);
    setTimeout(() => setReminderSentId(null), 2500);
  };

  const handleShare = () => {
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const filteredCatalog = SAMPLE_CATALOG.filter((item) =>
    item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.hsn.includes(searchFilter) ||
    item.category.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="bg-[#071911] border-2 border-[#ffe600]/30 rounded-3xl p-6 sm:p-10 mb-10 shadow-2xl relative overflow-hidden">
      
      {/* Top Header Badge Strip */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 flex-wrap gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono-code bg-[#ffe600] text-black font-bold uppercase tracking-wider">
            SOFTWARE PRODUCT // MERCHANT TECH
          </span>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-code bg-white/10 text-white/80">
            MOBILE-FIRST GST INVOICING & POS
          </span>
          <span className="text-xs font-mono-code text-[#ffe600]">
            2026
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono-code text-emerald-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>EASYBILL // LIVE PRODUCT</span>
        </div>
      </div>

      {/* Main Title & Role & Tech Stack */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code mb-2">
          <span className="text-[#DE9B26] font-bold uppercase tracking-wider">
            ROLE: Product Builder / Frontend Developer
          </span>
          <span className="text-white/30">•</span>
          <span className="text-white/60 font-mono-code flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-[#ffe600]" />
            <span>Tech Stack: React 18 · TypeScript · Tailwind CSS · Vite</span>
          </span>
        </div>

        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
          EasyBill — Smart GST Invoicing & Merchant Management
        </h3>
        
        <p className="text-sm sm:text-base text-white/90 font-sans mt-3 max-w-4xl leading-relaxed">
          Built <strong className="text-[#ffe600] font-semibold">EasyBill</strong>, a mobile-first billing and merchant management application designed to simplify everyday operations for <strong className="text-white font-semibold">small retailers, FMCG merchants, and distributors</strong>.
        </p>

        <p className="text-sm sm:text-base text-white/75 font-sans mt-2 max-w-4xl leading-relaxed">
          The app brings <strong className="text-emerald-400 font-semibold">GST invoicing, inventory management, customer credit (Khata), payment reminders, and UPI payments</strong> into one simple platform.
        </p>
      </div>

      {/* 6 What I Built Feature Blocks */}
      <div className="mb-8">
        <div className="text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#ffe600]" />
          <span>WHAT I BUILT // CORE FUNCTIONAL MODULES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Module 1 */}
          <div className="bg-[#0b2418] border border-white/10 hover:border-white/20 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#ffe600]/10 border border-[#ffe600]/30 flex items-center justify-center text-[#ffe600] mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <strong className="text-white font-bold text-sm block">⚡ Fast GST Billing</strong>
              <p className="text-white/70 text-xs mt-1.5 leading-relaxed">
                Created an intuitive invoice-generation flow with automated CGST/SGST calculations and HSN-based tax categorization.
              </p>
            </div>
            <span className="text-[10px] font-mono-code text-[#ffe600] mt-3 block uppercase">
              HSN Lookup • Auto-Tax Engine
            </span>
          </div>

          {/* Module 2 */}
          <div className="bg-[#0b2418] border border-white/10 hover:border-white/20 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-3">
                <CreditCard className="w-4 h-4" />
              </div>
              <strong className="text-white font-bold text-sm block">💳 Digital Khata</strong>
              <p className="text-white/70 text-xs mt-1.5 leading-relaxed">
                Built customer credit tracking with outstanding balance management and automated payment reminders.
              </p>
            </div>
            <span className="text-[10px] font-mono-code text-emerald-400 mt-3 block uppercase">
              Credit Ledger • WhatsApp Reminders
            </span>
          </div>

          {/* Module 3 */}
          <div className="bg-[#0b2418] border border-white/10 hover:border-white/20 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-3">
                <Package className="w-4 h-4" />
              </div>
              <strong className="text-white font-bold text-sm block">📦 Inventory Management</strong>
              <p className="text-white/70 text-xs mt-1.5 leading-relaxed">
                Developed product catalog, SKU search, category management, and low-stock alerts.
              </p>
            </div>
            <span className="text-[10px] font-mono-code text-amber-300 mt-3 block uppercase">
              Live Stock Count • Threshold Warnings
            </span>
          </div>

          {/* Module 4 */}
          <div className="bg-[#0b2418] border border-white/10 hover:border-white/20 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-blue-400/10 border border-blue-400/30 flex items-center justify-center text-blue-400 mb-3">
                <QrCode className="w-4 h-4" />
              </div>
              <strong className="text-white font-bold text-sm block">📲 UPI Payments</strong>
              <p className="text-white/70 text-xs mt-1.5 leading-relaxed">
                Added dynamic UPI QR generation to make customer settlements faster and zero-touch.
              </p>
            </div>
            <span className="text-[10px] font-mono-code text-blue-300 mt-3 block uppercase">
              Dynamic Amount QR • Instant Reconciliation
            </span>
          </div>

          {/* Module 5 */}
          <div className="bg-[#0b2418] border border-white/10 hover:border-white/20 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-purple-400 mb-3">
                <Printer className="w-4 h-4" />
              </div>
              <strong className="text-white font-bold text-sm block">🧾 Invoice Printing</strong>
              <p className="text-white/70 text-xs mt-1.5 leading-relaxed">
                Designed print-ready GST invoices for both A4 and thermal receipt formats.
              </p>
            </div>
            <span className="text-[10px] font-mono-code text-purple-300 mt-3 block uppercase">
              A4 Full Invoice • 80mm POS Thermal
            </span>
          </div>

          {/* Module 6 */}
          <div className="bg-[#0b2418] border border-white/10 hover:border-white/20 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-teal-400/10 border border-teal-400/30 flex items-center justify-center text-teal-400 mb-3">
                <Smartphone className="w-4 h-4" />
              </div>
              <strong className="text-white font-bold text-sm block">📱 Mobile-First Experience</strong>
              <p className="text-white/70 text-xs mt-1.5 leading-relaxed">
                Designed the interface around the needs of merchants working from smartphones and POS counters.
              </p>
            </div>
            <span className="text-[10px] font-mono-code text-teal-300 mt-3 block uppercase">
              Responsive Viewport • Counter Speed
            </span>
          </div>

        </div>
      </div>

      {/* Interactive Workbench / Live App Simulator */}
      <div className="bg-[#05140b] border border-white/15 rounded-2xl p-5 sm:p-7 mb-8">
        
        {/* Simulator Navigation Tabs */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-wider">
              INTERACTIVE DEMO:
            </span>
            <div className="flex bg-black/50 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveTab('billing')}
                className={`px-3 py-1 rounded-lg text-xs font-mono-code transition-all ${
                  activeTab === 'billing' 
                    ? 'bg-[#ffe600] text-black font-bold shadow' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                ⚡ Fast GST Billing
              </button>
              <button
                onClick={() => setActiveTab('khata')}
                className={`px-3 py-1 rounded-lg text-xs font-mono-code transition-all ${
                  activeTab === 'khata' 
                    ? 'bg-[#ffe600] text-black font-bold shadow' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                💳 Digital Khata
              </button>
              <button
                onClick={() => setActiveTab('inventory')}
                className={`px-3 py-1 rounded-lg text-xs font-mono-code transition-all ${
                  activeTab === 'inventory' 
                    ? 'bg-[#ffe600] text-black font-bold shadow' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                📦 Inventory & SKUs
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-code text-white/50">
            <span>PRINT FORMAT:</span>
            <button
              onClick={() => setPrintFormat('thermal')}
              className={`px-2 py-0.5 rounded border text-[11px] ${
                printFormat === 'thermal' 
                  ? 'border-[#ffe600] text-[#ffe600] bg-[#ffe600]/10 font-bold' 
                  : 'border-white/20 text-white/50'
              }`}
            >
              Thermal 80mm
            </button>
            <button
              onClick={() => setPrintFormat('a4')}
              className={`px-2 py-0.5 rounded border text-[11px] ${
                printFormat === 'a4' 
                  ? 'border-[#ffe600] text-[#ffe600] bg-[#ffe600]/10 font-bold' 
                  : 'border-white/20 text-white/50'
              }`}
            >
              A4 Invoice
            </button>
          </div>
        </div>

        {/* TAB 1: Fast GST Billing Terminal */}
        {activeTab === 'billing' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Quick Catalog & Cart (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                
                {/* Search / Filter Bar */}
                <div className="relative mb-4">
                  <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Search FMCG, grocery SKU, or HSN code..."
                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-white/40 outline-none focus:border-[#ffe600]"
                  />
                </div>

                {/* Catalog Buttons */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {filteredCatalog.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => addItemToCart(item)}
                        className="text-left bg-black/40 hover:bg-[#0b2418] border border-white/10 hover:border-[#ffe600]/60 rounded-xl p-2.5 transition-all text-xs group"
                      >
                        <div className="flex items-center justify-between text-[9px] font-mono-code text-white/40 mb-1">
                          <span>HSN {item.hsn}</span>
                          <span className="text-[#ffe600]">{item.category}</span>
                        </div>
                        <span className="font-bold text-white block truncate group-hover:text-[#ffe600]">
                          {item.name}
                        </span>
                        <span className="text-[11px] font-mono-code text-emerald-400 block mt-1">
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Cart */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-[11px] font-mono-code text-white/60 uppercase mb-2">
                    <span>Active Cart ({cart.length} line items)</span>
                    <span>Item Price & Qty</span>
                  </div>

                  {cart.length === 0 ? (
                    <div className="p-8 text-center bg-black/30 border border-dashed border-white/10 rounded-xl text-white/50 text-xs font-mono-code">
                      Cart is empty. Select products from the catalog above!
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="bg-black/50 border border-white/10 rounded-xl p-3 flex items-center justify-between gap-3 text-xs"
                        >
                          <div className="min-w-0 flex-1">
                            <span className="font-bold text-white block truncate">{item.name}</span>
                            <span className="text-[10px] font-mono-code text-white/40">
                              HSN: {item.hsn} • ₹{item.price}
                            </span>
                          </div>

                          {/* Qty Controls */}
                          <div className="flex items-center gap-2">
                            <div className="flex items-center bg-white/10 rounded-lg p-0.5">
                              <button
                                onClick={() => updateQty(item.id, -1)}
                                className="p-1 hover:bg-white/20 rounded text-white/80 hover:text-white"
                                title="Decrease"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 font-mono-code font-bold text-white text-xs">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => updateQty(item.id, 1)}
                                className="p-1 hover:bg-white/20 rounded text-white/80 hover:text-white"
                                title="Increase"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <span className="font-mono-code font-bold text-emerald-400 w-16 text-right">
                              ₹{(item.price * item.qty).toLocaleString('en-IN')}
                            </span>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-1 text-white/30 hover:text-red-400 transition-colors"
                              title="Remove"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Tax Toggle & Customer Details */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-mono-code text-white/80">
                  <input
                    type="checkbox"
                    checked={includeGST}
                    onChange={(e) => {
                      setIncludeGST(e.target.checked);
                      setIsGenerated(false);
                    }}
                    className="rounded bg-black border-white/30 text-[#ffe600] focus:ring-0"
                  />
                  <span>Automated GST Calculation (18% : 9% CGST + 9% SGST)</span>
                </label>

                <div className="flex items-center gap-2 text-xs font-mono-code">
                  <span className="text-white/40">MERCHANT / BUYER:</span>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="bg-black/60 border border-white/20 rounded px-2 py-0.5 text-white text-xs w-36 focus:border-[#ffe600] outline-none"
                    placeholder="Merchant Name"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Live GST Invoice Terminal (5 cols) */}
            <div className={`lg:col-span-5 ${printFormat === 'a4' ? 'bg-white' : 'bg-[#f5efe6]'} text-neutral-900 rounded-2xl p-5 shadow-2xl flex flex-col justify-between border-4 border-[#071911]`}>
              
              <div>
                {/* Receipt Header */}
                <div className="text-center pb-3 border-b-2 border-dashed border-neutral-400">
                  <div className="inline-flex items-center gap-1.5 font-mono-code font-black text-sm tracking-wider uppercase text-neutral-900">
                    <Receipt className="w-4 h-4 text-emerald-700" />
                    <span>EASYBILL // GST TAX INVOICE</span>
                  </div>
                  <div className="text-[10px] font-mono-code text-neutral-600 mt-0.5">
                    Invoice #{invoiceNumber} • {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </div>
                  <div className="text-[10px] font-mono-code text-neutral-600">
                    Format: <strong>{printFormat === 'thermal' ? '80mm POS Thermal Receipt' : 'Standard A4 GST Tax Invoice'}</strong>
                  </div>
                  <div className="text-[10px] font-mono-code text-neutral-700 mt-0.5">
                    Billed To: <strong>{customerName || 'Walk-in Retailer'}</strong> ({customerPhone})
                  </div>
                </div>

                {/* Line Items */}
                <div className="py-3 border-b border-neutral-300 font-mono-code text-xs space-y-1.5 max-h-40 overflow-y-auto">
                  {cart.length === 0 ? (
                    <div className="text-center py-4 text-neutral-400 text-xs">
                      No items selected
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-baseline text-[11px]">
                        <span className="truncate pr-2 text-neutral-800">
                          {item.name} × {item.qty}
                          <span className="text-[9px] text-neutral-500 block">HSN {item.hsn}</span>
                        </span>
                        <span className="font-bold text-neutral-900">
                          ₹{(item.price * item.qty).toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))
                  )}
                </div>

                {/* Tax Breakdown & Grand Total */}
                <div className="py-3 space-y-1 font-mono-code text-xs">
                  <div className="flex justify-between text-neutral-600 text-[11px]">
                    <span>Taxable Subtotal:</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>

                  {includeGST && (
                    <>
                      <div className="flex justify-between text-neutral-500 text-[10px]">
                        <span>CGST (9%):</span>
                        <span>₹{cgst.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-neutral-500 text-[10px]">
                        <span>SGST (9%):</span>
                        <span>₹{sgst.toLocaleString('en-IN')}</span>
                      </div>
                    </>
                  )}

                  <div className="pt-2 border-t-2 border-neutral-800 flex justify-between items-baseline font-black text-sm text-neutral-900">
                    <span>NET PAYABLE:</span>
                    <span className="text-base text-emerald-800">
                      ₹{grandTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Dynamic UPI QR Generation */}
                <div className="bg-white p-2.5 rounded-xl border border-neutral-300 flex items-center gap-3">
                  <div className="w-12 h-12 bg-neutral-900 text-white rounded-lg flex items-center justify-center shrink-0">
                    <QrCode className="w-8 h-8" />
                  </div>
                  <div className="text-[10px] font-mono-code text-neutral-700 leading-tight">
                    <strong className="block text-neutral-900">Dynamic UPI QR Ready</strong>
                    Auto-populates payable ₹{grandTotal.toLocaleString('en-IN')} for GPay / PhonePe / Paytm settlement
                  </div>
                </div>
              </div>

              {/* Actions & Sharing */}
              <div className="mt-4 pt-3 border-t border-dashed border-neutral-400 flex flex-col gap-2">
                <button
                  onClick={() => setIsGenerated(true)}
                  disabled={cart.length === 0}
                  className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white font-mono-code text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-md"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isGenerated ? 'INVOICE FINALIZED & LOGGED' : 'GENERATE GST INVOICE'}</span>
                </button>

                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={handleShare}
                    className="flex-1 py-1.5 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-mono-code text-[10px] font-bold rounded flex items-center justify-center gap-1 transition-colors"
                  >
                    <Share2 className="w-3 h-3" />
                    <span>{copiedNotification ? 'INVOICE LINK COPIED!' : 'DISPATCH WHATSAPP'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setCart([]);
                      setIsGenerated(false);
                    }}
                    className="py-1.5 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 font-mono-code text-[10px] rounded transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: Digital Khata (Customer Credit & Payment Reminders) */}
        {activeTab === 'khata' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono-code text-white/70">
              <span>ACTIVE CUSTOMER CREDIT LEDGER (KHATA)</span>
              <span className="text-[#ffe600]">Total Outstanding: ₹7,000</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {INITIAL_KHATA.map((kh) => (
                <div 
                  key={kh.id} 
                  className="bg-black/50 border border-white/10 rounded-2xl p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono-code text-white/40">{kh.business}</span>
                      <span className={`text-[9px] font-mono-code px-2 py-0.5 rounded font-bold uppercase ${
                        kh.status === 'overdue' 
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                          : kh.status === 'due' 
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}>
                        {kh.status}
                      </span>
                    </div>

                    <strong className="text-white text-sm block">{kh.name}</strong>
                    <span className="text-[11px] font-mono-code text-white/50 block">{kh.phone}</span>

                    <div className="mt-4 p-3 bg-black/40 rounded-xl border border-white/5">
                      <span className="text-[10px] font-mono-code text-white/50 block uppercase">OUTSTANDING BALANCE</span>
                      <span className={`text-xl font-black font-mono-code mt-0.5 block ${kh.outstanding > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                        ₹{kh.outstanding.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-white/40 mt-1 block">Billed: {kh.lastBilled}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10">
                    <button
                      onClick={() => handleSendReminder(kh.id)}
                      disabled={kh.outstanding === 0}
                      className="w-full py-2 bg-white/10 hover:bg-[#ffe600] text-white hover:text-black font-mono-code text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 disabled:opacity-30 disabled:hover:bg-white/10 disabled:hover:text-white"
                    >
                      <Send className="w-3 h-3" />
                      <span>{reminderSentId === kh.id ? 'WHATSAPP REMINDER SENT!' : 'SEND PAYMENT REMINDER'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Inventory & Low Stock Tracking */}
        {activeTab === 'inventory' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono-code text-white/70">
              <span>INVENTORY REPOSITORY // REAL-TIME STOCK & SKU SEARCH</span>
              <span className="text-emerald-400">6 Active SKUs Monitored</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-black/50 border border-white/10 rounded-xl p-3.5">
                <div className="flex justify-between items-start text-xs font-mono-code">
                  <span className="text-[#ffe600]">FMCG // #1512</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">In Stock (42 units)</span>
                </div>
                <strong className="text-white text-sm block mt-1">Fortune Sunlite Oil (1L)</strong>
                <span className="text-xs text-white/60 block mt-1 font-mono-code">Selling Price: ₹145 | Cost: ₹128</span>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-xl p-3.5">
                <div className="flex justify-between items-start text-xs font-mono-code">
                  <span className="text-[#ffe600]">Grocery // #1101</span>
                  <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-bold flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> Low Stock (3 units)
                  </span>
                </div>
                <strong className="text-white text-sm block mt-1">Aashirvaad Atta (5kg)</strong>
                <span className="text-xs text-white/60 block mt-1 font-mono-code">Selling Price: ₹260 | Cost: ₹232</span>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-xl p-3.5">
                <div className="flex justify-between items-start text-xs font-mono-code">
                  <span className="text-[#ffe600]">Beverages // #0902</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">In Stock (18 units)</span>
                </div>
                <strong className="text-white text-sm block mt-1">Tata Tea Gold (500g)</strong>
                <span className="text-xs text-white/60 block mt-1 font-mono-code">Selling Price: ₹295 | Cost: ₹255</span>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-xl p-3.5">
                <div className="flex justify-between items-start text-xs font-mono-code">
                  <span className="text-[#ffe600]">Personal Care // #3401</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">Reorder Soon (8 units)</span>
                </div>
                <strong className="text-white text-sm block mt-1">Dettol Handwash Refill</strong>
                <span className="text-xs text-white/60 block mt-1 font-mono-code">Selling Price: ₹99 | Cost: ₹78</span>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-xl p-3.5">
                <div className="flex justify-between items-start text-xs font-mono-code">
                  <span className="text-[#ffe600]">Retail Tech // #7113</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">In Stock (64 units)</span>
                </div>
                <strong className="text-white text-sm block mt-1">Gemstone Healing Bracelet</strong>
                <span className="text-xs text-white/60 block mt-1 font-mono-code">Selling Price: ₹499 | Cost: ₹180</span>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-xl p-3.5">
                <div className="flex justify-between items-start text-xs font-mono-code">
                  <span className="text-[#ffe600]">Retail Tech // #7116</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">In Stock (12 units)</span>
                </div>
                <strong className="text-white text-sm block mt-1">Natural Amethyst Cluster</strong>
                <span className="text-xs text-white/60 block mt-1 font-mono-code">Selling Price: ₹1299 | Cost: ₹550</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Key Learning Callout Banner (Exact from user prompt) */}
      <div className="bg-gradient-to-r from-[#0b2418] to-[#123825] border-2 border-[#ffe600]/40 rounded-2xl p-6 sm:p-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffe600]/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#ffe600] text-black flex items-center justify-center shrink-0 font-bold shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-wider mb-1">
              KEY LEARNING & FOUNDATIONAL TAKEAWAY
            </div>
            <p className="text-sm sm:text-base text-white/95 leading-relaxed font-sans font-medium">
              "This project helped me combine <strong className="text-[#ffe600]">business problem-solving, product design, technology, and user experience</strong> to build a practical solution for real-world retail operations."
            </p>
            <div className="mt-2.5 flex items-center gap-3 text-xs font-mono-code text-white/50">
              <span>Vinay G // Product Builder</span>
              <span>•</span>
              <span>Retail Tech & FMCG Systems</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
