import { motion } from "framer-motion";
import { useState } from "react";
import { Header } from "../header";
import { About } from "./about";
import { Contact } from "./contact";
import { FAQ } from "./faq";
import { Home } from "./home";
import { Services } from "./services";

export const Landing = () => {
  const selectedPage = useState("home");
  return (
    <div>
      <Header />
      <div className="mx-auto space-y-8">
        <Home />
        <div className="md:h-full ">
          <motion.div
            onViewportEnter={() => {
              selectedPage[0];
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
        <FAQ />
        <Contact />
      </div>
    </div>
  );
};
