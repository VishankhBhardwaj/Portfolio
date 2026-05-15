const textVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: "blur(10px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default textVariants;