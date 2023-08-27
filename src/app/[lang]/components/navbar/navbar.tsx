import { getDictionary } from 'get-dictionary';
import { Locale } from 'i18n-config';
import { NavbarComp } from './navbarUser';

export async function Navbar({ lang }: { lang: Locale }) {
    const dictionary = await getDictionary(lang);

    return <NavbarComp lang={lang} dictionary={dictionary} />;
}
