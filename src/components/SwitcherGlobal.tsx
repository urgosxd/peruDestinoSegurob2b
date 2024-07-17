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
  slug: string | undefined;
};

export default function SwitcherGlobal( {currentLocale,dynamicLinks,slug}:HeaderProps){
  
  return (
  <LanguageSelector currentLocale={currentLocale} dynamicLinks={dynamicLinks} slug={slug}></LanguageSelector>
  )
}
