interface HeaderProps {
  idioma: 'pt' | 'en';
}

export default function Projetos({idioma}: HeaderProps)  {
    const meusProjetos = [
        {
            titulo: "Sabora",
            descricao: "Aplicação Full-Stack para organização e descoberta de receitas culinárias. Foco total na experiência mobile e partilha social.",
            descricao_en: "A full-stack application for organising and discovering recipes. A strong focus on the mobile experience and social sharing.",
            tech: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker", "Git"],
            link: "https://github.com/RicardoAFM2/explorador-de-receitas",
            imagem: "/Sabora.png"
        },
        {
            titulo: "HiddenCity",
            descricao: "Aplicação móvel nativa para exploração de locais de interesse. Projeto final de licenciatura focado em geolocalização.",
            descricao_en: "Native mobile app for exploring places of interest. Final-year undergraduate project focusing on geolocation.",
            tech: ["Kotlin", "SQLite", "Google Maps API", "Git"],
            link: "https://github.com/RicardoAFM2/HiddenCity",
            imagem: "/HiddenCity.jpg"
        }
        
    ];
    return (
        <section id="projetos" className="py-20 bg-slate-800/20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 flex items-center gap-4">
                    {idioma === 'pt' ? 'Projetos em Destaque' : 'Featured Projects'}
                    <div className="h-px bg-slate-700 flex-1 ml-4"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {meusProjetos.map((proj, index) => (
                        <div key={index} className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all group">

                            <div className="h-48 overflow-hidden bg-slate-700">
                                <img
                                    src={proj.imagem}
                                    alt={proj.titulo}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                ></img>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-100 mb-3">{proj.titulo}</h3>
                                <p className="text-slate-400 mb-6 line-clamp-3">{idioma === 'pt' ? proj.descricao : proj.descricao_en}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {proj.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/20">{t}</span>
                                    ))}
                                </div>

                                <a
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-slate-100 hover:text-emerald-400 font-medium transition-colors"
                                >
                                    {idioma == 'pt' ? "Ver Código no GitHub" : "View code on GitHub"}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}