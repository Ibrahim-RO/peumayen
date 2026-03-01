"use client";

import { useMemo, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Edit3, Trash2, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import AddSeccionModal from "@/components/admin/AddSeccionModal";

type Section = {
    id: number;
    nombre: string;
    descripcion: string;
    totalItems: number;
};

const sampleSections: Section[] = [
    { id: 1, nombre: "Entradas", descripcion: "Aperitivos y entradas", totalItems: 6 },
    { id: 2, nombre: "Platos Fuertes", descripcion: "Platos principales", totalItems: 12 },
    { id: 3, nombre: "Postres", descripcion: "Dulces y postres", totalItems: 5 },
    { id: 4, nombre: "Bebidas", descripcion: "Bebidas frías y calientes", totalItems: 8 },
    { id: 5, nombre: "Ensaladas", descripcion: "Opciones saludables", totalItems: 4 },
];

export default function SectionsAdmin() {
    const [sections, setSections] = useState(sampleSections);
    const [page, setPage] = useState(1);
    const [perPage] = useState(4);
    const [sortKey, setSortKey] = useState<keyof Section | null>(null);
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

    const [newSection, setNewSection] = useState({
        nombre: "",
        descripcion: "",
    });

    function addSection() {
        if (!newSection.nombre.trim()) return;

        const newItem: Section = {
            id: Date.now(),
            nombre: newSection.nombre,
            descripcion: newSection.descripcion,
            totalItems: 0,
        };

        setSections([...sections, newItem]);
        setNewSection({ nombre: "", descripcion: "" });
    }

    function deleteSection(id: number) {
        setSections(sections.filter((s) => s.id !== id));
    }

    function toggleSort(key: keyof Section) {
        if (sortKey === key) {
            setSortDir(sortDir === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortDir("asc");
        }
    }

    const filtered = useMemo(() => {
        let data = [...sections];

        if (sortKey) {
            data.sort((a, b) => {
                const va = a[sortKey];
                const vb = b[sortKey];

                if (typeof va === "number" && typeof vb === "number") {
                    return sortDir === "asc" ? va - vb : vb - va;
                }

                return sortDir === "asc"
                    ? String(va).localeCompare(String(vb))
                    : String(vb).localeCompare(String(va));
            });
        }

        return data;
    }, [sections, sortKey, sortDir]);

    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / perPage));
    const paginated = filtered.slice((page - 1) * perPage, page * perPage);

    return (
        <section className="space-y-5">
            <div className="flex items-center justify-between">
                <h2 className="text-lg md:text-2xl font-bold">Menú</h2>
                <AddSeccionModal />
            </div>

            {/* Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Administración de Secciones</CardTitle>
                </CardHeader>

                <CardContent>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead onClick={() => toggleSort("nombre")} className="cursor-pointer">
                                        Nombre
                                    </TableHead>
                                    <TableHead onClick={() => toggleSort("descripcion")} className="cursor-pointer">
                                        Descripción
                                    </TableHead>
                                    <TableHead onClick={() => toggleSort("totalItems")} className="cursor-pointer">
                                        Total Platillos
                                    </TableHead>
                                    <TableHead>Acciones</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {paginated.map((section) => (
                                    <TableRow key={section.id}>
                                        <TableCell>{section.nombre}</TableCell>
                                        <TableCell>{section.descripcion}</TableCell>
                                        <TableCell>{section.totalItems}</TableCell>
                                        <TableCell>
                                            <div className="flex gap-2">
                                                <Button variant="ghost" size="sm">
                                                    <Edit3 className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => deleteSection(section.id)}
                                                >
                                                    <Trash2 className="h-4 w-4 text-red-500" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="flex flex-col gap-3 md:hidden">
                        {paginated.map((section) => (
                            <div
                                key={section.id}
                                className="rounded-xl border bg-card p-4 shadow-sm flex flex-col gap-3"
                            >
                                <div className="flex justify-between">
                                    <span className="font-semibold text-sm">
                                        {section.nombre}
                                    </span>
                                    <span className="text-sm font-medium">
                                        {section.totalItems} items
                                    </span>
                                </div>

                                <p className="text-sm text-muted-foreground">
                                    {section.descripcion}
                                </p>

                                <div className="flex gap-2 pt-2 border-t">
                                    <Button variant="ghost" size="sm" className="flex-1 gap-2">
                                        <Edit3 className="h-4 w-4" /> Editar
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="flex-1 gap-2 text-destructive"
                                        onClick={() => deleteSection(section.id)}
                                    >
                                        <Trash2 className="h-4 w-4" /> Eliminar
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-sm text-muted-foreground">
                            Mostrando {(page - 1) * perPage + 1} -{" "}
                            {(page - 1) * perPage + paginated.length} de {total}
                        </p>

                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setPage(Math.max(1, page - 1))}
                                disabled={page === 1}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>

                            {Array.from({ length: pages }).map((_, i) => (
                                <Button
                                    key={i}
                                    size="sm"
                                    variant={page === i + 1 ? "default" : "ghost"}
                                    onClick={() => setPage(i + 1)}
                                >
                                    {i + 1}
                                </Button>
                            ))}

                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setPage(Math.min(pages, page + 1))}
                                disabled={page === pages}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </section>
    );
}