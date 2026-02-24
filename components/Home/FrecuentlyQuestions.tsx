"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { restaurantFAQ } from "@/src/data/questions";

export default function FrecuentlyQuestions() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-muted-foreground md:text-lg">
                        Resolvemos tus dudas antes de tu visita.
                    </p>
                </div>

                {/* Accordion */}
                <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-4"
                >
                    {restaurantFAQ.map((item, index) => (
                        <AccordionItem
                            key={item.question}
                            value={`item-${index}`}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-2"
                        >
                            <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className=" leading-relaxed pt-2 pb-4">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}