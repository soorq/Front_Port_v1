import { PreloadingPage } from "^/src/screens/preloading/preloading-page.ui";
import { AnimatePresence } from "framer-motion";

export default function Loading() {
    return (
        <AnimatePresence mode='wait'>
            <PreloadingPage />
        </AnimatePresence>
    );
}
