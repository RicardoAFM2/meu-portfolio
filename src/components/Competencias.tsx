interface HeaderProps {
  idioma: 'pt' | 'en';
}


export default function Competencias({idioma}: HeaderProps) {
    const skills = [
        { categoria: "Frontend", tecnologias: ["React", "TypeScript", "Tailwind CSS", "JavaScript"] },
        { categoria: "Backend", tecnologias: ["Java", "Python", "Spring Boot", "Kotlin", "PostgreSQL", "SQLite"] },
        { categoria: idioma === 'pt' ? 'Ferramentas & DevOps' : 'Tools & DevOps', tecnologias: ["Docker", "Git", "MinIO", "JWT/OAuth2"]},
    ];

    return (
        <section id="competencias" className="py-20 bg-slate-900">

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 flex items-center gap-4">
                    {idioma === 'pt' ? 'Competências' : 'Skills'}
                    <div className="h-px bg-slate-700 flex-1 ml-4"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((grupo, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                                {grupo.categoria}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {grupo.tecnologias.map((tech, i) => (
                                    <span key={i} className="px-4 py-2 bg-slate-900 text-slate-300 rounded-lg border border-slate-700 text-sm font-medium hover:text-emerald-400 hover:border-emerald-400 transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex items-center gap-6">
                    <div className="bg-emerald-500/20 p-3 rounded-full text-emerald-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-slate-100 font-semibold">{idioma === 'pt' ? 'Envolvimento na Comunidade' : 'Community involvement'}</h4>
                        <p className="text-slate-400 text-sm">{idioma === 'pt' ? 'Voluntário na conferência ' : 'Conference volunteer '}<span className="text-emerald-400">NDC Porto 2023</span>{idioma === 'pt' ? ', acompanhando as últimas tendências de software.' : ', keeping up with the latest software trends.'}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}