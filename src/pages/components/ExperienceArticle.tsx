import { Card, CardContent } from "@/components/ui/card";
import { MapPinIcon } from "lucide-react";

export type ExperienceArticleProps = React.HTMLAttributes<HTMLElement> & {
    logo: string;
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    url: string;
};

export function ExperienceArticle(props: ExperienceArticleProps) {
    return (
        <a href={props.url} target="_blank" rel="noreferrer" className="hover:shadow-lg">
            <Card {...props}>
                <CardContent className="flex gap-4 items-center p-4">
                    <img src={props.logo} alt="Company" className="rounded-xl h-[48px]" />
                    <div className="flex justify-between flex-1">
                        <div>
                            <h2 className="text-zinc-500 font-normal">
                                {props.position}
                            </h2>
                            <h3 className="text-zinc-700 font-semibold">
                                {props.company}
                            </h3>
                        </div>
                        <div>
                            <p className="text-zinc-500 font-normal text-right">
                                {props.startDate} - {props.endDate}
                            </p>
                            <span className="flex items-center gap-1 text-zinc-700 font-semibold text-right">
                                <MapPinIcon className="h-5"/>
                                {props.location}
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </a>
    );
}