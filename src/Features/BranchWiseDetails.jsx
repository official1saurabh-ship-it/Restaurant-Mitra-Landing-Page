import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BranchWiseDetails = () => {
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
              <ShieldCheck className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">Branch-wise Details</h1>
          </div>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
            Manage multiple restaurant locations from a single dashboard. 
            Monitor performance, sync menus, and maintain consistency across all your branches.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Multi-location Control</h3>
              <p className="text-slate-600 leading-relaxed">
                Oversee all your outlets without leaving your office. Push menu updates, track overall revenue, and compare performance between locations.
              </p>
            </div>
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Centralized Reports</h3>
              <p className="text-slate-600 leading-relaxed">
                Get a birds-eye view of your entire business or drill down into specific branch data. Manage staff and inventory globally or locally.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BranchWiseDetails;
