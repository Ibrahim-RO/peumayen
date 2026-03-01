"use client"

import * as React from "react"
import { useState } from "react"
import {
    LayoutDashboard, UtensilsCrossed, BookOpen, Settings,
    ChevronRight, Menu, X, Layers, Coffee,
    ChefHat, Cake, Leaf, LogOut
} from "lucide-react"
import Link from "next/link"

const NAV_ITEMS = [
    { id: "admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "admin/categorias", label: "Categorías", icon: Layers },
    { id: "admin/menu", label: "Menú", icon: BookOpen },
    // { id: "configuracion", label: "Configuración", icon: Settings },
]

function SidebarContent({ collapsed = false, onClose = null }: { collapsed?: boolean; onClose?: (() => void) | null }) {
    const [activeNav, setActiveNav] = useState("dashboard")

    return (
        <div className="flex flex-col h-full bg-[#2c2218] text-stone-200 font-serif relative overflow-hidden">

            {/* Brand */}
            <div className={`flex items-center border-b border-amber-900/30 ${collapsed ? "justify-center px-3 py-5" : "justify-between px-5 py-5"}`}>
                <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl shrink-0 bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                        <ChefHat size={18} className="text-neutral-900" />
                    </div>
                    {!collapsed && (
                        <div>
                            <div className="text-[9px] text-amber-600 tracking-widest uppercase">Restaurante</div>
                            <div className="text-sm font-bold text-stone-100 tracking-wide">Peumayén</div>
                        </div>
                    )}
                </div>
                {onClose && (
                    <button onClick={onClose} className="text-stone-500 hover:text-stone-200 transition-colors">
                        <X size={16} />
                    </button>
                )}
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto px-2.5 py-3.5">
                {!collapsed && (
                    <p className="text-[9px] text-amber-700/70 tracking-widest uppercase px-2.5 mb-1.5">Navegación</p>
                )}

                {NAV_ITEMS.map(item => {
                    const Icon = item.icon
                    const isActive = activeNav === item.id
                    return (
                        <Link 
                            href={`/${item.id}`} 
                            passHref 
                            key={item.id}
                            onClick={() => setActiveNav(item.id)}
                            className={`
                                w-full flex items-center gap-2.5 rounded-xl mb-0.5 text-[13px] transition-all duration-150 border-l-2
                                ${collapsed ? "justify-center p-2.5" : "justify-start px-3 py-2"}
                                ${isActive
                                    ? "border-amber-400 bg-amber-400/10 text-amber-300"
                                    : "border-transparent text-stone-400 hover:bg-white/5 hover:text-stone-100"}
                            `}
                        >
                            <Icon size={15} className="shrink-0" />
                            {!collapsed && <span>{item.label}</span>}
                        </Link>
                    )
                })}                
            </nav>

            {/* User */}
            <div className={`border-t border-amber-900/30 flex items-center gap-2.5 ${collapsed ? "justify-center px-2.5 py-3.5" : "justify-between px-4 py-3.5"}`}>
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full shrink-0 bg-linear-to-br from-amber-800 to-amber-500 flex items-center justify-center text-[11px] font-bold text-neutral-900">
                        AC
                    </div>
                    {!collapsed && (
                        <div>
                            <div className="text-xs font-semibold text-stone-200">Admin Chef</div>
                            <div className="text-[10px] text-stone-500">admin@latrattoria.mx</div>
                        </div>
                    )}
                </div>
                {!collapsed && (
                    <button className="text-stone-500 hover:text-red-400 transition-colors">
                        <LogOut size={14} />
                    </button>
                )}
            </div>
        </div>
    )
}

export default function Sidebar({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <div className="flex min-h-screen">

            {/* Desktop sidebar */}
            <aside
                className={`hidden md:block shrink-0 relative transition-all duration-300 ease-in-out ${collapsed ? "w-17" : "w-64"}`}
            >
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="absolute top-5 -right-3 z-10 w-6 h-6 rounded-full bg-[#2c2218] border border-amber-400/25 flex items-center justify-center text-amber-300 hover:text-amber-400 transition-colors"
                >
                    <ChevronRight
                        size={13}
                        className={`transition-transform duration-250 ${collapsed ? "rotate-0" : "rotate-180"}`}
                    />
                </button>
                <div className="h-full">
                    <SidebarContent collapsed={collapsed} />
                </div>
            </aside>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    className="fixed inset-0 bg-black/55 backdrop-blur-sm z-40 md:hidden"
                />
            )}

            {/* Mobile drawer */}
            <div
                className={`fixed top-0 left-0 h-screen w-64 z-50 md:hidden transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <SidebarContent onClose={() => setMobileOpen(false)} />
            </div>

            {/* Right side: header + content */}
            <div className="flex-1 flex flex-col min-w-0 bg-gray-50">

                {/* Header */}
                <header className="h-14 shrink-0 flex items-center justify-between px-5 bg-white border-b border-gray-200 font-serif shadow-sm">

                    {/* Hamburger — solo móvil */}
                    <button
                        className="flex md:hidden items-center mr-3 text-amber-500"
                        onClick={() => setMobileOpen(true)}
                    >
                        <Menu size={20} />
                    </button>

                    {/* Page title */}
                    <div className="flex-1">
                        <div className="text-sm font-bold text-gray-800 tracking-wide">Dashboard</div>
                        <div className="text-[10px] text-gray-400 tracking-wider">Panel de Gestión</div>
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-2.5">
                        <div className="text-[11px] text-gray-500 bg-gray-100 border border-gray-200 rounded-lg px-3 py-1 hidden sm:block">
                            {new Date().toLocaleDateString("es-MX", { weekday: "short", day: "numeric", month: "short" })}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-amber-900 to-amber-400 flex items-center justify-center text-[10px] font-bold text-neutral-900 cursor-pointer">
                            AC
                        </div>
                    </div>
                </header>

                {/* Content slot */}
                <main className="flex-1 overflow-y-auto p-6 text-black">
                    {children}
                </main>
            </div>
        </div>
    )
}