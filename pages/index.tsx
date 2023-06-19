import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "@/components/Hero";
import About from "@/components/About";
import Why from "@/components/Why";
import Countdown from "@/components/Countdown";
import VisaConsultation from "@/components/VisaConsultation";
import GoToTopButton from "@/components/GoToTopButton";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={``}
    >
      <Hero/>
      <About/>
      <Why/>
      <Countdown/>
      <VisaConsultation/>
      <GoToTopButton/>
    </main>
  )
}
