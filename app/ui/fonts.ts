import { Poppins } from 'next/font/google';
import { Dancing_Script } from 'next/font/google';

export const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
  });

export const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});