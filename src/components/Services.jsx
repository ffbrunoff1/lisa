import { motion } from 'framer-motion';
import {
  Target,
  Building,
  ShieldCheck,
  HardHat,
  Ruler,
  Wrench,
} from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <HardHat className="h-10 w-10 text-brand-blue" />,
      title: 'Construção Residencial',
      description:
        'Criamos lares personalizados que refletem o estilo de vida e as aspirações de cada cliente, com foco no conforto e na durabilidade.',
    },
    {
      icon: <Building className="h-10 w-10 text-brand-blue" />,
      title: 'Edificações Comerciais',
      description:
        'Desenvolvemos espaços comerciais funcionais e modernos, projetados para impulsionar o sucesso do seu negócio.',
    },
    {
      icon: <Ruler className="h-10 w-10 text-brand-blue" />,
      title: 'Planejamento e Gestão',
      description:
        'Oferecemos gerenciamento completo de obras, garantindo eficiência, cumprimento de prazos e otimização de custos.',
    },
    {
      icon: <Wrench className="h-10 w-10 text-brand-blue" />,
      title: 'Reformas e Retrofit',
      description:
        'Modernizamos e revitalizamos estruturas existentes, agregando valor e funcionalidade com soluções inovadoras.',
    },
    {
      icon: <Target className="h-10 w-10 text-brand-blue" />,
      title: 'Projetos Estruturais',
      description:
        'Elaboramos projetos estruturais seguros e eficientes, utilizando as mais recentes tecnologias e normas técnicas.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-brand-blue" />,
      title: 'Segurança e Conformidade',
      description:
        'Nosso compromisso é com a total segurança no canteiro de obras e a conformidade com todas as regulamentações vigentes.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-lg text-brand-gray">
            Da concepção à entrega, oferecemos um portfólio completo de serviços
            para atender a todas as fases do seu projeto de construção.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              variants={cardVariants}
            >
              <div className="mb-6 flex items-center justify-center h-16 w-16 bg-brand-blue/10 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {service.title}
              </h3>
              <p className="text-brand-gray leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
