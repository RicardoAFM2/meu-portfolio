interface HeaderProps {
  idioma: 'pt' | 'en';
}


export default function Hero({idioma}: HeaderProps) {
    return (
        <section id="#" className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-10 md:py-20 text-center relative">

            <div className="w-48 h-48 md:w-56 md:h-56 relative mb-8 group mt-10">
                <div className="absolute inset-0 border-4 border-emerald-500 rounded-full translate-x-3 translate-y-3 -z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
                <img
                    src="/foto_perfil.jpeg"
                    alt="Ricardo Martins"
                    className="w-full h-full object-cover scale-125 object-top border-4 border-slate-900 rounded-full"
                ></img>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
                Ricardo Martins
            </h1>

            <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
                <span className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-widest">
                    {idioma === 'pt' ? 'Ver Projetos' : 'View Projects'}
                </span>
                <a href="#projetos" className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>
        </section>
    )
}