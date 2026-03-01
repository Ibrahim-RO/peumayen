import Login from "@/components/auth/Login";


export default function Home() {
    return (
        <section
            className="h-screen bg-cover bg-center relative flex items-center justify-center p-10 text-neutral-900"
            style={{
                backgroundImage: 'url("/5.jpg")'
            }}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 bg-white/95 flex w-225 md:h-125 rounded-3xl overflow-hidden shadow-2xl">
                <div className="hidden lg:flex justify-center items-center bg-yellow-950 w-1/2 h-full p-10">
                    <img
                        src="/logo.png"
                        alt="Edificios"
                        className="w-4/5 h-auto mx-auto object-cover"
                    />
                </div>

                <div className="w-full lg:w-1/2 px-6 py-8 md:p-10 flex flex-col justify-center space-y-6">
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold text-gray-900 text-center lg:text-left uppercase">Restaurante Peumayén</h1>
                        <h2 className="text-base md:text-xl mt-1 text-center lg:text-left">Bienvenido a tu portal</h2>
                    </div>

                    <Login />
                </div>
            </div>
        </section>
    );
}
