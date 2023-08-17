'use client';
import { getDictionary } from 'get-dictionary';
import { Locale } from 'i18n-config';
import Form from './form';
import { DictionaryType } from '../components';

export default async function ContactUs({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const dictionary: DictionaryType = await getDictionary(lang);

    return <Form dictionary={dictionary} />;
}
