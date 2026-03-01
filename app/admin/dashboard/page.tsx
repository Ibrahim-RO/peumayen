"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UtensilsCrossed, Salad, CakeSlice, Coffee } from "lucide-react";

export default function DashboardAdmin() {
    return (
        <section className="space-y-6 text-black">

            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                    Resumen general del menú
                </p>
            </div>

            {/* Cards principales */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Total General */}
                <Card className="rounded-2xl shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Platillos
                        </CardTitle>
                        <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">42</div>
                        <p className="text-xs text-muted-foreground">
                            En todo el menú
                        </p>
                    </CardContent>
                </Card>

                {/* Entradas */}
                <Card className="rounded-2xl shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">
                            Entradas
                        </CardTitle>
                        <Salad className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground">
                            Platillos registrados
                        </p>
                    </CardContent>
                </Card>

                {/* Postres */}
                <Card className="rounded-2xl shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">
                            Postres
                        </CardTitle>
                        <CakeSlice className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">6</div>
                        <p className="text-xs text-muted-foreground">
                            Opciones dulces
                        </p>
                    </CardContent>
                </Card>

                {/* Bebidas */}
                <Card className="rounded-2xl shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">
                            Bebidas
                        </CardTitle>
                        <Coffee className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">10</div>
                        <p className="text-xs text-muted-foreground">
                            Bebidas disponibles
                        </p>
                    </CardContent>
                </Card>

            </div>

            {/* Secciones detalladas */}
            <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                    <CardTitle>Secciones del Menú</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div className="border rounded-xl p-4">
                        <p className="text-sm text-muted-foreground">Entradas</p>
                        <p className="text-2xl font-bold">8</p>
                    </div>

                    <div className="border rounded-xl p-4">
                        <p className="text-sm text-muted-foreground">Platos Fuertes</p>
                        <p className="text-2xl font-bold">12</p>
                    </div>

                    <div className="border rounded-xl p-4">
                        <p className="text-sm text-muted-foreground">Ensaladas</p>
                        <p className="text-2xl font-bold">4</p>
                    </div>

                    <div className="border rounded-xl p-4">
                        <p className="text-sm text-muted-foreground">Postres</p>
                        <p className="text-2xl font-bold">6</p>
                    </div>

                    <div className="border rounded-xl p-4">
                        <p className="text-sm text-muted-foreground">Bebidas</p>
                        <p className="text-2xl font-bold">10</p>
                    </div>

                    <div className="border rounded-xl p-4">
                        <p className="text-sm text-muted-foreground">Recomendaciones</p>
                        <p className="text-2xl font-bold">2</p>
                    </div>

                </CardContent>
            </Card>

        </section>
    );
}