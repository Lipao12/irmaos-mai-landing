import { motion } from "framer-motion";
import { useState } from "react";
import { About } from "./about";
import { Home } from "./home";
import { Services } from "./services";

export const Landing = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="mx-auto space-y-8">
      <Home />
      <div className="md:h-full ">
        <motion.div
          onViewportEnter={() => {
            selectedPage;
          }}
        >
          <About />
        </motion.div>
      </div>
      <div className="md:h-full ">
        <motion.div onViewportEnter={() => {}}>
          <Services />
        </motion.div>
      </div>
    </div>
  );
};
