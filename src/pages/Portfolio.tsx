import { Separator } from "@/components/ui/separator";
import { ContactsSection } from "./components/ContactsSection";
import { PresentationSection } from "./components/PresentationSection";
import { SocialsSection } from "./components/SocialsSection";
import { ExperiencesSection } from "./components/ExperiencesSection";
import { HardSkillsSection } from "./components/HardSkillsSection";
import { ToolsSection } from "./components/ToolsSection";

export function PortfolioPage() {
    return (
        <div className="lg:container mx-auto flex h-[100]">
            <aside className="flex flex-col gap-4 p-4 border-r">
                <PresentationSection />
                <Separator />
                <ContactsSection />
                <Separator />
                <SocialsSection />
            </aside>

            <section className="p-4 flex-1">
                <ExperiencesSection />
                <HardSkillsSection />
                <ToolsSection />
            </section>
        </div>
    );
}