'use client';
// These styles apply to every route in the application
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import MyProfilePic from './components/profilePic';

const inter = Inter({ subsets: ['latin'] });

export default function Page() {
    return (
        <div className="flex flex-col p-4">
            <h1 className="text-center">Hello, Welcome my Page</h1>
            <p className="text-justify">
                My name is <span>Arif Özkan</span>. Now I live in Switzerland.
                Before Switzerland I worked as a Full Stack Developer at Ekip.co
                approximately 2 years. After coming Switzerland I resigned from
                job and with my friend we started new project. At this project I
                am working as a backend developer and project manager. Now I'm
                refugee in Switzerland. After taking B permit I want to work in
                Vaud Canton. I also go to the French course. <br /> French
                Level: A1 <br /> English Level: B2
            </p>
            <h2 className="self-center">French Course Time</h2>
            <ul>
                <li>Monday: 13:20-15:55</li>
                <li>Wednesday: 13:20-14:50</li>
                <li>Thursday: 13:20-15:55</li>
            </ul>

            <h2 className="self-center">History</h2>
            <ul>
                <li>
                    2020(May)-2021(Feb) -&gt; Internship at Clarusway Online
                    Career IT Training School
                </li>
                <li>
                    2021(Mar)-2022(Dec) -&gt; Full Stack Web Developer at
                    Ekip.co(Nodejs, Django, React js, Nestjs)
                </li>
                <li>
                    2022(Dec)-2023(Now) -&gt; Project Manager - Backend
                    Developer at Meta.Sentez(Nestjs)
                </li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                consequuntur doloremque neque consequatur in laboriosam, ab,
                cum, minima alias nobis hic corrupti molestiae minus eos. Sint
                obcaecati suscipit, esse consequuntur magni aliquid quas eum
                distinctio impedit est saepe voluptas possimus facere. Iure,
                quaerat ex quasi nulla dolor blanditiis! Temporibus sit nam
                tempora earum, soluta, voluptate error quam iure odio eos
                eveniet accusantium doloremque exercitationem minus beatae
                laborum porro nemo obcaecati. Minus eius eum accusamus
                exercitationem, id laudantium consequuntur velit ex molestiae.
                Vero odit error harum eligendi nobis quae maiores. Natus,
                voluptatum laboriosam nulla asperiores inventore quia nihil
                magni aliquam vitae? Aspernatur a reiciendis obcaecati
                architecto fugiat deserunt nobis reprehenderit, vel fugit
                molestias sunt dolores maiores expedita officiis accusantium,
                sit illum mollitia distinctio tenetur delectus ducimus facilis.
                Distinctio ipsum autem exercitationem beatae inventore mollitia
                veniam cum in doloremque voluptates voluptatem iusto labore
                dolorem nesciunt, soluta reprehenderit explicabo ad, dolor
                sapiente odit accusantium corporis! Enim possimus cum, autem
                sint rerum qui, commodi, debitis optio est iusto id labore
                impedit molestias quasi non eveniet adipisci laboriosam expedita
                harum ratione! Ad dicta, fugit tenetur repudiandae quisquam
                minus voluptatum corporis adipisci voluptate. Quaerat,
                temporibus! Doloribus adipisci reprehenderit deleniti sapiente
                nam officiis, dolor dignissimos explicabo dolorum. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Expedita corrupti
                animi, nulla molestiae non aut totam ad autem excepturi
                doloremque illo, inventore incidunt ipsam temporibus laboriosam
                nemo voluptatum voluptatibus impedit beatae, magnam voluptates
                hic! Natus nesciunt, ducimus dolorum, odit quis quo earum error,
                fugit inventore dolores autem explicabo quisquam corporis?Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Unde, non
                atque. Dolore in sequi repudiandae dignissimos vitae, porro
                possimus quaerat?
            </ul>
            <MyProfilePic />
        </div>
    );
}
