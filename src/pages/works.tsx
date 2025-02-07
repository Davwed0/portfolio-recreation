"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import * as animation from "../components/animations";
import { useEffect, useState } from "react";
import clsx from "clsx";

import clients from "../clients.json";
const aspectRatios = [16 / 9, 1, 16 / 9, 3 / 4, 16 / 9, 1];

export default function Works() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const [currentClient, setCurrentClient] = useState(0);

    scrollYProgress.onChange((value) => {
        let clientIndex = Math.floor(value * clients.length);
        clientIndex = Math.min(clients.length, Math.max(0, clientIndex));

        setCurrentClient(clientIndex);
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            className={clsx(
                "absolute flex w-full scroll-pt-40 flex-col space-x-1 pb-8 pr-8 pt-0",
                "xl: xl:left-0 xl:top-0 xl:h-full xl:w-[calc(100%-2rem)] xl:p-4 xl:pb-[45vh] xl:pt-[45vh]",
            )}
        >
            <motion.div
                className={clsx(
                    "fixed z-50 grid w-[calc(100%-2rem)] grid-cols-[repeat(16,minmax(0,1fr))] gap-x-4",
                )}
            >
                <motion.div className="col-span-2 col-start-6 flex flex-col">
                    {clients.map((client) => (
                        <motion.div
                            layout="position"
                            layoutId={`layout_${client.id}_text`}
                            key={`layout_${client.id}_text`}
                            className="user-select-none flex select-none items-center justify-between text-[0.8rem] font-semibold uppercase tracking-wide"
                            onClick={() => {
                                document
                                    .getElementById(`${client.id}_tag`)
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                        >
                            {client.name}
                        </motion.div>
                    ))}
                </motion.div>
                <motion.span
                    className="user-select-none relative ml-2 h-4 select-none items-center justify-between text-[0.8rem] font-semibold uppercase tracking-wide"
                    transition={{
                        duration: 0.2,
                    }}
                    animate={{
                        top: `${currentClient}rem`,
                    }}
                >
                    ◄
                </motion.span>
            </motion.div>

            <motion.div style={{ y: `${y}%` }}>
                {clients.map((client, index) => (
                    <motion.div
                        key={`client_row_${index}`}
                        className="relative mb-24 grid w-full grid-cols-[repeat(8,minmax(0,2fr))] gap-x-8 pb-24"
                        variants={animation.boxAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {aspectRatios.map((aspectRatio, i) => (
                            <>
                                <div
                                    id={`${client.id}_tag`}
                                    className="absolute -top-[calc(45vh+1rem)]"
                                />
                                <motion.div
                                    key={`${client}_boxes_${i}`}
                                    variants={animation.boxAnimation}
                                    className={`relative aspect-square w-full`}
                                    style={{
                                        gridColumnStart: i < 2 ? i + 1 : i + 3,
                                    }}
                                >
                                    <div
                                        className="h-full bg-gray-200"
                                        style={{
                                            height: `${100 / aspectRatio}%`,
                                        }}
                                    />
                                </motion.div>
                                {i == client.rowIndex && (
                                    <motion.span
                                        className={`absolute bottom-0 origin-top-left text-5xl col-start-${
                                            i < 2 ? i : i + 3
                                        } font-semibold`}
                                        key={`${client}_pointer`}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={
                                            animation.textRevealAnimation
                                                .slideIn
                                        }
                                        transition={
                                            animation.textRevealTransition
                                                .slideIn
                                        }
                                    >
                                        0{index + 1}
                                    </motion.span>
                                )}
                            </>
                        ))}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
