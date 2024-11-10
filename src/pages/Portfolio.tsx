import { Separator } from "@/components/ui/separator";
import { ContactsSection } from "./components/ContactsSection";
import { PresentationSection } from "./components/PresentationSection";
import { SocialsSection } from "./components/SocialsSection";
import { ExperiencesSection } from "./components/ExperiencesSection";
import { HardSkillsSection } from "./components/HardSkillsSection";

export function PortfolioPage() {
    return (
        <div className="lg:container mx-auto flex h-[100vh]">
            <aside className="flex flex-col gap-4 p-4">
                <PresentationSection />
                <Separator />
                <ContactsSection />
                <Separator />
                <SocialsSection />
            </aside>

            <Separator orientation="vertical" className="h-[100%]" />

            <section className="p-4 flex-1">
                <ExperiencesSection />
                <HardSkillsSection />
            </section>
        </div>
    );
}