"use client"
import Image from "next/image";
import TomatoSplash from "@/public/tomato-splash.svg";
import Penne from "@/public/Penne.svg";
import Rigatoni from "@/public/Rigatoni.svg";
import Landscape from "@/public/landscape.svg";
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
    <div id="OurStory" className="h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center gap-8 text-[#40352F] ">
      <h2 className="text-5xl">Our Story</h2>
      <Image
        className="min-w-screen h-40"
        src={Landscape}
        alt="img"
        width={1000}
        height={1000}

      />
      <p className="px-20 text-7xl leading-relaxed">Born from a passion for both <span className="px-2 mx-1 py-1 bg-black text-white">Cornish heritage</span> and <span className="px-2 mx-1 py-1 bg-white text-black">Italian cuisine</span>, KernowPasta was founded with a simple mission:
       <span className="px-2 mx-1 py-1 bg-black text-white">to bring the best of Cornwall to your table.</span>
      Our journey began in a small kitchen, experimenting with local ingredients and traditional pasta recipes. Today, we are proud to share our love for Cornish pasta with you.</p>
    </div>
  )
}
const Section1 = () => {
  const scrollTo = useScrollTo({ mass: 1, stiffness: 40, type: 'spring' });
  return (
    <div id="home" className="h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-[#40352F]">
      <h1>Kernow Pasta</h1>
      <Image
        className="w-40 h-40"
        src={Rigatoni}
        alt="img"
        width={100}
        height={100}

      />
      <Button
        onClick={() => scrollTo(document.querySelector('#pastaShapes'))}>
        See our pasta shapes
      </Button>
    </div>
  )
}

const Section2 = ({ scrollYProgress }: { scrollYProgress: any }) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 0.4]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (

    <motion.div style={{ scale, rotate }} className=" sticky top-0 -z-10 h-screen bg-[#f1e3a3] text-[3.5vw] flex flex-col items-center justify-center text-red-600 pb-3">

      <p>Discover the Taste of Cornwall</p>

      <div className="flex gap-4">

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
    <div id="pastaShapes" className=" bg-[#f1e3a3] text-[3.5vw] flex flex-col items-center justify-items-center text-[#40352F] py-48">
      <h1>Try all of our different pasta shapes</h1>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 items-center justify-center justify-items-stretch">
        {pastaShapes.map(pasta => (
          <Link href={`/pasta/${pasta.name}`} key={pasta.name} className=" flex flex-col items-center justify-center">
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
