// Reusable stagger container
export const staggerContainer = (staggerTime = 0.3) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerTime,
    },
  },
});

// Reusable fade + slide up
export const fadeInUp = (distance = 60, duration = 0.6) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});

// Optional: fade + scale
export const fadeInScale = (duration = 0.5) => ({
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});

// Fade from left
export const fadeInLeft = (distance = 100, duration = 0.6) => ({
  hidden: {
    opacity: 0,
    x: -distance,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});

// Fade from right
export const fadeInRight = (distance = 100, duration = 0.6) => ({
  hidden: {
    opacity: 0,
    x: distance,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});
