"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutRestaurant() {
    return (
        <section className="relative py-20 px-6 overflow-hidden bg-[#1f1b00]/30">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-amber-500 uppercase tracking-widest text-sm"
                        >
                            Nuestra Historia
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold leading-tight"
                        >
                            Sobre el Restaurante
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-gray-300 leading-relaxed text-lg"
                    >
                        Somos una nueva experiencia gastronómica en la región del Maule,
                        ubicados a 6,5km de la carretera 5 sur, entre Parral y Retiro,
                        a orillas de la ruta L-751 camino a Bullileo.
                        Altos estándares en calidad culinaria y excelencia en el servicio,
                        ligados a un entorno natural de preservación de flora endémica.
                    </motion.p>

                    {/* Horarios Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-4 transition-all"
                    >
                        <h3 className="text-xl font-semibold text-amber-400">
                            Horarios
                        </h3>

                        <ul className="space-y-2 text-gray-300">
                            <li><strong>Lunes:</strong> Cerrado</li>
                            <li><strong>Martes:</strong> 13:00 - 20:30</li>
                            <li><strong>Miércoles a Sábado:</strong> 13:00 - 22:00</li>
                            <li><strong>Domingo:</strong> 13:00 - 18:00</li>
                        </ul>
                    </motion.div>

                    {/* Botón */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Button className="mt-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl px-6 py-3 shadow-lg shadow-amber-500/20">
                            <MapPin className="mr-2 h-4 w-4" />
                            Abrir en Waze
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        viewport={{ once: true }}
                        className="text-sm text-gray-400 space-y-1"
                    >
                        <p>✔ Amplio estacionamiento privado</p>
                        <p>✔ Terraza techada y calefaccionada para fumadores</p>
                    </motion.div>
                </motion.div>

                {/* Imagen */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <motion.div
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-3xl"
                    />

                    <motion.div
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Image
                            src="/nosotros.jpg"
                            alt="Interior del restaurante"
                            width={700}
                            height={500}
                            className="relative rounded-3xl shadow-2xl object-cover"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}