import ProfilePicture from "../../assets/images/profile-picture.jpg";

type PresentationSectionProps = React.HTMLAttributes<HTMLDivElement>;

export function PresentationSection(props: PresentationSectionProps) {
    return (
        <section {...props}>
            <img src={ProfilePicture} alt="Profile Picture" className="h-24 w-h-24 rounded-full" />
            <h1 className="text-2xl text-zinc-800 font-bold mt-2">
                Caio Rocha
            </h1>
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-500 vi-blue-600 to-cyan-400 text-transparent bg-clip-text inline-block mt-1 tracking-wide">
                Software Developer
            </h2>
        </section>
    );
}