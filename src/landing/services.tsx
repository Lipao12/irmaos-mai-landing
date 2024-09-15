import { motion } from "framer-motion";
import { FaChartLine, FaCogs, FaTools, FaWrench } from "react-icons/fa";
import { CardService } from "../components/card-service";

export const Services = () => {
  const services = [
    {
      id: 1,
      name: "Manutenção Preventiva",
      description:
        "Aumente a durabilidade de seus equipamentos com serviços regulares e monitoramento preventivo.",
      icon: <FaTools />,
    },
    {
      id: 2,
      name: "Reparo de Máquinas",
      description:
        "Reparo especializado de máquinas industriais para minimizar tempo de inatividade.",
      icon: <FaWrench />,
    },
    {
      id: 3,
      name: "Instalação de Equipamentos",
      description:
        "Instalação segura e eficiente de equipamentos industriais novos.",
      icon: <FaCogs />,
    },
    {
      id: 4,
      name: "Consultoria Técnica",
      description:
        "Consultoria especializada para otimizar processos industriais e melhorar a produtividade.",
      icon: <FaChartLine />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-start">Nossos Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex"
            >
              <CardService
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
