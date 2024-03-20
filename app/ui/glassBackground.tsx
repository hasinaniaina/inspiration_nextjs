import clsx from 'clsx';
import styles from '@/app/page.module.css';
import {motion} from "framer-motion";

function GlassBackground({active}:{active?: boolean}) {
  return (
      <motion.div 
      initial={{translateX: "-100%"}}
      animate={{translateX: "0"}}
      transition={{duration: 0.4, ease:"easeIn"}}
      className={clsx(
        {
          [styles.glass]: active == false, 
          [styles.glassActived]: active === true
        }
        )}>
      </motion.div>
  )
}

export default GlassBackground
