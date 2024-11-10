import ShowTecnologiaLogo from "@/assets/images/companies/show-tecnologia-logo.jpeg";
import MitteTecnologiaLogo from "@/assets/images/companies/mitte-tecnologia-logo.jpeg";
import { ExperienceArticle, ExperienceArticleProps } from "./ExperienceArticle";
import { CircleDotIcon } from "lucide-react";

export function ExperiencesSection() {
    const articlesProps: ExperienceArticleProps[] = [
        {
            logo: ShowTecnologiaLogo,
            position: "Analista de Software | Pleno",
            company: "Show Tecnologia",
            location: "Garanhuns, PE, Brazil (Híbrido)",
            startDate: "Out 2022",
            endDate: "Presente",
            url: "https://showtecnologia.com/",
        },
        {
            logo: MitteTecnologiaLogo,
            position: "Desenvolvedor de Software | Júnior",
            company: "Mitte Tecnologia",
            location: "Osasco, SP, Brazil (Remoto)",
            startDate: "Jan 2022",
            endDate: "Set 2022",
            url: "https://www.mittetecnologia.com.br/",
        },
        {
            logo: MitteTecnologiaLogo,
            position: "Desenvolvedor de Software | Estagiário",
            company: "Mitte Tecnologia",
            location: "Osasco, SP, Brazil (Remoto)",
            startDate: "Out 2020",
            endDate: "Jan 2022",
            url: "https://www.mittetecnologia.com.br/",
        },
    ];

    return (
        <section className="flex flex-col gap-4 flex-1">
            <h1 className="flex items-center text-2xl text-zinc-800 font-bold mt-2 mb-4">
                <CircleDotIcon className="w-6 h-6 inline-block relative left-[-1.78rem] bg-white rounded-full" />
                Experiência
            </h1>
            <ul className="flex flex-col gap-4">
                {articlesProps.map((articleProps, index) => (
                    <li key={index}>
                        <ExperienceArticle {...articleProps} />
                    </li>
                ))}
            </ul>
        </section>
    );
}