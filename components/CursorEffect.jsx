import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorEffect = () => {
  const [particles, setParticles] = useState([]);

  const handleMouseMove = (e) => {
    const newParticle = {
      id: Math.random(), // Unique ID
      x: e.clientX,
      y: e.clientY,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`, // Random bright color
    };

    setParticles((prev) => [...prev, newParticle]);

    // Remove particle after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none overflow-visible z-[99999]">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 1, scale: 0.5 }}
              animate={{ opacity: 0, scale: 2, y: -50 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: particle.x,
                top: particle.y,
                width: "8px",
                height: "8px",
                backgroundColor: particle.color,
                //star
                clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                // triangle
                // clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                // circle
                //borderRadius: "50%",



                zIndex: 99999, // Ensure highest layer
              }}
            />
          ))}
        </div>
      );
      
};

export default CursorEffect;
