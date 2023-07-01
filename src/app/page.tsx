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
                    2020(May)-2021() -&gt; Internship at Clarusway Online Career
                    IT Training School
                </li>
                <li>
                    2021(Mar)-2022(Feb) -&gt; Full Stack Web Developer at
                    Ekip.co(Nodejs, Django, React js, Nestjs)
                </li>
                <li>
                    2022(Dec)-2023(Now) -&gt; Project Manager - Backend
                    Developer at Meta.Sentez(Nestjs)
                </li>
            </ul>
            <MyProfilePic />
        </div>
    );
}
