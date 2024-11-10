import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CircleDotIcon } from "lucide-react";

export function HardSkillsSection() {
    const hardSkillsUrls = [
        {
            name: "Node.js",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "JavaScript",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/javascript/javascript-original.svg",
        },
        {
            name: "TypeScript",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/typescript/typescript-original.svg",
        },
        {
            name: "Nest.js",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/nestjs/nestjs-original.svg",
        },
        {
            name: "Express.js",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/express/express-original.svg",
        },
        {
            name: "Fastify",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/fastify/fastify-original.svg",
        },
        {
            name: "Prisma",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/prisma/prisma-original.svg",
        },
        {
            name: "Knex.js",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/knexjs/knexjs-original.svg",
        },
        {
            name: "Puppeteer",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/puppeteer/puppeteer-original.svg",
        },
        {
            name: "jQuery",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/jquery/jquery-original.svg",
        },
        {
            name: "Vite",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/vite/vite-original.svg",
        },
        {
            name: "React.js",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/react/react-original.svg",
        },
        {
            name: "Vue.js",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/vuejs/vuejs-original.svg",
        },
        {
            name: "TailwindCSS",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
            name: "Vitest",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/vitest/vitest-original.svg",
        },
        {
            name: "Jest",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/jest/jest-plain.svg",
        },
        {
            name: "Cypress",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/cypressio/cypressio-original.svg",
        },
        {
            name: "PHP",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/php/php-original.svg",
        },
        {
            name: "Laravel",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/laravel/laravel-original.svg",
        },
        {
            name: "CodeIgniter",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/codeigniter/codeigniter-plain.svg",
        },
        {
            name: "Go",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/go/go-original-wordmark.svg",
        },
        {
            name: "MySQL",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/mysql/mysql-original.svg",
        },
        {
            name: "PostgreSQL",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/postgresql/postgresql-original.svg",
        },
        {
            name: "SQLite",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/sqlite/sqlite-original.svg",
        },
        {
            name: "MongoDB",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/mongodb/mongodb-original.svg",
        },
        {
            name: "Redis",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/redis/redis-original.svg",
        },
        {
            name: "DynamoDB",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/dynamodb/dynamodb-original.svg",
        },
        {
            name: "Swagger",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/swagger/swagger-original.svg",
        },
        {
            name: "Docker",
            url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/docker/docker-plain.svg",
        },
        // {
        //     name: "Github",
        //     url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/github/github-original.svg",
        // },
        // {
        //     name: "Bitbucket",
        //     url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/bitbucket/bitbucket-original.svg",
        // },
        // {
        //     name: "Jira",
        //     url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/jira/jira-original.svg",
        // },
        // {
        //     name: "Confluence",
        //     url: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/confluence/confluence-original.svg",
        // }
    ];

    return (
        <section className="flex flex-col gap-4 flex-1">
            <h1 className="flex items-center text-2xl text-zinc-800 font-bold mt-2 mb-4">
                <CircleDotIcon className="w-6 h-6 inline-block relative left-[-1.78rem] bg-white rounded-full" />
                Hard Skills
            </h1>

            <ul className="flex flex-wrap gap-2">
                {hardSkillsUrls.map((skill, index) => (
                    <li key={index} className="flex flex-1">
                        <Card className="p-2 aspect-square flex-1 h-28">
                            <CardContent className="flex flex-col items-center justify-center gap-2 p-4">
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