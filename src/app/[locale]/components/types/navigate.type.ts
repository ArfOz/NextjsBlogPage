import { DictionaryType } from './dictionary.type';
export interface Navigate {
    name: keyof DictionaryType['navbar'];
    href: string;
}
