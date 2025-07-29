import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Facebook size={24} />, href: '#' },
    { icon: <Instagram size={24} />, href: '#' },
    { icon: <Linkedin size={24} />, href: '#' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-brand-dark text-brand-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#hero" className="inline-block mb-4">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753795724984_0.png"
                alt="Lisa Logo"
                className="h-12 w-auto bg-white p-2 rounded-md"
              />
            </a>
            <p className="max-w-sm text-gray-400">
              Construindo o futuro com solidez, inovação e um compromisso
              inabalável com a qualidade.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-brand-blue transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <h3 className="text-lg font-semibold mt-6 mb-4">Contato</h3>
            <p className="text-gray-400">ffbrunoff@yahoo.com.br</p>
            <p className="text-gray-400">+55 44 99104-0774</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Lisa Construções. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
