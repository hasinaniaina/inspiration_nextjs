import clsx from 'clsx';
import styles from '@/app/page.module.css';

function GlassBackground({active}:{active?: boolean}) {
  return (
    <div className={clsx(
      {
        [styles.glass]: active == false, 
        [styles.glassActived]: active === true
      }
      )}>
    </div>
  )
}

export default GlassBackground
