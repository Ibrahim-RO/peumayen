"use client";

import { useForm } from "react-hook-form";
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";

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

        // Aquí puedes hacer tu fetch al backend
        // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })

        reset();
    };

    return (
        <section className="py-16 px-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl">
            <div className="max-w-2xl mx-auto space-y-8">
                <h2 className="text-3xl font-bold text-center">Contacto</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <FieldSet className="w-full">
                        <FieldGroup className="grid grid-cols-1 lg:grid-cols-2 gap-5 space-y-4">

                            {/* Nombre */}
                            <Field>
                                <FieldLabel htmlFor="nombre">Nombre</FieldLabel>
                                <FieldContent>
                                    <Input
                                        id="nombre"
                                        placeholder="Nombre"
                                        {...register("nombre", {
                                            required: "El nombre es obligatorio",
                                        })}
                                    />
                                </FieldContent>
                                {errors.nombre && (
                                    <FieldError>{errors.nombre.message}</FieldError>
                                )}
                            </Field>

                            {/* Apellidos */}
                            <Field>
                                <FieldLabel htmlFor="apellidos">Apellidos</FieldLabel>
                                <FieldContent>
                                    <Input
                                        id="apellidos"
                                        placeholder="Apellidos"
                                        {...register("apellidos", {
                                            required: "Los apellidos son obligatorios",
                                        })}
                                    />
                                </FieldContent>
                                {errors.apellidos && (
                                    <FieldError>{errors.apellidos.message}</FieldError>
                                )}
                            </Field>

                            {/* Email */}
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <FieldContent>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
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
                                    <FieldError>{errors.email.message}</FieldError>
                                )}
                            </Field>

                            {/* Teléfono */}
                            <Field>
                                <FieldLabel htmlFor="telefono">Teléfono</FieldLabel>
                                <FieldContent>
                                    <Input
                                        id="telefono"
                                        placeholder="Teléfono"
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
                                    <FieldError>{errors.telefono.message}</FieldError>
                                )}
                            </Field>

                            {/* Mensaje */}
                            <Field className="lg:col-span-2">
                                <FieldLabel htmlFor="mensaje">Mensaje</FieldLabel>

                                <FieldContent>
                                    <Textarea
                                        id="mensaje"
                                        rows={6} 
                                        placeholder="Dudas, consultas o nueva reserva"
                                        className="resize-none"
                                        {...register("mensaje", {
                                            required: "El mensaje es obligatorio",
                                            minLength: {
                                                value: 10,
                                                message: "El mensaje debe tener al menos 10 caracteres",
                                            },
                                        })}
                                    />
                                </FieldContent>

                                {errors.mensaje && (
                                    <FieldError>{errors.mensaje.message}</FieldError>
                                )}
                            </Field>

                            <Button
                                type="submit"
                                className="w-full lg:col-span-2 bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-4 cursor-pointer"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar"}
                            </Button>
                        </FieldGroup>
                    </FieldSet>
                </form>
            </div>
        </section>
    );
}