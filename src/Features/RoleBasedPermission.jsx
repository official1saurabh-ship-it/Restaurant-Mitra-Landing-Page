import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RoleBasedPermission = () => {
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
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">Role-Based Permissions</h1>
          </div>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
            Secure your restaurant operations by defining specific access levels for your staff. 
            Ensure that sensitive data and critical settings are only accessible by authorized personnel.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Granular Access Control</h3>
              <p className="text-slate-600 leading-relaxed">
                Assign specific roles like Admin, Manager, Cashier, or Waiter. Control exactly which modules and features each role can view or modify.
              </p>
            </div>
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Activity Audit Logs</h3>
              <p className="text-slate-600 leading-relaxed">
                Track every action taken within the system. Maintain accountability with detailed logs of who accessed what and when changes were made.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoleBasedPermission;
