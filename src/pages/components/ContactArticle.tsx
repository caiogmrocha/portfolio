export type ContactArticleProps = React.HTMLAttributes<HTMLElement> & {
    icon: React.ReactNode;
    title: string;
    description: string | React.ReactNode;
};

export function ContactArticle({ icon, title, description, ...props }: ContactArticleProps) {
    return (
        <article {...props} className="flex gap-4">
            <span className="flex justify-center items-center p-3 rounded-full bg-zinc-300 text-zinc-500 aspect-square">
                {icon}
            </span>
            <p className="flex flex-col">
                <span className="text-sm text-zinc-500 font-normal">
                    {title}
                </span>
                <strong className="text-md text-zinc-700 font-semibold">
                    {description}
                </strong>
            </p>
        </article>
    );
}