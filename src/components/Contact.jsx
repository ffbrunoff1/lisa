import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Phone,
  MapPin,
  Loader,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-brand-gray">
            Tem uma ideia ou projeto em mente? Adoraríamos ouvir sobre ele.
            Preencha o formulário ou utilize um de nossos canais de contato.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-3 bg-brand-white p-8 md:p-12 rounded-xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-dark">
              Envie sua mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-brand-gray mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:border-brand-blue focus:ring-0 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brand-gray mb-2"
                >
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:border-brand-blue focus:ring-0 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brand-gray mb-2"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:border-brand-blue focus:ring-0 transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-brand-blue text-brand-white font-bold rounded-lg shadow-lg hover:bg-blue-500 transition-colors duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin mr-2" />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
            </form>
            {submitSuccess && (
              <div className="mt-4 flex items-center text-green-600 bg-green-100 p-3 rounded-lg">
                <CheckCircle className="mr-2" /> Mensagem enviada com sucesso!
                Entraremos em contato em breve.
              </div>
            )}
            {submitError && (
              <div className="mt-4 flex items-center text-red-600 bg-red-100 p-3 rounded-lg">
                <AlertTriangle className="mr-2" /> Erro: {submitError}
              </div>
            )}
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-brand-white p-8 rounded-xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-brand-blue" />
                </div>
                <h4 className="ml-4 text-xl font-semibold text-brand-dark">
                  Telefone
                </h4>
              </div>
              <a
                href="tel:+5544991040774"
                className="text-brand-gray hover:text-brand-blue transition-colors text-lg"
              >
                +55 44 99104-0774
              </a>
            </div>
            <div className="bg-brand-white p-8 rounded-xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                </div>
                <h4 className="ml-4 text-xl font-semibold text-brand-dark">
                  Endereço
                </h4>
              </div>
              <p className="text-brand-gray text-lg">
                Rua Padre Lebret, 801, G05 Bloco 03
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
