import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import { CardService } from "../components/card-service";

import { FaBolt, FaCog, FaTachometerAlt } from "react-icons/fa";
export const Services = () => {
  const services = [
    {
      id: 1,
      name: "Serviços Elétricos",
      description:
        "Manutenção e reparo de sistemas elétricos para máquinas industriais, garantindo segurança e eficiência.",
      icon: <FaBolt />,
    },
    {
      id: 2,
      name: "Serviços Mecânicos",
      description:
        "Reparo e manutenção de componentes mecânicos de máquinas industriais para garantir funcionamento otimizado.",
      icon: <FaCog />,
    },
    {
      id: 3,
      name: "Manutenção Preventiva",
      description:
        "Serviços regulares para monitorar e prevenir falhas em máquinas industriais, aumentando a durabilidade e reduzindo o tempo de inatividade.",
      icon: <FaTools />,
    },
    {
      id: 4,
      name: "Serviços de Tornearia",
      description:
        "Usinagem e torneamento de peças industriais com precisão, adaptando-se às necessidades específicas de cada projeto.",
      icon: <FaTachometerAlt />,
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
