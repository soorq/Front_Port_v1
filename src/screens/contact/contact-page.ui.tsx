import { FramerWrapper } from "^/src/shared/ui/framer-wrapper"
import { ContactForm } from "^/src/features/contact-form"
import { Heading } from "^/src/shared/ui/heading"
import { Badge } from "^/src/shared/ui/badge"
import { Phone} from "lucide-react"

export const ContactPage = () => {
    return (
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge className="gap-2">
                <Phone className="h-5 w-5" />
                Contact
            </Badge>
            <div className="flex flex-col gap-3 w-full">
                <Heading>Contact Me!</Heading>
                <div className="h-auto w-full flex justify-center items-center">
                    <FramerWrapper y={0} scale={0.8}>
                        <ContactForm />
                    </FramerWrapper>
                </div>
                <p className="font-poppins text-lg w-full text-primary max-sm:text-base"></p>
            </div>
        </div>

    )
}