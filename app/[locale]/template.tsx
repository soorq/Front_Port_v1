import { AnimatePresence } from "framer-motion";
import { Header } from "^/src/widgets/header";

export default function LocaleTemplate({
    children,
}: Readonly<React.PropsWithChildren>) {
    return (
        <AnimatePresence mode="wait">
            <main className="flex relative break-words min-h-screen container items-center justify-between pt-14 pb-4 max-md:p-4 max-sm:pt-20">
                <Header />
                {children}
            </main>
        </AnimatePresence>
    );
}
