import { NextIntlClientProvider, useMessages } from "next-intl";
import { Transition } from "^/src/widgets/page-transition";
import { ThemeProvider } from "./next-theme.provider";

/**
 * #TODO:
 * Add a theme context a configurate them
 */
export const RootProvider = ({
    children,
}: Readonly<React.PropsWithChildren>) => {
    const messages = useMessages();
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <NextIntlClientProvider messages={messages}>
                <Transition>{children}</Transition>
            </NextIntlClientProvider>
        </ThemeProvider>
    );
};
