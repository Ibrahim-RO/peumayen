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
import { Switch } from "@/components/ui/switch"
import { Edit3, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import AddMenuItemModal from "@/components/admin/AddMenuItemModal";
import toast from "react-hot-toast";

type MenuItem = {
    id: number;
    nombre: string;
    seccion: string;
    precio: number;
    estado: "Disponible" | "Agotado";
    imagen: string;
};

const sampleData: MenuItem[] = [
    {
        id: 1,
        nombre: "Hamburguesa Clásica",
        seccion: "Platos Fuertes",
        precio: 120,
        estado: "Disponible",
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
        id: 2,
        nombre: "Pizza Pepperoni",
        seccion: "Platos Fuertes",
        precio: 180,
        estado: "Disponible",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0-HmskFIOzX-o3_DTZdgLshMNluWvZpwAw&s",
    },
    {
        id: 3,
        nombre: "Ensalada César",
        seccion: "Entradas",
        precio: 95,
        estado: "Disponible",
        imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },
    {
        id: 4,
        nombre: "Cheesecake",
        seccion: "Postres",
        precio: 90,
        estado: "Agotado",
        imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    },
    {
        id: 5,
        nombre: "Malteada de Fresa",
        seccion: "Bebidas",
        precio: 85,
        estado: "Disponible",
        imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    },
];

function EstadoBadge({ estado }: { estado: MenuItem["estado"] }) {
    const styles = {
        Disponible: "bg-green-100 text-green-800",
        Agotado: "bg-red-100 text-red-800",
    };

    return (
        <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${styles[estado]}`}
        >
            {estado}
        </span>
    );
}

export default function MenuAdmin() {
    const [page, setPage] = useState(1);
    const [perPage] = useState(4);
    const [sortKey, setSortKey] = useState<keyof MenuItem | null>(null);
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

    const [menuItems, setMenuItems] = useState<MenuItem[]>(sampleData);

    const filtered = useMemo(() => {
        let data = [...menuItems];

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
    }, [menuItems, sortKey, sortDir]);

    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / perPage));
    const paginated = filtered.slice((page - 1) * perPage, page * perPage);

    function toggleSort(key: keyof MenuItem) {
        if (sortKey === key) {
            setSortDir(sortDir === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortDir("asc");
        }
    }

    function toggleEstado(id: number, checked: boolean) {
        setMenuItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, estado: checked ? "Disponible" : "Agotado" }
                    : item
            )
        );
    }

    return (
        <section className="space-y-5">
            <div className="flex items-center justify-between">
                <h2 className="text-lg md:text-2xl font-bold">Menú</h2>
                <AddMenuItemModal />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Administración del Menú</CardTitle>
                </CardHeader>

                <CardContent>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Imagen</TableHead>
                                    <TableHead onClick={() => toggleSort("nombre")} className="cursor-pointer">Nombre</TableHead>
                                    <TableHead onClick={() => toggleSort("seccion")} className="cursor-pointer">Sección</TableHead>
                                    <TableHead onClick={() => toggleSort("precio")} className="cursor-pointer">Precio</TableHead>
                                    <TableHead>Estatus</TableHead>
                                    <TableHead>Acciones</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {paginated.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <div className="h-14 w-14 rounded-xl overflow-hidden border">
                                                <img
                                                    src={item.imagen}
                                                    alt={item.nombre}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </TableCell>

                                        <TableCell>{item.nombre}</TableCell>
                                        <TableCell>{item.seccion}</TableCell>
                                        <TableCell>${item.precio}</TableCell>

                                        <TableCell>
                                            <Switch
                                                checked={item.estado === "Disponible"}
                                                onCheckedChange={(checked) => {
                                                    toggleEstado(item.id, checked)
                                                    toast.success('Estado actualizado correctamente')
                                                }}
                                                className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-400"
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex gap-2">
                                                <Button variant="ghost" size="sm">
                                                    <Edit3 className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="sm">
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
                        {paginated.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-xl border bg-card p-4 shadow-sm flex flex-col gap-3"
                            >
                                <div className="flex gap-3">
                                    <div className="h-16 w-16 rounded-xl overflow-hidden border shrink-0">
                                        <img
                                            src={item.imagen}
                                            alt={item.nombre}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-between flex-1">
                                        <div className="flex justify-between">
                                            <span className="font-semibold text-sm">
                                                {item.nombre}
                                            </span>
                                            <EstadoBadge estado={item.estado} />
                                        </div>

                                        <span className="text-sm text-muted-foreground">
                                            {item.seccion}
                                        </span>

                                        <span className="font-medium text-sm">
                                            ${item.precio}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-2 border-t">
                                    <Button variant="ghost" size="sm" className="flex-1 gap-2">
                                        <Edit3 className="h-4 w-4" /> Editar
                                    </Button>
                                    <Button variant="ghost" size="sm" className="flex-1 gap-2 text-destructive">
                                        <Trash2 className="h-4 w-4" /> Eliminar
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-sm text-muted-foreground">
                            Mostrando{" "}
                            <span className="font-medium">{(page - 1) * perPage + (paginated.length ? 1 : 0)}</span>
                            {" - "}
                            <span className="font-medium">{(page - 1) * perPage + paginated.length}</span>
                            {" de "}
                            <span className="font-medium">{total}</span>
                        </p>

                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost" size="sm"
                                onClick={() => setPage(Math.max(1, page - 1))}
                                disabled={page === 1}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>

                            <div className="flex items-center gap-1">
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
                            </div>

                            <Button
                                variant="ghost" size="sm"
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