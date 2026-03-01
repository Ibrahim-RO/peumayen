"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
// import { User } from "@/src/schemas/auth"
import { useMutation } from "@tanstack/react-query"
// import { loginService } from "@/src/services/auth"
import { useRouter } from "next/navigation"
import ErrorMessage from "../ui/ErrorMessage"
import { toast } from "react-toastify"

export default function Login() {
    const router = useRouter()

    const initialValues = {
        username: "",
        password: ""
    }

    const pending = false
    const [show, setShow] = useState("password")
    const handleShowPassword = () => setShow(show === "password" ? "text" : "password")

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

    const { mutate } = useMutation({
        // mutationFn: loginService,
        // onError: (error) => {
        //     toast.error(error.message)
        // },
        // onSuccess: (data) => {
        //     router.push("/admin/lotes-vid")
        // }
    })

    const handleForm = (formData: any) => {
        mutate(formData)
    }

    return (
        <form
            onSubmit={handleSubmit(handleForm)}
            className="space-y-5"
        >
            <div>
                <label className="block mb-1 text-sm font-semibold">Usuario</label>
                <input
                    type="text"
                    className={`w-full px-3 py-2 border border-gray-300 outline-0 rounded ${errors.username ? "border-red-500" : ""}`}
                    {...register('username', {
                        required: "Usuario obligatorio"
                    })}
                />
                {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            </div>

            <div>
                <label className="block mb-1 text-sm font-semibold">Contraseña</label>
                <div className="space-y-4">
                    <div>
                        <input
                            type={show}
                            className={`w-full px-3 py-2 border border-gray-300 outline-0 rounded ${errors.password ? "border-red-500" : ""}`}
                            {...register('password', {
                                required: "Contraseña obligatoria"
                            })}
                        />
                        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                    </div>
                    <div className="">
                        <label className="inline-flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="size-4 checked:accent-yellow-950"
                                onChange={handleShowPassword}
                            />
                            <span className="text-sm">Mostrar contraseña</span>
                        </label>
                    </div>
                </div>
            </div>

            <button
                disabled={pending}
                className={`w-full bg-yellow-900 hover:bg-yellow-950 transition-colors duration-300 text-white py-2 rounded flex justify-center items-center gap-2 cursor-pointer ${pending ? "opacity-70 cursor-not-allowed" : ""}`}
            >
                {pending && (
                    <span className="animate-spin size-5 border-2 border-white border-t-transparent rounded-full"></span>
                )}
                {pending ? "Entrando..." : "Entrar"}
            </button>

        </form>
    )
}
