
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import TypingEffect from '../components/TypingEffect'; // We are now using this component!

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          404
        </h1>

        <TypingEffect
          text="Page Not Found"
          speed={120}
          className="text-2xl md:text-3xl font-bold text-white mb-6"
        />

        <p className="text-gray-300 max-w-md mx-auto mb-10">
          Oops! The page you are looking for doesn't exist. It might have been moved or deleted.
        </p>

        <Button variant="primary" size="large" to="/">
          Go Back Home
        </Button>
      </motion.div>
    </section>
  );
};

export default NotFound;
