"use client";
import styles from './page.module.css';
import { poppins } from '@/app/ui/fonts';
import {useRef, useState} from 'react'; 
import Menu from '@/app/ui/menu';
import SwiperSlider from './ui/swiperSlider';
import GlassBackground from './ui/glassBackground';
import clsx from 'clsx';

export default function Home() {
  const [quotes, setQuotes] = useState<Array<Record<string, string>>>([]);
  const [active, setActive] = useState(false);

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const showMenu = () => {
    let glassActive = !active;
    setActive(glassActive);
  } 

  return (
    <header className={`${styles.header} ${poppins.className}`}>
        <video src="/inspiration.mp4" autoPlay muted loop></video>     
        <Menu active={active} showMenu={showMenu} setActive={setActive} setQuotes={setQuotes}/>
        <GlassBackground active={active} />
        <SwiperSlider active={active} quotes={quotes} setQuotes={setQuotes}/>
    </header>
  );
}
