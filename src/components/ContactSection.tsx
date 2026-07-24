import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'albagersalam@gmail.com',
    href: 'mailto:albagersalam@gmail.com',
    target: '_self',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourname',
    href: 'https://linkedin.com/in/yourname',
    target: '_blank',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/albagero',
    href: 'https://github.com/albagero',
    target: '_blank',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+249 XXX XXX XXX',
    href: 'tel:+249XXXXXXXXX',
    target: '_self',
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="snap-section flex items-center justify-center py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-6 flex items-center justify-center gap-2">
            <span className="text-cyan-accent font-mono text-xl md:text-2xl mr-2">06.</span>
            Let's Connect
          </h2>
          <p className="section-subtitle mx-auto mb-12">
            I'm always interested in discussing biomedical engineering, healthcare technology, AI, and exciting collaboration opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={method.href}
                target={method.target}
                rel={method.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="glass-card p-6 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <Icon className="w-8 h-8 text-cyan-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-heading text-lg font-semibold text-slate-light mb-1">
                  {method.label}
                </h3>
                <p className="text-slate-mid text-sm">
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="mailto:albagersalam@gmail.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
