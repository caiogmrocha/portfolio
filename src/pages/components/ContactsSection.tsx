import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { ContactArticle } from "./ContactArticle";

export function ContactsSection() {
    const email = "caioguilherme739@gmail.com";
    const phone = "+55 87 98144-3773";

    return (
        <section className="flex flex-col gap-5">
            <ContactArticle
                icon={<MailIcon className="h-5" />}
                title="E-mail"
                description={
                    <a href={`mailto:${email}`} className="hover:underline">
                        {email}
                    </a>
                }
            />
            <ContactArticle
                icon={<PhoneIcon className="h-5" />}
                title="Phone"
                description={
                    <a href={`tel:${phone}`} className="hover:underline">
                        {phone}
                    </a>
                }
            />
            <ContactArticle
                icon={<MapPinIcon className="h-5" />}
                title="Endereço"
                description={
                    <address className="not-italic">
                        <a href="https://www.google.com/maps/place/Garanhuns,+PE" target="_blank" rel="noreferrer" className="hover:underline">
                            Garanhuns, Pernambuco, Brazil
                        </a>
                    </address>
                }
            />
        </section>
    );
}