import { getLocales } from "expo-localization";
import { LanguageDetectorModule } from "i18next";
const expoLanguageDetector = {
  type: "languageDetector",
  init: () => {},
  detect: () => {
    return getLocales()[0].languageCode;
  },
  cacheUserLanguage: () => {},
};
export default expoLanguageDetector;
