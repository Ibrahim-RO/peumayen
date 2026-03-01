"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { restaurantFAQ } from "@/src/data/questions";
import { motion } from "framer-motion";

export default function FrecuentlyQuestions() {
    return (
        <section className="py-20 px-5 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-muted-foreground md:text-lg">
                        Resolvemos tus dudas antes de tu visita.
                    </p>
                </motion.div>

                {/* Accordion */}
                <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-6"
                >
                    {restaurantFAQ.map((item, index) => (
                        <motion.div
                            key={item.question}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <AccordionItem
                                value={`item-${index}`}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 shadow-lg shadow-black/10 transition-all duration-300"
                            >
                                <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>

                                <AccordionContent className="leading-relaxed pt-2 pb-4 text-muted-foreground">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {item.answer}
                                    </motion.div>
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}