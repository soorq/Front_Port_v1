import { useTranslations } from "next-intl";

export const HeroTypography = () => {
  const t = useTranslations("Hero");

  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">
        {t("title")}
      </h3>
      <h1 className="font-rubik text-8xl t_underline max-sm:text-6xl">
        {t("name")}
        <br />
        {t("surname")}
      </h1>

      <div className="py-4 rounded-md flex flex-col items-center overflow-hidden">
        <div className="text-base sm:text-2xl text-balance">
          <span className="font-rubik">{t("desc")} &</span>
          <div className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="[&>li]:text-primary block text-left font-rubik text-lg sm:text-3xl leading-tight [&>li]:block animate-text-slide">
              <li>Freelancer</li>
              <li>Worker</li>
              <li>Gamer</li>
              <li>Creator</li>
              <li>Student</li>
              <li>Contributer</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
