'use client'

import { LocaleType } from "../../i18next/settings";
import { LanguageSelector } from "./LanguageSelector";

type DynamicLink = {
  language: LocaleType;
  slug: string;
};

export type HeaderProps = {
  currentLocale: string;
  dynamicLinks?: Array<DynamicLink>;
};

export default function SwitcherGlobal( {currentLocale,dynamicLinks}:HeaderProps){
  
  return (
  <LanguageSelector currentLocale={currentLocale} dynamicLinks={dynamicLinks}></LanguageSelector>
  )
}
