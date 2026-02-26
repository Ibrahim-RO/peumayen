"use client"

import { menu } from "@/src/data/data"
import { useState, useEffect, useMemo } from "react"
import "photoswipe/style.css"
import { GlassWater, Salad, Search, X } from "lucide-react"
import { Menu } from "@/src/types"

// Tipo para un tab aplanado
type FlatTab = {
  label: string
  parentName: string
  subName?: string
}

// Tipo para un resultado de búsqueda
type SearchResult = {
  product: any
  categoryLabel: string
}

// Construye la lista plana de tabs para una sección
function buildTabs(section: keyof Menu): FlatTab[] {
  const tabs: FlatTab[] = []
  for (const cat of menu[section].category) {
    tabs.push({ label: cat.name, parentName: cat.name })
  }
  return tabs
}

// Obtiene los bloques a renderizar para un tab seleccionado
function getBlocks(section: keyof Menu, activeTab: FlatTab) {
  const cat = menu[section].category.find((c) => c.name === activeTab.parentName)
  if (!cat) return []

  if (activeTab.subName) {
    const sub = cat.subcategory?.find((s) => s.name === activeTab.subName)
    return sub ? [{ title: null, products: sub.products }] : []
  }

  const blocks: { title: string | null; products: any[] }[] = []

  if (cat.products && cat.products.length > 0) {
    blocks.push({ title: null, products: cat.products })
  }

  if (cat.subcategory) {
    for (const sub of cat.subcategory) {
      blocks.push({ title: sub.name, products: sub.products })
    }
  }

  return blocks
}

// Busca en TODA la data (ambas secciones)
function searchAllProducts(query: string): SearchResult[] {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  const results: SearchResult[] = []

  for (const sectionKey of Object.keys(menu) as (keyof typeof menu)[]) {
    for (const cat of menu[sectionKey].category) {
      for (const product of cat.products) {
        if (
          product.name.toLowerCase().includes(q) ||
          product.description?.toLowerCase().includes(q)
        ) {
          results.push({ product, categoryLabel: cat.name })
        }
      }
      if (cat.subcategory) {
        for (const sub of cat.subcategory) {
          for (const product of sub.products) {
            if (
              product.name.toLowerCase().includes(q) ||
              product.description?.toLowerCase().includes(q)
            ) {
              results.push({ product, categoryLabel: `${cat.name} › ${sub.name}` })
            }
          }
        }
      }
    }
  }

  return results
}

