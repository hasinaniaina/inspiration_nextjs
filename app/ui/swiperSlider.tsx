
import { dancingScript } from '@/app/ui/fonts';
import { getQuotes } from '../api/data';
import clsx from 'clsx';
import styles from '@/app/page.module.css';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, EffectFade} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { SetStateAction, useEffect, useState } from 'react';



function SwiperSlider({active, quotes, setQuotes}:{active?: boolean, quotes: Array<Record<string, string>>, setQuotes:  (value: SetStateAction<Array<Record<string, string>>>) => void}) {
  const datas = getQuotes();

  useEffect(() => {
    datas.then((data) => {
      setQuotes(data.results);
    })
  }, []);


  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      navigation
      effect="fade"
      direction='horizontal'
      className={clsx(`${dancingScript.className} `, {
        [styles.sliderContainerHidden]: active === true,
        [styles.sliderContainer]: active === false
      })}
      rewind={true}
    >
      {quotes.map((quote) => {
        return (   
          <SwiperSlide  className={styles.sliderItem} key={quote._id}>
          <div className={styles.citation}>
            <p>{quote.content}</p>
            <p>-{quote.author}</p>
          </div>
        </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SwiperSlider;
