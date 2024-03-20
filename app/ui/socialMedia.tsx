import styles from "@/app/page.module.css";
import clsx from "clsx";
import Link from 'next/link';
import {motion, AnimatePresence} from "framer-motion";

function SocialMedia({ active }: { active: boolean }) {
    return (
        <AnimatePresence mode='wait'>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease:"easeIn"}}
            className={clsx({
                [styles.socialMedia]: active == false,
                [styles.socialMediaHidden]: active == true
            })}>
                <Link href="https://web.facebook.com/hasinaniaina.rakotondrainibe" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook"><path fill="#1976D2" d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path><path fill="#FAFAFA" fill-rule="evenodd" d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z" clip-rule="evenodd"></path></svg>Facebook</Link>
                <Link href="https://www.linkedin.com/in/hasinaniaina-rakotondrainibe-36617a172/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87" id="linkedin"><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="#0b86ca" rx="6.48" ry="6.48"></rect><path fill="#fff" d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"></path></g></g></svg> Linkedin</Link>
            </motion.div>
        </AnimatePresence>
    )
}

export default SocialMedia