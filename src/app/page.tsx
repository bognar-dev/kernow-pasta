"use client"
import Image from "next/image";
import TomatoSplash from "../../public/tomato-splash.svg";
import Penne from "../../public/penne.svg";
import Rigatoni from "../../public/rigatoni.svg";
import Landscape from "../../public/landscape.svg";
import Footer from "@/app/(components)/footer";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';
import { pastaShapes } from "./(config)/config";
import { useScrollTo } from "framer-motion-scroll-to-hook";
import Link from "next/link";
import Button from "./(components)/button";
export default function Home() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)

    }
    requestAnimationFrame(raf)
  }, [])
  return (

    <main ref={container} className=" relative z-10">
      <Section1 />
      <Footer />
      <OurStory />
      <Section2 scrollYProgress={scrollYProgress} />

      <Section3 scrollYProgress={scrollYProgress} />
      <Section4 />
    </main>

  );

}

const OurStory = () => {
  return (
    <div id="OurStory" className="h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center gap-8 text-[#40352F] pt-8 ">
      <h2 className="text-5xl">Our Story</h2>
      <Image
        className="min-w-screen h-40"
        src={Landscape}
        alt="img"
        width={1000}
        height={1000}

      />
      <p className="px-10 md:px-20 text-2xl md:text-7xl leading-loose">Born from a passion for both <span className="px-1 mx-1 py-1 bg-black text-white ">Cornish heritage</span> and <span className="px-1 mx-1 py-1 bg-white text-black">Italian cuisine</span>, KernowPasta was founded with a simple mission:
       <span className="px-1 mx-1 py-1 bg-black text-white leading-loose">to bring the best of Cornwall to your table.</span>
      Our journey began in a small kitchen, experimenting with local ingredients and traditional pasta recipes. Today, we are proud to share our love for Cornish pasta with you.</p>
    </div>
  )
}
const Section1 = () => {
  const scrollTo = useScrollTo({ mass: 1, stiffness: 40, type: 'spring' });
  return (
    <div id="home" className="h-screen bg-[#C72626] text-2xl flex flex-col items-center justify-center text-[#e7d0c3] gap-3 select-none">
      <h1 className="text-9xl ">Pomodoro</h1>
      <Image
        className="w-40 h-40 select-none stroke-[#e7d0c3]"
        src={Rigatoni}
        alt="img"
        width={100}
        height={100}

      />
      <Button
        className=" px-2 py-1 rounded-sm"
        onClick={() => scrollTo(document.querySelector('#pastaShapes'))}>
        
        See our Menu
      </Button>
    </div>
  )
}

const Section2 = ({ scrollYProgress }: { scrollYProgress: any }) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 0.4]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (

    <motion.div style={{ scale, rotate }} className=" md:text-7xl sticky top-0 -z-10 h-screen bg-[#f1e3a3] text-[3.5vw] flex flex-col items-center justify-center text-red-600 pb-3">

      <p className="text-2xl md:text-7xl ">Discover the Taste of Cornwall</p>

      <div className=" text-2xl md:text-7xl flex gap-4">

        <p>in</p>

        <div className="relative w-[12.5vw]">
          <Image
            src={Penne}
            alt="img"
            fill
          />

        </div>

        <p>Every Bite</p>

      </div>

    </motion.div>

  )

}


const Section3 = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <Image src={TomatoSplash} alt="img" fill className="w-full" />
      <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-[#40352F]">
        <p className="text-6xl">Try it with Tomato Ketchup</p>
        <p className="text-2xl">squeeze it and make it feel like home !</p>
      </div>
    </motion.div>
  );
};



const Section4 = () => {
  return (
    
    <div id="pastaShapes" className=" bg-[#f1e3a3] text-[3.5vw] flex flex-col items-center justify-items-center text-[#40352F] py-10 md:py-48">
      <h1 className="text-2xl">Try all of our different pasta shapes</h1>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 items-center justify-center justify-items-stretch">
        {pastaShapes.map(pasta => (
          <Link href={`/pasta/${pasta.name}`} key={pasta.image} className=" flex flex-col items-center justify-center">
            <Image
              className="w-40 h-40"
              src={`/${pasta.image}`}
              alt="img"
              width={100}
              height={100}
            />
            <p>{pasta.name}</p>

          </Link>
        ))}

      </div>
    </div>
  )
}
