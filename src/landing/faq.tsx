import { motion } from "framer-motion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Como posso agendar uma manutenção?",
      answer:
        "Basta nos contatar pelo formulário ou telefone, e agendaremos uma visita para avaliar suas necessidades.",
    },
    {
      question: "Vocês oferecem atendimento emergencial?",
      answer:
        "Sim, nossa equipe está disponível 24/7 para atender emergências industriais.",
    },
    {
      question: "Quais tipos de equipamentos vocês mantêm?",
      answer:
        "Trabalhamos com uma vasta gama de equipamentos industriais, desde maquinário leve até pesados sistemas de produção.",
    },
  ];

  const faqVariants = {
    hidden: { opacity: 0, x: 50 }, // Inicialmente invisível e um pouco deslocado para baixo
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="faq" className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-start mb-8">
          Perguntas Frequentes
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={faqVariants}
            >
              <h3 className="text-2xl font-semibold mb-4">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
