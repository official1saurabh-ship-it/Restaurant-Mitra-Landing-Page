import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { PieChart, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AnalyticsandStocks = () => {
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
                            <PieChart className="w-8 h-8 text-purple-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900">Analytics & Reports</h1>
                    </div>
                    <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
                        Make data-driven decisions with comprehensive insights into your restaurant's performance.
                        Track sales trends, customer behavior, and operational efficiency.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Sales Analytics</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Monitor your daily, weekly, and monthly revenue. Identify top-selling items and peak hours to optimize your staffing and inventory.
                            </p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Performance Insights</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Get detailed reports on staff performance, customer feedback, and wastage. Turn raw data into actionable strategies for growth.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AnalyticsandStocks;
