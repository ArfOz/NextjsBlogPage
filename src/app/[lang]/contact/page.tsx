'use client';
import { getDictionary } from 'get-dictionary';
import { Locale } from 'i18n-config';
import Form from './form';

export default async function ContactUs({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const dictionary = await getDictionary(lang);

    return <Form dictionary={dictionary} />;
}
