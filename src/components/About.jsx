import { motion } from 'framer-motion';
import { Users, Building, Award } from 'lucide-react';

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  };

  const stats = [
    {
      icon: <Building size={36} className="text-brand-blue" />,
      value: '15+',
      label: 'Anos de Mercado',
    },
    {
      icon: <Users size={36} className="text-brand-blue" />,
      value: '200+',
      label: 'Projetos Concluídos',
    },
    {
      icon: <Award size={36} className="text-brand-blue" />,
      value: '99%',
      label: 'Clientes Satisfeitos',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div variants={imageVariants}>
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/imagem-sobre-nos.jpg"
              alt="Equipe da Lisa Construções em uma obra"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Qualidade e confiança em cada projeto
            </h2>
            <p className="text-brand-gray mb-6 leading-relaxed">
              Na Lisa, nossa missão é materializar sonhos através da construção
              civil. Combinamos técnica apurada, materiais de alta qualidade e
              uma equipe apaixonada para entregar obras que não apenas atendem,
              mas superam as expectativas. Cada tijolo assentado é um passo em
              direção à realização do seu projeto.
            </p>
            <p className="text-brand-gray mb-8 leading-relaxed">
              Acreditamos que a transparência e a parceria com nossos clientes
              são os pilares para o sucesso. Do planejamento à entrega, mantemos
              uma comunicação clara e um compromisso inabalável com os prazos e
              o orçamento.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-brand-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <p className="text-2xl font-bold text-brand-dark">
                    {stat.value}
                  </p>
                  <p className="text-sm text-brand-gray">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
