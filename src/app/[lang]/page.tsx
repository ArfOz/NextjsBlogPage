import { getDictionary } from '../../../get-dictionary';
import { Locale } from '../../../i18n-config';
import MyProfilePic from './components/profilePic';

import parse from 'html-react-parser';

export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const dictionary = await getDictionary(lang);

    return (
        <div className="flex flex-col p-4 mb-24">
            <h1 className="text-center">{dictionary['title']}</h1>

            <p className="text-justify">
                {parse(dictionary['home']['context'])}
            </p>
            <h2 className="self-center">
                {dictionary['home']['course_title']}
            </h2>
            <ul>{parse(dictionary['home']['course_times'])}</ul>
            <h2 className="self-center">
                {dictionary['home']['working_history_title']}
            </h2>
            <ul>{parse(dictionary['home']['working_history'])}</ul>
            <MyProfilePic />
            {dictionary['home'].context}
        </div>
    );
}
