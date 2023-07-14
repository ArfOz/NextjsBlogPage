import { languages, fallbackLng } from '../../i18n/settings';
import { useTranslation } from '../../i18n';
import { use } from 'react';

async function getTrans(lng: string) {
    const { t } = await useTranslation(lng, 'common');
    return t;
}
export default function Head({ params: { lng } }: { params: { lng: string } }) {
    if (languages.indexOf(lng) < 0) lng = fallbackLng;
    const t = use(getTrans(lng));
    return (
        <>
            <title>{t('title')}</title>
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
        </>
    );
}
