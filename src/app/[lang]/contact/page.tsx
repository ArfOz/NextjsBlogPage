'use client';
import { getDictionary } from '../../../../get-dictionary';
import { Locale } from '../../../../i18n-config';
import Form from './form';

async function getTrans(lng: Locale) {
    return await getDictionary(lng);
}
export default async function ContactUs({
    params: { lang },
}: {
    params: { lang: any };
}) {
    const dictionary = await getDictionary(lang);

    return <Form dictionary={dictionary} />;
}
