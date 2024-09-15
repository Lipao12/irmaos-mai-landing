import { motion } from "framer-motion";

interface CardServiceProps {
  name: string;
  description: string;
  icon: any;
}
export const CardService = ({ name, description, icon }: CardServiceProps) => {
  return (
    <motion.div
      className="rounded-xl border flex flex-col p-4 shadow-md bg-white cursor-default"
      whileHover={{
        y: -10,
        rotateY: 5,
        backgroundColor: "#f0f4f8",
        boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="text-4xl text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <span className="text-gray-600">{description}</span>
    </motion.div>
  );
};
