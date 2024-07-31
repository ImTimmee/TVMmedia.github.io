import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface CardProps {
  image: string;
  name: string;
}

const AutoScrollCarouselItem: React.FC<CardProps> = ({ image, name }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden h-[200px] min-w-[200px] bg-transparent rounded-xl flex justify-center items-center"
      key={image}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      {/* Hover overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            <motion.h1
              className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span className="text-black">{name}</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <img
        src={image}
        alt={image}
        style={{ objectFit: "cover" }}
        className="aspect-square object-fill w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
      />
    </motion.div>
  );
};

export default AutoScrollCarouselItem;
