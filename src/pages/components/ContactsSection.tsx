import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { ContactArticle, ContactArticleProps } from "./ContactArticle";

export function ContactsSection() {
    const email = "caioguilherme739@gmail.com";
    const phone = "+55 87 98144-3773";

    const contactsArticlesProps: ContactArticleProps[] = [
        {
            title: "E-mail",
            description: (
                <a href={`mailto:${email}`} className="hover:underline">
                    {email}
                </a>
            ),
            icon: <MailIcon />,
        },
        {
            title: "Celular",
            description: (
                <a href={`tel:${phone}`} className="hover:underline">
                    {phone}
                </a>
            ),
            icon: <PhoneIcon />,
        },
        {
            title: "Endereço",
            description: (
                <address className="not-italic">
                    <a href="https://www.google.com/maps/place/Garanhuns,+PE" target="_blank" rel="noreferrer" className="hover:underline">
                        Garanhuns, Pernambuco, Brazil
                    </a>
                </address>
            ),
            icon: <MapPinIcon />,
        },
    ]

    return (
        <section className="flex flex-col gap-5">
            {contactsArticlesProps.map((contactArticleProps) => (
                <ContactArticle key={contactArticleProps.title} {...contactArticleProps} />
            ))}
        </section>
    );
}