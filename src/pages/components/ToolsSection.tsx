import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CircleDotIcon } from "lucide-react";

export function ToolsSection() {
    const toolsUrls = [
        {
            name: "Git",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/git/git-original.svg",
        },
        {
            name: "GitHub",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/github/github-original.svg",
        },
        {
            name: "BitBucket",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/bitbucket/bitbucket-original.svg",
        },
        {
            name: "Jira",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/jira/jira-original.svg",
        },
        {
            name: "Confluence",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/confluence/confluence-original.svg",
        },
        {
            name: "Docker",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/docker/docker-original.svg",
        },
        {
            name: "VSCode",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/vscode/vscode-original.svg",
        },
        {
            name: "Postman",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/postman/postman-original.svg",
        },
        {
            name: "Insomnia",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/insomnia/insomnia-original.svg",
        },
        {
            name: "Linux",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/linux/linux-original.svg",
        },
        {
            name: "AWS",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        }
    ];

    return (
        <section className="flex flex-col gap-4 flex-1">
            <h1 className="flex items-center text-2xl text-zinc-800 font-bold mt-2 mb-4">
                <CircleDotIcon className="w-6 h-6 inline-block relative left-[-1.78rem] bg-white rounded-full" />
                Tools
            </h1>

            <ul className="flex flex-wrap gap-2">
                {toolsUrls.map((skill, index) => (
                    <li key={index} className="flex flex-1">
                        <Card className="p-2 aspect-square flex-1 h-28">
                            <CardContent className="flex flex-col items-center justify-center gap-2 p-4 text-center">
                                <img src={skill.url} alt={skill.name} className="w-12 h-12" />
                                <CardTitle>{skill.name}</CardTitle>
                            </CardContent>
                        </Card>
                    </li>
                ))}
            </ul>
        </section>
    );
}