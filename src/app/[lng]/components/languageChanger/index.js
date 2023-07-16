import { useTranslation } from '@/i18n';
import LanguageChanger from './languageChanger';
import { use } from 'react';

async function getTrans(lng) {
    const { t } = await useTranslation(lng, 'common');
    return t;
}
export const LanguageBase = ({ lng, path }) => {
    const t = use(getTrans(lng));
    return <LanguageChanger t={t} lng={lng} path={path} />;
};
