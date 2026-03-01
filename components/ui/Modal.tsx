"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
    title: string
    description: string
    buttonText: string
}

export default function Modal({ children, buttonText, title, description }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-yellow-950 text-white hover:bg-yellow-900 hover:text-white cursor-pointer transition-colors duration-300">{buttonText}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold uppercase">{title}</DialogTitle>
                    <hr className="border-2 border-yellow-950" />
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}
