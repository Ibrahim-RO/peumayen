import { z } from "zod"

export interface FAQItem {
    question: string;
    answer: string;
}

const productSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number()
})

const subcategorySchema = z.object({
    name: z.string(),
    products: z.array(productSchema)
})

const categorySchema = z.object({
    name: z.string(),
    products: z.array(productSchema),
    subcategory: z.array(subcategorySchema).optional()
})

const menuSectionSchema  = z.object({
    name: z.string(),
    icon: z.string(),
    category: z.array(categorySchema)
})

const menuSchema = z.object({
    comida: menuSectionSchema,
    bebidas: menuSectionSchema
})

export type Menu = z.infer<typeof menuSchema>
