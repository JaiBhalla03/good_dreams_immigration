import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "@/components/Hero";
import About from "@/components/About";
import Why from "@/components/Why";
import Countdown from "@/components/Countdown";
import Contact from "@/components/Contact";
import GoToTopButton from "@/components/GoToTopButton";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`w-full relative`}
    >
      <Hero/>
      <About/>
      <Why/>
      <Countdown/>
      <Contact/>
      <GoToTopButton/>
    </main>
  )
}
