interface HeaderProps {
  idioma: 'pt' | 'en';
}

export default function Educacao({idioma}: HeaderProps) {
    return (
        <section id="educacao" className="py-20 bg-slate-800/20">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 flex items-center gap-4">
                    {idioma === 'pt' ? 'Educação' : 'Education'}
                    <div className="h-px bg-slate-700 flex-1 ml-4"></div>
                </h2>

                <div className="relative border-l border-slate-700 ml-4 md:ml-8 pl-8 pb-10">
                    <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-100">{idioma === 'pt' ? 'Licenciatura em Engenharia Informática' : 'Bachelor’s Degree in Computer Engineering'}</h3>
                            <p className="text-lg text-emerald-400 font-medium">{idioma === 'pt' ? 'Universidade Lusófona - Centro Universitário do Porto' : 'Lusófona University – Porto University Centre'}</p>
                        </div>
                        <div className="text-slate-400 font-mono bg-slate-800 px-3 py-1 rounded-md border border-slate-700 self-start">
                            09/2021-04/2024
                        </div>
                    </div>

                    <div className="text-slate-400 text-lg leading-relaxed max-w-4xl space-y-4">
                        <p>
                            {idioma === 'pt' 
                            ? 'Durante os três anos de licenciatura, adquiri uma base sólida em fundamentos de computação, algoritmos e estruturas de dados. O curso teve uma forte vertente prática, permitindo-me desenvolver projetos em diversas linguagens e tecnologias.' 
                            : 'During my three-year undergraduate degree, I acquired a solid grounding in the fundamentals of computing, algorithms and data structures. The course had a strong practical focus, enabling me to develop projects using a variety of programming languages and technologies.'
                            }
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-300 mt-4">
                            <li className="flex items-center gap-2">
                                <span className="text-emerald-500">▹</span> {idioma === 'pt' ? 'Engenharia de Software & Padrões de Desenho' : 'Software Engineering & Design Patterns'}
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-emerald-500">▹</span> {idioma === 'pt' ? 'Bases de Dados Relacionais (SQL)' : 'Relational Databases (SQL)'}
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-emerald-500">▹</span> {idioma === 'pt' ? 'Desenvolvimento Web & Mobile' : 'Web & Mobile Development'}
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-emerald-500">▹</span> {idioma ===  'pt' ? 'Redes e Sistemas Operativos' : 'Networks and Operating Systems'}
                            </li>
                        </ul>
                        <p className="pt-4 italic text-sm border-t border-slate-800">
                            {idioma === 'pt' ? 'Concluído com o Grau Académico de Licenciado (Nível 6 do Quadro Europeu de Qualificações).' : 'Completed with a Bachelor’s degree (Level 6 of the European Qualifications Framework).'}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}