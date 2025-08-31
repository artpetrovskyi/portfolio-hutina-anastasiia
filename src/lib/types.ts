// Generic localized text type
type LocalizedText = {
  en: string;
  uk: string;
};

// ======================= HERO =======================
export interface HeroData {
  image: string;
  firstName: LocalizedText;
  middleName: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  actionText: LocalizedText;
  descriptionText: LocalizedText;
  actionButtonText: LocalizedText;
  drawerTitle: LocalizedText;
  drawerSubitle: LocalizedText;
}

// ======================= ABOUT =======================
export interface AboutItem {
  title: LocalizedText;
  body: LocalizedText;
}

export interface AboutData {
  items: AboutItem[];
}

// ======================= PROCESS =======================
export interface ProcessItem {
  title: LocalizedText;
  body: LocalizedText;
}

export interface ProcessData {
  mainDescription: LocalizedText;
  items: ProcessItem[];
}

// ======================= CONTACTS =======================
export interface ContactItem {
  title: string;
  label: string;
  link: string;
  icon?: string; // optional because email in JSON has no icon
}

export interface ContactsData {
  items: ContactItem[];
}

// ======================= FOOTER =======================
export interface FooterImage {
  image: string;
}

export interface FooterData {
  pc: FooterImage;
  mob: FooterImage;
}

// ======================= ROOT =======================
export interface GeneralData {
  hero: HeroData;
  about: AboutData;
  process: ProcessData;
  contacts: ContactsData;
  footer: FooterData;
}

export interface CaseItem {
  image: string;
  title: {
    en: string;
    uk: string;
  };
  body: {
    en: string;
    uk: string;
  };
  link: string;
}

export interface CasesData {
  items: CaseItem[];
}
