import * as React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitch as LanguageSwitchComponent } from "ui";

type LanguageSwitchProps = {};

const LanguageSwitch: React.FC<LanguageSwitchProps> = (): JSX.Element => {
  const { i18n } = useTranslation();

  return (
    <LanguageSwitchComponent
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "sk" : "en")}
    >
      {i18n.language === "en" ? "sk" : "en"}
    </LanguageSwitchComponent>
  );
};

export default LanguageSwitch;
