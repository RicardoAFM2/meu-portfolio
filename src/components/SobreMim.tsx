interface HeaderProps {
  idioma: 'pt' | 'en';
}

export default function SobreMim({idioma}: HeaderProps) {
    return (
        <section id="sobre" className="py-20">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="ext-3xl md:text-4xl font-bold text-slate-100 mb-12 flex items-center gap-4">
                    {idioma === 'pt' ? 'Sobre Mim' : 'About Me'}
                    <div className="h-px bg-slate-700 flex-1 ml-4"></div>
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-12">

                    <div className="md:w-1/3">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <img 
                                src="/foto_perfil.jpeg"
                                alt="Ricardo Martins"
                                className="relative rounded-2xl border border-slate-700 w-full object-cover shadow-2xl"
                            />
                        </div>
                    </div>

                    <div className="flex-1">
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            {idioma === 'pt' 
                            ?   `Licenciado em Engenharia Informática, com sólidos conhecimentos em desenvolvimento de software e bases de dados.
                                Através de projetos académicos e pessoais, ganhei experiência prática na construção de aplicações do zero, 
                                resolução de problemas e arquitetura de sistemas. Sou proativo e tenho uma forte capacidade de aprendizagem.`
                                
                            : `I hold a degree in Computer Engineering and have a solid understanding of software development and databases.
                                Through academic and personal projects, I have gained practical experience in building applications from scratch, 
                                troubleshooting and systems architecture. I am proactive and a quick learner.`
                            }
                             

                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            <div className="flex flex-col">
                                <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">{idioma === 'pt' ? 'Data de Nascimento' : 'Date of Birth'}</span>
                                <span className="text-slate-100 text-lg">{idioma === 'pt' ? '29 de agosto de 2002' : '29 August 2002'}</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">{idioma === 'pt' ? 'Localização' : 'Location'}</span>
                                <span className="text-slate-100 text-lg">{idioma === 'pt' ? 'Porto, Portugal' : 'Porto, Portugal'}</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">{idioma === 'pt' ? 'Grau Académico' : 'Academic Qualification'}</span>
                                <span className="text-slate-100 text-lg">{idioma === 'pt' ? 'Licenciado (Nível 6 EQF)' : 'Bachelor’s degree (EQF Level 6)'}</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">{idioma === 'pt' ? 'Curso' : 'Course'}</span>
                                <span className="text-slate-100 text-lg">{idioma === 'pt' ? 'Engenharia Informática' : 'Computer Engineering'}</span>
                            </div>

                        </div>

                        <div className="mt-8 p-4 bg-slate-800/50 border-l-4 border-emerald-500 rounded-r-lg">
                            <p className="text-slate-300 italic">
                                {idioma === 'pt' ? 'Formado pela' : 'A graduate of'}<span className="text-white font-semibold">{idioma === 'pt' ? 'Universidade Lusófona' : 'Lusófona University'}</span> {idioma === 'pt' ? '(Centro Universitário do Porto).' : '(Porto University Centre).'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}