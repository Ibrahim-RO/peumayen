"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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

            {/* Background Slides */}
            {slides.map((slide, index) => (
                <Image
                    key={index}
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className={`object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/70" />

            {/* Flecha Izquierda */}
            <button
                onClick={prevSlide}
                className="absolute left-6 md:left-10 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-amber-500 hover:text-black transition-all duration-300"
            >
                <ChevronLeft size={28} />
            </button>

            {/* Flecha Derecha */}
            <button
                onClick={nextSlide}
                className="absolute right-6 md:right-10 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-amber-500 hover:text-black transition-all duration-300"
            >
                <ChevronRight size={28} />
            </button>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl space-y-8">

                <p className="uppercase tracking-[0.3em] text-amber-400 text-sm">
                    Restaurante Peumayén
                </p>

                <h1
                    key={slides[current].title}
                    className="text-2xl md:text-4xl font-bold leading-tight animate-fadeIn"
                >
                    {slides[current].title}
                </h1>

                <p
                    key={slides[current].description}
                    className="text-gray-300 md:text-base max-w-xl mx-auto animate-fadeIn"
                >
                    {slides[current].description}
                </p>

                <Button
                    size="lg"
                    onClick={() => router.push("/menu")}
                    className="bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl px-8 py-6 text-lg shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                    <ArrowRight className="ml-2 h-5 w-5" />
                    Ver Menú                    
                </Button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 flex gap-3">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${index === current
                                ? "w-8 bg-amber-400"
                                : "w-2 bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}