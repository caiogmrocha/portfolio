import LinkedinIcon from '../../assets/images/linkedin-icon.svg';
import GithubIcon from '../../assets/images/github-icon.svg';
import InstagramIcon from '../../assets/images/instagram-icon.svg';
import TwitterIcon from '../../assets/images/twitter-icon.svg';
import { SocialArticle } from "./SocialArticle";


export function SocialsSection() {
    const instagramUrl = "https://www.instagram.com/caio.guir/";
    const twitterUrl = "https://x.com/CaioGuir";
    const linkedinUrl = "https://www.linkedin.com/in/caiogmrocha/";
    const githubUrl = "https://github.com/caiogmrocha/";

    return (
        <section className="flex flex-col gap-5">
            <SocialArticle
                icon={<img src={LinkedinIcon} alt="Linkedin" className="h-[48px] w-[48px]" />}
                title="LinkedIn"
                description={
                    <a href={linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline">
                        Caio Rocha
                    </a>
                }
            />
            <SocialArticle
                icon={<img src={GithubIcon} alt="Github" className="h-[48px] w-[48px]" />}
                title="Github"
                description={
                    <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:underline">
                        caiogmrocha
                    </a>
                }
            />
            <SocialArticle
                icon={<img src={InstagramIcon} alt="Instagram" className="h-[48px] w-[48px]" />}
                title="Instagram"
                description={
                    <a href={instagramUrl} target="_blank" rel="noreferrer" className="hover:underline">
                        @caio.guir
                    </a>
                }
            />
            <SocialArticle
                icon={<img src={TwitterIcon} alt="Twitter" className="h-[48px] w-[48px]" />}
                title="Twitter"
                description={
                    <a href={twitterUrl} target="_blank" rel="noreferrer" className="hover:underline">
                        @CaioGuir
                    </a>
                }
            />
        </section>
    );
}