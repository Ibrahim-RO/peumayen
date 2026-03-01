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

export default function AddMenuItemModal() {
    return (
        <Modal
            buttonText="Agregar Platillo"
            title="Nuevo Platillo"
            description="Agrega un platillo nuevo al menú"
        >
            <form className="space-y-4">

                {/* Nombre */}
                <div className="grid gap-2">
                    <Label htmlFor="name">Nombre del platillo</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Ej: Hamburguesa Especial"
                    />
                </div>

                {/* Sección */}
                <div className="grid gap-2">
                    <Label>Sección</Label>
                    <Select name="section">
                        <SelectTrigger>
                            <SelectValue placeholder="Selecciona una sección" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="entradas">Entradas</SelectItem>
                            <SelectItem value="platos_fuertes">Platos Fuertes</SelectItem>
                            <SelectItem value="bebidas">Bebidas</SelectItem>
                            <SelectItem value="postres">Postres</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Precio */}
                <div className="grid gap-2">
                    <Label htmlFor="price">Precio</Label>
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        placeholder="Ej: 120"
                    />
                </div>

                {/* Descripción */}
                <div className="grid gap-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                        id="description"
                        name="description"
                        placeholder="Describe el platillo..."
                        className="resize-none"
                    />
                </div>

                {/* Imagen */}
                <div className="grid gap-2">
                    <Label htmlFor="image">Imagen</Label>
                    <Input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        className="cursor-pointer"
                    />
                </div>

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
                        Guardar Platillo
                    </Button>
                </div>

            </form>
        </Modal>
    )
}