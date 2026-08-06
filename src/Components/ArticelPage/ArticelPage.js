"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ArticelCard from '../ShearedFolder/ArticelCard/ArticelCard';
import articelList from '../ShearedFolder/ArticelData/ArticelData';
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const ArticelPage = () => {
    const { t } = useLanguage();
    
    return (
        <section className="container" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ textAlign: 'center', marginBottom: '40px' }}
            >
                <motion.span
                    initial={{ opacity: 0, letterSpacing: '8px' }}
                    animate={{ opacity: 1, letterSpacing: '4px' }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    style={{
                        display: 'inline-block',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        color: '#a78bfa',
                        background: 'rgba(167, 139, 250, 0.1)',
                        border: '1px solid rgba(167, 139, 250, 0.25)',
                        borderRadius: '999px',
                        padding: '6px 18px',
                        marginBottom: '16px'
                    }}
                >
                    {t.blog.label}
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ 
                        fontSize: 'clamp(2rem, 5vw, 3.2rem)', 
                        fontWeight: '800', 
                        color: '#e6f1ff',
                        margin: '0 0 16px 0',
                        letterSpacing: '-0.5px'
                    }}
                >
                    {t.blog.heading}{" "} 
                    <span style={{
                        background: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>{t.blog.headingGradient}</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        color: '#8892b0',
                        fontSize: '1rem',
                        maxWidth: '540px',
                        margin: '0 auto',
                        lineHeight: '1.7'
                    }}
                >
                    {t.blog.subtitle}
                </motion.p>
            </motion.div>

            <ArticelCard articelList={articelList} />
        </section>
    );
};

export default ArticelPage;