import { motion } from 'framer-motion'

function MotionWrapper({ children }) {
  const pageMotion = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },   
    exit: { opacity: 0, x: 10, transition: { duration: 0.4 } }
  }

  return <motion.div {...pageMotion}>{children}</motion.div>
}

export default MotionWrapper