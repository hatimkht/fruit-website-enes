import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 28, filter: 'blur(6px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(6px)',
    transition: { duration: 0.45, ease: [0.64, 0, 0.78, 0] },
  },
}

export default function PageTransition({ children, className = 'page' }) {
  return (
    <motion.main
      className={className}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.main>
  )
}
