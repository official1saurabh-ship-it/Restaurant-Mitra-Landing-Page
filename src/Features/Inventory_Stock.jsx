import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { ClipboardList, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Inventory_Stock = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        <button 
          onClick={() => navigate(-1)}
          className="absolute right-6 top-12 p-3 rounded-full bg-slate-50 hover:bg-purple-600 hover:text-white text-slate-600 transition-all duration-300 shadow-sm hover:shadow-lg group z-10"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
              <ClipboardList className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">Inventory & Stock</h1>
          </div>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
            Take full control of your kitchen supplies and reduce wastage with real-time inventory tracking. 
            Monitor stock levels, manage vendors, and optimize food costs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-time Tracking</h3>
              <p className="text-slate-600 leading-relaxed">
                Automatically update stock levels as sales happen. Get instant alerts when ingredients are running low to prevent service interruptions.
              </p>
            </div>
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Recipe Costing</h3>
              <p className="text-slate-600 leading-relaxed">
                Break down dish costs by ingredient. Understand your margins and adjust prices or portions to maximize profitability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Inventory_Stock;