function ProductCard({ item, index }: { item: any; index: number }) {
  return (
    <div
      className="group relative bg-white/80 backdrop-blur-md rounded-3xl 
      shadow-lg hover:shadow-2xl 
      transition-all duration-500 
      hover:-translate-y-2
      animate-fadeIn"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
    >
      <div className="relative overflow-hidden rounded-t-3xl">
        <a
          href={item.image || "/5.jpg"}
          data-pswp-width="1200"
          data-pswp-height="800"
        >
          <div className="h-48 bg-linear-to-br from-[#e8dfd2] to-[#d6c5b0] flex items-center justify-center cursor-zoom-in">
            <img
              src={item.image || "/5.jpg"}
              alt={item.name}
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 pointer-events-none" />
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-xl text-black group-hover:text-red-600 transition">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          {item.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-orange-600 font-bold text-lg">
            ${item.price.toLocaleString("es-CL")}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function MenuPage() {
  const [section, setSection] = useState<keyof Menu>("comida")
  const [activeTab, setActiveTab] = useState<FlatTab>(() => buildTabs("comida")[0])
  const [searchQuery, setSearchQuery] = useState("")

  const tabs = buildTabs(section)
  const blocks = getBlocks(section, activeTab)

  const searchResults = useMemo(() => searchAllProducts(searchQuery), [searchQuery])
  const isSearching = searchQuery.trim().length > 0

  useEffect(() => {
    let lightbox: any

    const initLightbox = async () => {
      const module = await import("photoswipe/lightbox")
      const PhotoSwipeLightbox = module.default

      lightbox = new PhotoSwipeLightbox({
        gallery: "#menu-gallery",
        children: "a",
        pswpModule: () => import("photoswipe"),
      })

      lightbox.init()
    }

    initLightbox()

    return () => {
      if (lightbox) {
        lightbox.destroy()
        lightbox = null
      }
    }
  }, [activeTab, searchQuery])

  return (
    <div className="min-h-screen bg-[#f4efe6]">

      {/* Sección principal */}
      <div className="bg-[#2b1408] text-white px-4 sm:px-10 py-4 text-lg font-medium">
        <div className="w-11/12 mx-auto flex items-center gap-6 sm:gap-10">
          <button
            onClick={() => {
              setSection("comida")
              setActiveTab(buildTabs("comida")[0])
              setSearchQuery("")
            }}
            className={`pb-2 border-b-2 transition cursor-pointer shrink-0 ${section === "comida"
                ? "border-yellow-500 text-yellow-400"
                : "border-transparent text-gray-300"
              }`}
          >
            <Salad className="w-5 h-5 mr-2 inline" /> Comida
          </button>

          <button
            onClick={() => {
              setSection("bebidas")
              setActiveTab(buildTabs("bebidas")[0])
              setSearchQuery("")
            }}
            className={`pb-2 border-b-2 transition cursor-pointer shrink-0 ${section === "bebidas"
                ? "border-yellow-500 text-yellow-400"
                : "border-transparent text-gray-300"
              }`}
          >
            <GlassWater className="w-5 h-5 mr-2 inline" /> Bebidas
          </button>

          {/* Buscador */}
          <div className="ml-auto flex items-center">
            <div className="relative flex items-center">
              <Search className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar..."
                className="pl-9 pr-8 py-1.5 text-sm rounded-full bg-white/10 border border-white/20 
                  text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 
                  focus:border-yellow-500/50 transition w-32 sm:w-40 md:w-56"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 text-gray-400 hover:text-white transition"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Categorías — ocultas durante búsqueda */}
      {!isSearching && (
        <div className="bg-[#ede5d8] px-4 sm:px-10 py-6 border-b">
          <div className="w-11/12 mx-auto flex gap-6 sm:gap-8 overflow-auto overflow-y-hidden scrollbar-hide">
            {tabs.map((tab) => {
              const isActive =
                activeTab.label === tab.label && activeTab.parentName === tab.parentName
              const isSub = !!tab.subName
              return (
                <button
                  key={`${tab.parentName}-${tab.label}`}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 whitespace-nowrap transition relative text-sm sm:text-base ${isSub ? "pl-3 border-l-2 border-gray-300" : ""
                    } ${isActive ? "text-red-600" : "text-gray-600 hover:text-black"}`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-600 rounded-full" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Contenido */}
      <div className="w-11/12 mx-auto px-2 sm:px-5 md:px-10 py-8">

        {isSearching ? (
          /* ── Vista de búsqueda ── */
          <>
            <div className="mb-8 flex flex-wrap items-center gap-2 sm:gap-3">
              <h2 className="text-xl sm:text-2xl font-serif font-semibold text-black">
                Resultados para&nbsp;
                <span className="text-red-600">&ldquo;{searchQuery}&rdquo;</span>
              </h2>
              <span className="text-sm text-gray-500">
                ({searchResults.length} {searchResults.length === 1 ? "resultado" : "resultados"})
              </span>
            </div>

            {searchResults.length > 0 ? (
              <div id="menu-gallery" className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
                {searchResults.map(({ product, categoryLabel }, index) => (
                  <div key={`${product.name}-${index}`} className="flex flex-col">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2 px-1">
                      {categoryLabel}
                    </span>
                    <ProductCard item={product} index={index} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <Search className="w-12 h-12 mb-4 opacity-30" />
                <p className="text-lg">No se encontraron productos.</p>
                <p className="text-sm mt-1">Intenta con otro término.</p>
              </div>
            )}
          </>
        ) : (
          /* ── Vista normal por categorías ── */
          <>
            <h2 className="text-2xl sm:text-3xl font-serif mb-8 transition-all duration-300 text-black font-semibold">
              {activeTab.label}
            </h2>

            <div id="menu-gallery">
              {blocks.map((block, blockIndex) => (
                <div key={blockIndex} className="mb-12">
                  {block.title && (
                    <h3 className="text-xl font-semibold text-gray-700 mb-6 pb-2 border-b border-gray-300">
                      {block.title}
                    </h3>
                  )}
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
                    {block.products.length > 0 ? (
                      block.products.map((item, index) => (
                        <ProductCard key={item.name} item={item} index={index} />
                      ))
                    ) : (
                      <p className="text-gray-500">No hay productos en esta categoría.</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}