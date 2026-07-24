import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';

const contactItems = [
  {
    id: 1,
    label: 'Email',
    value: 'albagersalam@gmail.com',
    icon: Mail,
    href: 'mailto:albagersalam@gmail.com',
  },
  {
    id: 2,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourname',
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourname',
    target: '_blank',
  },
  {
    id: 3,
    label: 'GitHub',
    value: 'github.com/albagero',
    icon: Github,
    href: 'https://github.com/albagero',
    target: '_blank',
  },
  {
    id: 4,
    label: 'Phone',
    value: '+249 XXX XXX XXX',
    icon: Phone,
    href: 'tel:+249XXXXXXXXX',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const ContactSection = () => {
  return (
    <section id="contact" className="snap-section flex flex-col justify-center py-24">
      <div className="max-w-4xl mx-auto w-full text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sky-400 font-mono text-lg">06.</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-light">Let's Connect</h2>
          </div>
          <p className="text-slate-mid text-base max-w-2xl mx-auto">
            I'm always interested in discussing biomedical engineering, healthcare technology, AI, and exciting collaboration opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {contactItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <a
                href={item.href}
                target={item.target}
                rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="glass-card p-6 flex flex-col items-center text-center group block h-full no-underline"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-400/10 flex items-center justify-center mb-4 group-hover:bg-sky-400/20 group-hover:scale-105 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="font-heading text-base font-semibold text-white mb-1">
                  {item.label}
                </h3>
                <span className="text-slate-mid text-sm">
                  {item.value}
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="mailto:albagersalam@gmail.com"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold rounded-lg transition-colors"
          >
            <Send className="w-5 h-5" />
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
