'use client';
// These styles apply to every route in the application
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import MyProfilePic from './components/profilePic';

const inter = Inter({ subsets: ['latin'] });

export default function Page() {
    return (
        <div className="flex flex-col p-4 mb-24">
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
            </ul>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio
            id eligendi sint maiores sit delectus eaque ratione nihil. Esse
            nobis optio corrupti aliquam error excepturi nostrum tempore aut
            vitae nesciunt impedit, laudantium consequatur doloremque dolore
            suscipit modi magnam, hic pariatur voluptate temporibus quae iusto?
            In illo nisi a necessitatibus, facere delectus aperiam veritatis
            repellat quia explicabo fugiat distinctio pariatur magni architecto
            officiis quod odit culpa obcaecati temporibus doloremque! Libero
            iure voluptate ratione dolorum voluptatum cumque neque eum beatae
            voluptatibus iste sed molestiae atque ipsum, rem, consequatur fuga
            sit quos repellat odio magnam commodi mollitia quis rerum. Impedit,
            quis ipsa? Quis non nisi maxime qui inventore omnis natus ea libero
            corrupti nostrum, explicabo laborum velit at culpa laboriosam ipsum
            facere voluptatibus, temporibus repellat quisquam dicta minus nemo
            ut. Nobis explicabo distinctio fugit, corrupti inventore quas unde
            saepe odio tempora ut cumque quo iste ipsum mollitia eos, autem
            error molestias, ratione omnis! Fuga provident accusantium ducimus,
            doloremque animi, excepturi quo esse porro id reprehenderit nostrum.
            Accusantium ex obcaecati, exercitationem nihil, sequi tempore, sunt
            enim quo rem eius impedit? Commodi assumenda ipsam harum amet,
            repellat perspiciatis. Facere, in dolorem quasi eius explicabo
            impedit consectetur ea aspernatur maxime, vitae perferendis numquam,
            ullam inventore delectus nesciunt! Facilis aut maiores vitae tenetur
            quis saepe! Porro enim quam nisi suscipit totam! Dolorum iste
            dignissimos voluptas libero commodi repellat eveniet officia
            necessitatibus delectus velit aut sapiente dolore molestiae harum
            aperiam nam eius voluptatum, at consectetur provident ratione
            deserunt esse voluptate. Repellendus, quae. Dicta tenetur corporis,
            aut deleniti qui magni, quasi doloribus tempora totam minus iusto
            veniam. Ducimus, illo eum? Ut maiores explicabo maxime veniam, et
            modi suscipit fugiat eius sint ratione, dicta nostrum ad blanditiis,
            vitae repellat alias quam incidunt temporibus? Maxime, similique,
            saepe impedit explicabo porro temporibus deleniti itaque pariatur,
            quod architecto soluta obcaecati voluptates aperiam minus suscipit!
            Perspiciatis asperiores, maiores assumenda alias quam excepturi
            labore, quia saepe at voluptas voluptates praesentium. Quo
            recusandae commodi esse. Ipsam minima ullam amet ea in architecto
            iusto aspernatur quasi? Nobis beatae ipsa provident maxime, tempore
            expedita maiores praesentium ex! Aspernatur dolore dignissimos,
            quaerat error in, est, praesentium quis laudantium consequuntur
            velit a harum debitis maxime exercitationem? Odit debitis aliquam,
            illum delectus harum dolorum totam suscipit molestias dicta
            recusandae praesentium sed consectetur! Quas commodi illo nulla,
            mollitia similique consequatur animi ea alias voluptate maiores,
            harum ratione delectus officia distinctio error a beatae nesciunt
            hic pariatur, ipsa odio. Asperiores, sequi ab exercitationem porro
            iure necessitatibus omnis obcaecati enim at veritatis maiores
            reiciendis repellat nemo molestias cum, voluptates deleniti laborum?
            Quam ex aperiam neque. Nostrum et cum ex architecto ab omnis magnam
            magni sequi, excepturi optio sed ad corrupti libero repellendus
            autem assumenda nemo eius ducimus consectetur! Quos in impedit illum
            incidunt assumenda asperiores quo nisi quasi. Dolores ducimus vero
            corrupti quos impedit cumque, sed dolorum laboriosam magnam deleniti
            illum! Dicta suscipit architecto autem possimus iure quasi. Nisi
            enim sed quia esse ea libero, quaerat amet totam eius asperiores
            maxime voluptates nesciunt reprehenderit eum fuga delectus quo
            perferendis laborum. Eum, doloribus ea.
            <MyProfilePic />
        </div>
    );
}
