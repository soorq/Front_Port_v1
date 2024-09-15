import { Facebook, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { Button } from "^/src/shared/ui/button";
import Link from "next/link";

export const SocialLinks = () => {
  const links = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/shahina.khatun.1044",
      icon: <Facebook />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/Taquiimam14",
      icon: <Twitter />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/taqui-imam",
      icon: <Linkedin />,
    },
    {
      name: "External",
      link: "https://tinyurl.com/MdTaquiImam",
      icon: <ExternalLink />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50} className="px-0">
            <Button asChild>
              <Link target="blank" rel='noopener noreferrer' href={itm.link}>
                {itm.icon}
              </Link>
            </Button>
          </FramerWrapper>
        );
      })}
    </>
  );
};

