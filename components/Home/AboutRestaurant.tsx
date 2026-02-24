"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function AboutRestaurant() {
    return (
        <section className="relative py-20 px-6 overflow-hidden bg-[#1f1b00]/30">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Texto */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <p className="text-amber-500 uppercase tracking-widest text-sm">
                            Nuestra Historia
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Sobre el Restaurante
                        </h2>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-lg">
                        Somos una nueva experiencia gastronómica en la región del Maule,
                        ubicados a 6,5km de la carretera 5 sur, entre Parral y Retiro,
                        a orillas de la ruta L-751 camino a Bullileo.
                        Altos estándares en calidad culinaria y excelencia en el servicio,
                        ligados a un entorno natural de preservación de flora endémica.
                    </p>

                    {/* Horarios Card */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-amber-400">
                            Horarios
                        </h3>

                        <ul className="space-y-2 text-gray-300">
                            <li><strong>Lunes:</strong> Cerrado</li>
                            <li><strong>Martes:</strong> 13:00 - 20:30</li>
                            <li><strong>Miércoles a Sábado:</strong> 13:00 - 22:00</li>
                            <li><strong>Domingo:</strong> 13:00 - 18:00</li>
                        </ul>
                    </div>

                    {/* Botón */}
                    <Button className="mt-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl px-6 py-3">
                        <MapPin className="mr-2 h-4 w-4" />
                        Abrir en Waze
                    </Button>

                    <div className="text-sm text-gray-400 space-y-1">
                        <p>✔ Amplio estacionamiento privado</p>
                        <p>✔ Terraza techada y calefaccionada para fumadores</p>
                    </div>
                </div>

                {/* Imagen */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-3xl"></div>
                    <Image
                        src="/nosotros.jpg"
                        alt="Interior del restaurante"
                        width={700}
                        height={500}
                        className="relative rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

            </div>
        </section>
    );
}