
import styles from '@/app/page.module.css';
import clsx from 'clsx';
import { getQuotesRelatedToTagName, getTags } from '../api/data';
import { MouseEvent, SetStateAction, useEffect, useState } from 'react';
import Link from 'next/link';
import {motion, AnimatePresence} from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

export default  function Menu(
  {active, showMenu, setActive, setQuotes
  }:
  {
    active?: boolean,
    showMenu:() => void, 
    setActive: (value: SetStateAction<boolean>) => void, 
    setQuotes:  (value: SetStateAction<Array<Record<string, string>>>) => void}) 
{
  const [tags, setTags] = useState<Array<Record<string, string>>>([]);
  const datas = getTags();

  useEffect(() => {
    datas.then((data) => {
      setTags(data);
    }); 
  }, [active]);

  const getQuotes = (e: MouseEvent<HTMLAnchorElement>, tagName: string) => {
    const datas = getQuotesRelatedToTagName(tagName);
    e.preventDefault();
    setActive(!active);

    datas.then((data) => {
      setQuotes(data.results);
    });
  }  
  
  return (
    <AnimatePresence mode='wait'>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity: 1}}
      transition={{duration: 0.9, ease:"easeIn"}}
      className={styles.logoNav}>
            <div className={styles.logo}>
                <p>Inspiration.</p>
            </div>
            <nav>
                <p id={styles.theme} onClick={showMenu}>Theme&nbsp;<FontAwesomeIcon icon={faHamburger}/></p>
            </nav>
      </motion.div>        
      <ul className={clsx( 
          {
            [styles.ulActive]: active === true
          }
        )}>
            {tags.map((tag) => {
              return (
                <li key={tag._id}>
                  <Link  href="" className={clsx( 
                    {
                      [styles.ahrefActive]: active === true
                    }
                  )} onClick={(e) => {
                    getQuotes(e, tag.name);
                  }}>{tag.name}</Link>
                </li>
              )
            })}
        </ul>
    </AnimatePresence>
  )
}

