import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";

export const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <FramerWrapper y={0} x={-100}>
      <h1 className="font-poppins font-bold text-4xl t_underline max-sm:text-2xl">
        {children}
      </h1>
    </FramerWrapper>
  );
};

