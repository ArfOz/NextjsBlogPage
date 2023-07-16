import { use } from 'react';
import { useTranslation } from '@/i18n';
import LanguageChanger from './languageChanger';

async function getTrans(lng) {
    const { t } = await useTranslation(lng, 'common');
    return t;
}
export const LanguageBase = ({ lng, path }) => {
    const t = use(getTrans(lng));
    return <LanguageChanger t={t} lng={lng} path={path} />;
};
