"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroAnimation(){
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const scale = useTransform(scrollYProgress,[0,1],[20,1])

    const rotate = useTransform(scrollYProgress,[0,1],['180deg','0deg'])

    return(
        <div ref={ref} className=" h-[300vh]">
            {/* Div A */}
            <div className=" overflow-hidden flex flex-col items-center justify-center sticky top-0 h-[100vh] border">
                {/* Div B */}
                <motion.div style={{scale,rotate}} className=" w-32 h-32 border border-pink-500">
                    {/* Div C */}
                    
                </motion.div>
            </div>
        </div>
    )
}