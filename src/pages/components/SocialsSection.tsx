import LinkedinIcon from '../../assets/images/socials/linkedin-icon.svg';
import GithubIcon from '../../assets/images/socials/github-icon.svg';
import InstagramIcon from '../../assets/images/socials/instagram-icon.svg';
import TwitterIcon from '../../assets/images/socials/twitter-icon.svg';
import { SocialArticle, SocialArticleProps } from "./SocialArticle";

type AdaptedSocialArticleProps = Pick<SocialArticleProps, 'title' | 'description'> & {
    iconPath: string
    url: string
};

export function SocialsSection() {
    const socialsArticlesProps: AdaptedSocialArticleProps[] = [
        {
            title: "LinkedIn",
            description: "Caio Rocha",
            url: "https://www.linkedin.com/in/caiogmrocha/",
            iconPath: LinkedinIcon,
        },
        {
            title: "Github",
            description: "caiogmrocha",
            url: "https://github.com/caiogmrocha/",
            iconPath: GithubIcon,
        },
        {
            title: "Instagram",
            description: "@caio.guir",
            url: "https://www.instagram.com/caio.guir/",
            iconPath: InstagramIcon,
        },
        {
            title: "Twitter",
            description: "@CaioGuir",
            url: "https://x.com/CaioGuir",
            iconPath: TwitterIcon,
        },
    ];

    return (
        <section className="flex flex-col gap-5">
            {socialsArticlesProps.map((socialArticleProps) => (
                <SocialArticle
                    key={socialArticleProps.title}
                    icon={<img src={socialArticleProps.iconPath} alt="Linkedin" className="h-[48px] w-[48px]" />}
                    title={socialArticleProps.title}
                    description={
                        <a href={socialArticleProps.url} target="_blank" rel="noreferrer" className="hover:underline">
                            {socialArticleProps.description}
                        </a>
                    }
                />
            ))}
        </section>
    );
}