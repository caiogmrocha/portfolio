import { Separator } from "@/components/ui/separator";
import { ContactsSection } from "./components/ContactsSection";
import { PresentationSection } from "./components/PresentationSection";
import { SocialsSection } from "./components/SocialsSection";
import { ExperienceSection } from "./components/ExperienceSection";

export function PortfolioPage() {
    return (
        <div className="mx-auto flex h-[100vh]">
            <aside className="flex flex-col gap-4 p-4 ">
                <PresentationSection />

                <Separator />

                <ContactsSection />

                <Separator />

                <SocialsSection />
            </aside>

            <Separator orientation="vertical" className="h-[100%]" />

            <section className="p-4">
                <ExperienceSection />
            </section>
        </div>
    );
}