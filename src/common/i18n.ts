import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import headerTranslations from "../components/header/header.translation";
import commonTranslations from "../common/translations";
import employeesListTranslations from "../components/employees-list/employees-list.translations";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    debug: true,
    resources: {
        en: {
            header: headerTranslations,
            common: commonTranslations,
            employeesListTranslations: employeesListTranslations,
        },
    },
});

export default i18n;
