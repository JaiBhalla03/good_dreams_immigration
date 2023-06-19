import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {AnimatePresence} from "framer-motion";
import Info from "@/components/Info";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <AnimatePresence mode={'wait'}>
          <Info/>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </AnimatePresence>
  )
}
