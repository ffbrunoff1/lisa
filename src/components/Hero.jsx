import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-brand-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 leading-tight"
            variants={itemVariants}
          >
            Construímos com <span className="gradient-text">excelência</span>,
            projetamos o futuro.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto mb-10"
            variants={itemVariants}
          >
            Transforme seu espaço com a Lisa - sua parceira de confiança em
            construção. Qualidade e inovação em cada detalhe do seu projeto.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-brand-white font-bold rounded-lg shadow-lg hover:bg-blue-500 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              Vamos construir algo incrível juntos!
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-brand-blue/10 rounded-t-full blur-3xl"></div>
    </section>
  );
}
