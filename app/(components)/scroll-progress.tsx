"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end end"],
    });
    const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);
    return (
        <motion.div
            className="
        fixed
        right-0
        top-0
        mr-1
        mt-1
        w-[3px]
        h-[13px]
        bg-black
        z-50
        origin-top
        "
        style={{ scaleY: progress }}
        />
    )
}

export default ScrollProgress;