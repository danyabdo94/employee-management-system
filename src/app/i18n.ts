import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import header from "../components/header/header.translation";
import common from "../common/translations";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    debug: true,
    resources: {
        en: {
            header: header,
            common: common,
        },
    },
});

export default i18n;
