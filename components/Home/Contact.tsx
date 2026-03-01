"use client";

import { useForm } from "react-hook-form";
import {
    Field,
    FieldContent,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

type ContactFormValues = {
    nombre: string;
    apellidos: string;
    email: string;
    telefono: string;
    mensaje: string;
};

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>();

    const onSubmit = async (data: ContactFormValues) => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 1200));
        reset();
    };

    const container = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                duration: 0.6,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-8 md:py-20 px-8 md:px-4 bg-white/10 backdrop-blur-md border border-white/10">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-2xl mx-auto space-y-8"
            >
                <motion.h2
                    variants={item}
                    className="text-3xl font-bold text-center"
                >
                    Contacto
                </motion.h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <FieldSet className="w-full">
                        <FieldGroup className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            {/* Nombre */}
                            <motion.div variants={item}>
                                <Field>
                                    <FieldLabel htmlFor="nombre">Nombre</FieldLabel>
                                    <FieldContent>
                                        <Input
                                            id="nombre"
                                            placeholder="Nombre"
                                            className="focus:ring-2 focus:ring-amber-400 transition-all"
                                            {...register("nombre", {
                                                required: "El nombre es obligatorio",
                                            })}
                                        />
                                    </FieldContent>
                                    {errors.nombre && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <FieldError>
                                                {errors.nombre.message}
                                            </FieldError>
                                        </motion.div>
                                    )}
                                </Field>
                            </motion.div>

                            {/* Apellidos */}
                            <motion.div variants={item}>
                                <Field>
                                    <FieldLabel htmlFor="apellidos">Apellidos</FieldLabel>
                                    <FieldContent>
                                        <Input
                                            id="apellidos"
                                            placeholder="Apellidos"
                                            className="focus:ring-2 focus:ring-amber-400 transition-all"
                                            {...register("apellidos", {
                                                required: "Los apellidos son obligatorios",
                                            })}
                                        />
                                    </FieldContent>
                                    {errors.apellidos && (
                                        <FieldError>
                                            {errors.apellidos.message}
                                        </FieldError>
                                    )}
                                </Field>
                            </motion.div>

                            {/* Email */}
                            <motion.div variants={item}>
                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <FieldContent>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            className="focus:ring-2 focus:ring-amber-400 transition-all"
                                            {...register("email", {
                                                required: "El email es obligatorio",
                                                pattern: {
                                                    value: /^\S+@\S+$/i,
                                                    message: "Email inválido",
                                                },
                                            })}
                                        />
                                    </FieldContent>
                                    {errors.email && (
                                        <FieldError>
                                            {errors.email.message}
                                        </FieldError>
                                    )}
                                </Field>
                            </motion.div>

                            {/* Teléfono */}
                            <motion.div variants={item}>
                                <Field>
                                    <FieldLabel htmlFor="telefono">Teléfono</FieldLabel>
                                    <FieldContent>
                                        <Input
                                            id="telefono"
                                            placeholder="Teléfono"
                                            className="focus:ring-2 focus:ring-amber-400 transition-all"
                                            {...register("telefono", {
                                                required: "El teléfono es obligatorio",
                                                minLength: {
                                                    value: 8,
                                                    message: "Número demasiado corto",
                                                },
                                            })}
                                        />
                                    </FieldContent>
                                    {errors.telefono && (
                                        <FieldError>
                                            {errors.telefono.message}
                                        </FieldError>
                                    )}
                                </Field>
                            </motion.div>

                            {/* Mensaje */}
                            <motion.div variants={item} className="lg:col-span-2">
                                <Field>
                                    <FieldLabel htmlFor="mensaje">Mensaje</FieldLabel>
                                    <FieldContent>
                                        <Textarea
                                            id="mensaje"
                                            rows={6}
                                            placeholder="Dudas, consultas o nueva reserva"
                                            className="resize-none focus:ring-2 focus:ring-amber-400 transition-all"
                                            {...register("mensaje", {
                                                required: "El mensaje es obligatorio",
                                                minLength: {
                                                    value: 10,
                                                    message:
                                                        "El mensaje debe tener al menos 10 caracteres",
                                                },
                                            })}
                                        />
                                    </FieldContent>
                                    {errors.mensaje && (
                                        <FieldError>
                                            {errors.mensaje.message}
                                        </FieldError>
                                    )}
                                </Field>
                            </motion.div>

                            {/* Botón */}
                            <motion.div
                                variants={item}
                                className="lg:col-span-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-4 shadow-lg shadow-amber-400/20 transition-all"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Enviando..." : "Enviar"}
                                </Button>
                            </motion.div>

                        </FieldGroup>
                    </FieldSet>
                </form>
            </motion.div>
        </section>
    );
}