import LinkedinIcon from '../../assets/images/linkedin-icon.svg';
import GithubIcon from '../../assets/images/github-icon.svg';
import InstagramIcon from '../../assets/images/instagram-icon.svg';
import TwitterIcon from '../../assets/images/twitter-icon.svg';
import { SocialArticle } from "./SocialArticle";


export function SocialsSection() {
    const sectionsData = [
        {
            title: "LinkedIn",
            description: "Caio Rocha",
            url: "https://www.linkedin.com/in/caiogmrocha/",
            icon: LinkedinIcon,
        },
        {
            title: "Github",
            description: "caio.gm.rocha",
            url: "https://github.com/caiogmrocha/",
            icon: GithubIcon,
        },
        {
            title: "Instagram",
            description: "@caio.guir",
            url: "https://www.instagram.com/caio.guir/",
            icon: InstagramIcon,
        },
        {
            title: "Twitter",
            description: "@CaioGuir",
            url: "https://x.com/CaioGuir",
            icon: TwitterIcon,
        },
    ]

    return (
        <section className="flex flex-col gap-5">
            {sectionsData.map((section) => (
                <SocialArticle
                    key={section.title}
                    icon={<img src={section.icon} alt="Linkedin" className="h-[48px] w-[48px]" />}
                    title={section.title}
                    description={
                        <a href={section.url} target="_blank" rel="noreferrer" className="hover:underline">
                            {section.description}
                        </a>
                    }
                />
            ))}
        </section>
    );
}