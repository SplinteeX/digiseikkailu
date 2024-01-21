import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedSlider = (data) => {
  const controls = useAnimation();
  const images = data.children;
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 1 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <motion.div>
      <motion.div className="Image-slider" style={{}}>
        <div className="Current-image" key={index}>
          <motion.img
            src={images[index]}
            alt={`Image ${index}`}
            initial={{ x: "25%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
