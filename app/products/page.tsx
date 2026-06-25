'use client';

import { useState } from 'react';
import Image from 'next/image';
import productsData from './product.json';
import { motion } from 'framer-motion';

export default function Products() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    interface Product {
        id: number;
        code: number | null;
        name: string;
        slug: string;
        category: string;
        unit: string;
        image: string;
        status: number;
        rate?: number;
        description?: string;
    }
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [formData, setFormData] = useState({ quantity: 1, name: '', phone: '', address: '', pincode: '' });

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedProduct) return;

        const isSpice = selectedProduct.category === 'spices';
        const message = isSpice 
            ? `*Enquiry for the price details*\n\n*Product:* ${selectedProduct.name}\n*Quantity:* ${formData.quantity} ${selectedProduct.unit}\n\n*Customer Details:*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Address:* ${formData.address}\n*Pincode:* ${formData.pincode}`
            : `*New Order Inquiry*\n\n*Product:* ${selectedProduct.name}\n*Price:* ₹${selectedProduct.rate || 0} x ${formData.quantity}\n*Total:* ₹${(selectedProduct.rate || 0) * formData.quantity}\n*Quantity:* ${formData.quantity} ${selectedProduct.unit}\n\n*Customer Details:*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Address:* ${formData.address}\n*Pincode:* ${formData.pincode}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "918075859465"; // Actual WhatsApp number

        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        setSelectedProduct(null); // Close modal
    }

    const categories = ['All', ...Array.from(new Set(productsData.map(p => p.category)))];

    const filteredProducts = productsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 relative z-10 w-full pt-8 sm:pt-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 sm:mb-16 relative"
            >
                <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-[#143525]/60 mb-2 block">
                    Our Collection
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#143525] uppercase tracking-wide mb-4">
                    Our Best Sellers
                </h2>
                <p className="text-xs sm:text-sm text-[#143525]/80 max-w-2xl mx-auto font-normal leading-relaxed">
                    Explore our handpicked selection of 100% natural premium spices and authentic Ayurvedic remedies, freshly sourced from our gardens.
                </p>
            </motion.div>

            {/* Filters Section */}
            <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex flex-col md:flex-row justify-center items-center mb-8 sm:mb-16 gap-4"
            >
                <div className="flex gap-2 overflow-x-auto hide-scrollbar w-full md:w-auto pb-1 justify-start md:justify-center flex-nowrap md:flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 flex-shrink-0 rounded-full text-[9px] font-bold tracking-widest uppercase transition-all duration-300 border ${
                                selectedCategory === category
                                    ? 'bg-[#143525] text-[#FAF6F0] border-transparent'
                                    : 'bg-[#F0EDE6] text-[#143525]/70 border-[#E5DFD5] hover:border-[#143525]/50 hover:text-[#143525]'
                                }`}
                        >
                            {category === 'All' ? 'All' : category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 gap-y-12 sm:gap-y-16 mt-8 pb-12">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => {
                        return (
                        <motion.div 
                            key={product.id} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                            className="relative group flex flex-col rounded-[1.75rem] overflow-hidden bg-[#F3EFE7] border border-[#E0D8CC]/60 p-4 sm:p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(20,53,37,0.06)]"
                        >
                            {/* Card Top Area - Image Background */}
                            <div className="relative w-full aspect-square rounded-[1.25rem] overflow-hidden bg-white border border-[#E8E2D8] flex items-center justify-center mb-5">
                                <Image 
                                    src={product.image} 
                                    alt={product.name} 
                                    fill 
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw" 
                                    className="object-contain p-6 opacity-95 group-hover:scale-105 transition-transform duration-500" 
                                />
                            </div>
                            
                            {/* Text Info */}
                            <div className="flex justify-between items-start gap-3 w-full text-left mb-5 px-1">
                                <h3 className="text-[11px] sm:text-xs font-bold tracking-wide text-[#143525] leading-normal line-clamp-2 max-w-[70%]">
                                    {product.name.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                                </h3>
                                <span className="text-[#BD6A42] font-bold text-[11px] sm:text-xs shrink-0 whitespace-nowrap mt-0.5">
                                    {product.category === 'spices' ? 'Market Price' : `₹ ${product.rate ? product.rate.toFixed(0) : '250'}`}
                                </span>
                            </div>
                            
                            {/* Button Row */}
                            <div className="w-full mt-auto pt-1 px-1">
                                <button 
                                    onClick={() => setSelectedProduct(product)} 
                                    className="w-full bg-[#143525] hover:bg-[#204835] text-[#FAF6F0] text-[10px] font-bold tracking-wider py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm text-center"
                                >
                                    Enquire Now
                                </button>
                            </div>
                        </motion.div>
                    )})
                ) : (
                    <div className="col-span-full py-20 text-center">
                        <h3 className="text-xl font-bold text-[#143525] mb-3">No products found</h3>
                        <p className="text-[#143525]/60 text-sm">Try adjusting your search or category filter.</p>
                        <button onClick={() => setSelectedCategory('All')} className="mt-8 px-6 py-2.5 bg-[#143525] text-[#FAF6F0] rounded-[2px] text-xs font-bold uppercase tracking-widest">Reset filters</button>
                    </div>
                )}
            </div>

            {/* Premium WhatsApp Order Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500">
                    <div className="absolute inset-0 bg-[#143525]/40 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>

                    <div className="relative w-full max-w-md bg-[#FAF6F0] rounded-[2px] shadow-[0_20px_50px_rgba(20,53,37,0.12)] border border-[#E5DFD5] overflow-hidden flex flex-col max-h-[95vh] md:max-h-[90vh]">
                        {/* Header */}
                        <div className="relative bg-[#FAF6F0] px-6 py-4 text-center shrink-0 border-b border-[#E5DFD5] flex items-center justify-between">                            
                            <h3 className="relative z-10 text-sm font-bold uppercase tracking-wider text-[#143525]">Checkout</h3>
                            <button onClick={() => setSelectedProduct(null)} className="w-8 h-8 rounded-[2px] bg-[#F0EDE6] flex items-center justify-center text-[#143525]/70 hover:bg-[#E5DFD5] hover:text-[#143525] transition-all cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="overflow-y-auto flex-grow custom-scrollbar p-6 bg-[#FAF6F0]">
                            
                            {/* Product Info & Quantity Selector */}
                            <div className="bg-[#F0EDE6] p-4 rounded-[2px] border border-[#E5DFD5] mb-6 flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 relative rounded-[1px] overflow-hidden bg-[#FAF6F0] shrink-0 border border-[#E5DFD5] flex items-center justify-center">
                                            <Image src={selectedProduct.image} alt={selectedProduct.name} fill sizes="56px" className="object-contain p-1" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xs uppercase tracking-wider text-[#143525] leading-tight truncate max-w-[150px]">{selectedProduct.name}</h4>
                                            <div className="text-[#BD6A42] font-semibold text-xs mt-1">{selectedProduct.category === 'spices' ? 'Market Price' : `₹ ${selectedProduct.rate ? selectedProduct.rate.toFixed(2) : '250.00'}`}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#FAF6F0] px-2 py-1 rounded-[2px] border border-[#E5DFD5] shadow-sm">
                                        <button type="button" onClick={() => setFormData(prev => ({...prev, quantity: Math.max(1, prev.quantity - 1)}))} className="text-[#143525]/60 hover:text-[#143525] w-6 h-6 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer">−</button>
                                        <span className="text-[#143525] font-bold w-6 text-center text-xs">{formData.quantity}</span>
                                        <button type="button" onClick={() => setFormData(prev => ({...prev, quantity: prev.quantity + 1}))} className="text-[#143525] hover:text-[#BD6A42] w-6 h-6 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer">+</button>
                                    </div>
                                </div>
                                {selectedProduct.description && (
                                    <div className="text-left bg-[#FAF6F0] p-3 rounded-[1px] text-[11px] text-[#143525]/85 leading-relaxed border border-[#E5DFD5]/50">
                                        {selectedProduct.description}
                                    </div>
                                )}
                            </div>

                            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                                <div className="space-y-3">
                                    <div className="space-y-1 text-left">
                                        <label className="block text-[9px] font-bold text-[#143525]/60 uppercase tracking-widest pl-0.5">Full Name</label>
                                        <input type="text" required placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-[#E5DFD5] rounded-[2px] focus:border-[#143525] outline-none text-[#143525] text-xs placeholder:text-[#143525]/30 transition-all" />
                                    </div>
                                    
                                    <div className="space-y-1 text-left">
                                        <label className="block text-[9px] font-bold text-[#143525]/60 uppercase tracking-widest pl-0.5">Phone Number</label>
                                        <input type="tel" required placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-[#E5DFD5] rounded-[2px] focus:border-[#143525] outline-none text-[#143525] text-xs placeholder:text-[#143525]/30 transition-all" />
                                    </div>
                                </div>
                                
                                <div className="space-y-1 text-left">
                                    <label className="block text-[9px] font-bold text-[#143525]/60 uppercase tracking-widest pl-0.5">Delivery Address</label>
                                    <textarea required rows={3} placeholder="Enter your full shipping address..." value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-[#E5DFD5] rounded-[2px] focus:border-[#143525] outline-none text-[#143525] text-xs placeholder:text-[#143525]/30 transition-all resize-none" />
                                </div>

                                <div className="space-y-1 text-left">
                                    <label className="block text-[9px] font-bold text-[#143525]/60 uppercase tracking-widest pl-0.5">Pincode</label>
                                    <input type="text" required placeholder="Ex: 686514" value={formData.pincode} onChange={(e) => setFormData({ ...formData, pincode: e.target.value })} className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-[#E5DFD5] rounded-[2px] focus:border-[#143525] outline-none text-[#143525] text-xs placeholder:text-[#143525]/30 transition-all" />
                                </div>

                                <button type="submit" className="w-full mt-4 bg-[#143525] hover:bg-[#1e4835] text-[#FAF6F0] font-bold py-3.5 px-6 rounded-[2px] transition-all duration-300 text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="opacity-90"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                                    Order on WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
