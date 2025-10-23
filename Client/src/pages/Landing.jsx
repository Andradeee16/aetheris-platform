export default function Landing() {
  return (
    <>
    <section className="bg-[--color-background] w-full">
        <div className="grid grid-cols-2 items-center gap-6 py-5 md:py-0">
            
            <header className="space-y-4 text-left">
            <h1 className="font-display leading-tight text-[clamp(1.5rem,10vw,5rem)] allign-left">
                <b>Rutas de Aprendizaje TECH</b>
            </h1>

            <p className="text-[--color-text]/80 font-sans text-[clamp(1rem,1vw,2rem)] md:text-2xl sm:text-2xl">
                Aprende, crece, transforma
            </p>

            <div className="flex gap-3 pt-2 items-left">
                <a href="/auth/register"
                className="inline-flex items-center justify-center
                rounded-xl bg-white shadow hover:shadow-md
                w-full sm:w-auto
                font-sans
                whitespace-nowrap
                px-[clamp(1rem,3vw,1.6rem)]
                py-[clamp(0.6rem,2.2vw,0.9rem)]
                text-[clamp(1rem,2.8vw,1.125rem)]
                font-medium
                min-h-[44px]
                transition-all">
                Regístrate
                </a>

            <a href="/auth/login"
                className="inline-flex items-center justify-center
                rounded-xl bg-white shadow hover:shadow-md
                w-full sm:w-auto
                font-sans
                whitespace-nowrap
                px-[clamp(1rem,3vw,1.6rem)]
                py-[clamp(0.6rem,2.2vw,0.9rem)]
                text-[clamp(1rem,2.8vw,1.125rem)]
                font-medium
                min-h-[44px]
                transition-all">
                Inicia Sesión
                </a>
            </div>
            </header>

            <figure className="overflow-hidden md:max-w-[clamp(10px,28vw,3000px)] shadow justify-self-end self-start">
            <img
                src="/src/assets/imgs/Chicas1.png"
                alt="Grupo de estudiantes aprendiendo con un portátil"
                className="object-cover"
            />
            </figure>

        </div>
        </section>
        <section
            className="
                bg-white
                relative left-1/2 right-1/2 -mx-[50vw] w-screen
            "
            >
            <div className="grid grid-cols-2 md:grid-cols-2 items-center gap-6 mx-auto max-w-[clamp(320px,92vw,1120px)] px-4 py-12">
                
                <figure className="overflow-hidden md:max-w-[clamp(10px,28vw,3000px)] md:max-w-[clamp(5px,50vw,10000px)] shadow justify-self-center ">
                <img
                    src="/src/assets/imgs/Ascencion.png"
                    alt="Ilustración de una persona ascendiendo por una escalera hacia el éxito"
                    className="object-cover"
                />
                </figure>

                <header className="space-y-4 text-right md:text-right">
                <h1 className="font-display leading-tight text-[clamp(1rem,7vw,5rem)] allign-right">
                    🚨Spoiler alert: no lo escogimos al azar
                </h1>

                <p className="text-[--color-text]font-sans/80 text-[clamp(1rem,1vw,2rem)] md:text-2xl sm:text-2xl">
                    El nombre <b>Aetheris</b> nace de la idea del éter: aquello invisible que conecta todo, 
                    que sostiene la luz y la energía en movimiento. Esa misma esencia inspira lo que hacemos: 
                    conectar datos, inteligencia y seguridad de forma fluida, confiable y futurista.
                </p>
                </header>
            </div>
        </section>
    </>
  );
}
