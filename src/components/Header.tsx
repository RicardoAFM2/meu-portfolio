interface HeaderProps {
  idioma: 'pt' | 'en';
  setIdioma: (lang: 'pt' | 'en') => void;
}

export default function Header({idioma, setIdioma}: HeaderProps) {

    const toggleIdioma = () => {
        setIdioma(idioma === "pt" ? "en" : "pt");
    };

    return (

        <header className='w-full bg-slate-900/80 backdrop-blur-md fixed top-0 z-50 border-b border-slate-800'>
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <div>
                    <a href="#" className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                        Ricardo<span className="text-slate-100">Martins</span>
                    </a>
                </div>

                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
                        <a href="#sobre" className="hover:text-emerald-400 transition-colors">{idioma === 'pt' ? 'Sobre Mim' : 'About Me'}</a>
                        <a href="#projetos" className="hover:text-emerald-400 transition-colors">{idioma === 'pt' ? 'Projetos' : 'Projects'}</a>
                        <a href="#competencias" className="hover:text-emerald-400 transition-colors">{idioma === 'pt' ? 'Competências' : 'Skills'}</a>
                        <a href="#educacao" className="hover:text-emerald-400 transition-colors">{idioma === 'pt' ? 'Educação' : 'Education'}</a>
                        <a href="#contaco" className="hover:text-emerald-400 transition-colors">{idioma === 'pt' ? 'Contactos' : 'Contacts'}</a>
                    </nav>

                    <button
                        onClick={toggleIdioma}
                        className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-colors font-semibold flex items-center gap-2"
                    >
                        {idioma === 'pt' ? '🇬🇧 EN' : '🇵🇹 PT'}
                    </button>

                    <a
                        href={idioma === 'pt' ? '"/Ricardo_Martins_cv.pdf"' : '/Ricardo_Martins_cv_en.pdf'}
                        download
                        className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-lg transition-colors flex items-center gap-2"
                    >
                        <span>{idioma === 'pt' ? 'Descarrgar CV' : 'Download CV'}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}