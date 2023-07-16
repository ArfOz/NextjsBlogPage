import type { NextPage } from "next";
import Translation from "../components/Translation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
    return (
        <div>
            <Translation />
        </div>
    );
};

export default Home;
export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
