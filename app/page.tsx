"use client"
import Image from "next/image";
import Penne from "../public/penne.svg";
import TomatoSplash from "../public/tomato-splash.svg";
import Rigatoni from "../public/rigatoni.svg";
import Footer from "@/app/(components)/footer";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';
import { pastaShapes } from "./(config)/config";
import { useScrollTo } from "framer-motion-scroll-to-hook";
import Link from "next/link";
export default function Home() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "0.7 0.7"]
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

    <main ref={container} className="relative h-[500vh]">
      <Section1 />
      <Footer />
      <Section2 scrollYProgress={scrollYProgress} />

      <Section3 scrollYProgress={scrollYProgress} />
      <Section4 />
    </main>

  );

}


const Section1 = () => {
  const scrollTo = useScrollTo({ mass: 1, stiffness: 40, type: 'spring' });
  return (
    <div className="h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-[#40352F]">
      <h1>Kernow Pasta</h1>
      <Image
        className="w-40 h-40"
        src={Rigatoni}
        alt="img"
        width={100}
        height={100}

      />
      <button className=" text-2xl border px-2 pb-1 mt-3 rounded-sm border-[#40352F]"
        onClick={() => scrollTo(document.querySelector('#pastaShapes'))}>
        See our pasta shapes
      </button>
    </div>
  )
}

const Section2 = ({ scrollYProgress }: { scrollYProgress: any }) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (

    <motion.div style={{ scale, rotate }} className=" sticky top-0 h-screen bg-[#f1e3a3] text-[3.5vw] flex flex-col items-center justify-center text-red-600 pb-3">

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
    <div id="pastaShapes" className="h-screen bg-[#f1e3a3] text-[3.5vw] flex flex-col items-center justify-items-center text-[#40352F]">
      <h1>Try all of our different pasta shapes</h1>
      <div className="flex flex-wrap items-center justify-center ">
        {pastaShapes.map(shape => (
          <Link href={`/pasta/${shape.name}`} key={shape.name} className=" flex flex-col items-center justify-center">
            <Image
              className="w-40 h-40"
              src={shape.image}
              alt="img"
              width={100}
              height={100}
            />
            <p>{shape.name}</p>
          </Link>
        ))}

      </div>
    </div>
  )
}
