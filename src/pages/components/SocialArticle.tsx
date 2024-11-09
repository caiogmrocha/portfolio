export type SocialArticleProps = React.HTMLAttributes<HTMLElement> & {
    icon: string | React.ReactNode;
    title: string;
    description: string | React.ReactNode;
};

export function SocialArticle({ icon, title, description, ...props }: SocialArticleProps) {
    return (
        <article {...props} className="flex gap-4">
            <span className="flex justify-center items-center rounded-full aspect-square">
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