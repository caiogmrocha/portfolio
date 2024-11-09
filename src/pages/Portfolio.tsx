import { Separator } from "@/components/ui/separator";
import { ContactsSection } from "./components/ContactsSection";
import { PresentationSection } from "./components/PresentationSection";

export function PortfolioPage() {
    return (
        <div className="container mx-auto flex flex-col">
            <PresentationSection />

            <Separator className="my-4" />

            <ContactsSection />
        </div>
    );
}