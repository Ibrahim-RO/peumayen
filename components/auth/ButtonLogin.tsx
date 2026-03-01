import { useFormStatus } from 'react-dom'

export default function ButtonLogin() {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className={`w-full bg-yellow-900 hover:bg-yellow-950 transition-colors duration-300 text-white py-2 rounded flex justify-center items-center gap-2 cursor-pointer ${pending ? "opacity-70 cursor-not-allowed" : ""}`}
        >
            {pending && (
                <span className="animate-spin size-5 border-2 border-white border-t-transparent rounded-full"></span>
            )}
            {pending ? "Entrando..." : "Entrar"}
        </button>
    )
}
