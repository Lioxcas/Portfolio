import "../styles/globals.css";
import { useState } from "react";
import LangContext from "../src/components/context/LangContext";

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState("ES");

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      <Component {...pageProps} />
    </LangContext.Provider>
  );
}
