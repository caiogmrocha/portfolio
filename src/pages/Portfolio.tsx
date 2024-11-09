import { Separator } from "@/components/ui/separator";
import { ContactsSection } from "./components/ContactsSection";
import { PresentationSection } from "./components/PresentationSection";
import { SocialsSection } from "./components/SocialsSection";

export function PortfolioPage() {
    return (
        <div className="container mx-auto flex flex-col gap-4 p-4">
            <PresentationSection />

            <Separator />

            <ContactsSection />

            <Separator />

            <SocialsSection />
        </div>
    );
}