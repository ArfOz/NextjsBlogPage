import { DictionaryType } from './../../contact/dictionary.type';
export interface Navigate {
    name: keyof DictionaryType['navbar'];
    href: string;
}
