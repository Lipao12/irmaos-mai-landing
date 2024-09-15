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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto text-start">
        <h2 className="text-2xl font-bold mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
