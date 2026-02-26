"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        image: "/1.jpg",
        title: "Descubre una nueva experiencia gastronómica en la región del Maule",
        description:
            "Sabores auténticos y servicio de excelencia en un entorno natural único.",
    },
    {
        image: "/2.jpg",
        title: "Un oasis culinario en la carretera 5 sur",
        description:
            "Encuéntranos a solo 6,5km entre Parral y Retiro, junto a la ruta L-751",
    },
    {
        image: "/3.jpg",
        title: "Calidad culinaria sin igual en el Maule",
        description:
            "Deléitate con nuestros platos y descubre la riqueza de nuestra flora endémica",
    },
    {
        image: "/4.jpg",
        title: "Sumérgete en una experiencia gastronómica excepcional",
        description:
            "Saborea nuestra cocina y disfruta de un entorno natural preservado",
    },
    {
        image: "/5.jpg",
        title: "Una experiencia culinaria para los amantes de la buena mesa",
        description:
            "Disfruta de nuestra propuesta gastronómica en un entorno privilegiado del Maule",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const router = useRouter();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoPlay = () => {
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
    };

    const resetAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        startAutoPlay();
    };

    useEffect(() => {
        startAutoPlay();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
        resetAutoPlay();
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
        resetAutoPlay();
    };

    return (
        <section className="relative h-dvh w-full flex items-center justify-center text-white overflow-hidden">

            {/* Background animado */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[current].image}
                        alt={slides[current].title}
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/70" />

            {/* Flechas */}
            <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="absolute left-6 md:left-10 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-amber-500 hover:text-black transition-all"
            >
                <ChevronLeft size={28} />
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="absolute right-6 md:right-10 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-amber-500 hover:text-black transition-all"
            >
                <ChevronRight size={28} />
            </motion.button>

            {/* Contenido */}
            <div className="relative z-10 text-center px-6 max-w-4xl space-y-8">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="uppercase tracking-[0.3em] text-amber-400 text-sm"
                >
                    Restaurante Peumayén
                </motion.p>

                <AnimatePresence mode="wait">
                    <motion.h1
                        key={slides[current].title}
                        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-4xl font-bold leading-tight"
                    >
                        {slides[current].title}
                    </motion.h1>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.p
                        key={slides[current].description}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-gray-300 md:text-base max-w-xl mx-auto"
                    >
                        {slides[current].description}
                    </motion.p>
                </AnimatePresence>

                <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        size="lg"
                        onClick={() => router.push("/menu")}
                        className="bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl px-8 py-6 text-lg shadow-2xl shadow-amber-500/30"
                    >
                        Ver Menú
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 flex gap-3">
                {slides.map((_, index) => (
                    <motion.div
                        key={index}
                        animate={{
                            width: index === current ? 32 : 8,
                            backgroundColor:
                                index === current
                                    ? "#fbbf24"
                                    : "rgba(255,255,255,0.5)",
                        }}
                        transition={{ duration: 0.4 }}
                        className="h-2 rounded-full"
                    />
                ))}
            </div>
        </section>
    );
}