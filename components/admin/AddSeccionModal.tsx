"use client"

import { Button } from "@/components/ui/button"
import { DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import Modal from "../ui/Modal"
import { Field } from "../ui/field"

export default function AddSeccionModal() {
    return (
        <Modal
            buttonText="Agregar Sección"
            title="Nueva Sección"
            description="Agrega una nueva sección"
        >
            <form className="space-y-4">

                <Field>
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Ej: Entradas, postres, etc."
                    />
                </Field>

                <Field>
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                        id="description"
                        name="description"
                        placeholder="Descripción de la sección"
                        className="resize-none"
                    />
                </Field>
                {/* Botones */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
                    <DialogClose asChild>
                        <Button variant="outline" className="w-full">
                            Cancelar
                        </Button>
                    </DialogClose>

                    <Button
                        type="submit"
                        className="w-full cursor-pointer bg-amber-900"
                    >
                        Guardar Sección
                    </Button>
                </div>

            </form>
        </Modal>
    )
}