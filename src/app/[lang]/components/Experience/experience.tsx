'use client'
// import React from 'react'
// import Badge from 'react-bootstrap/Badge'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { BiWorld } from 'react-icons/bi'
import React from 'react'
import { MdWorkOutline } from 'react-icons/md'
import { FaSchool } from 'react-icons/fa'
import { TbTank } from 'react-icons/tb'

function iconSelector(icon: string) {
    switch (icon) {
        case 'workIcon':
            return <MdWorkOutline />
        case 'schoollIcon':
            return <FaSchool />
        case 'armyIcon':
            return <FaSchool />
        default:
            return <FaSchool />
    }
}

export function Experience({ dictionary }: { dictionary: any }) {
    return (
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {dictionary['experience'].map((t: any, i: any) => {
                console.log(`${t.icon}`)
                return (
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-slate-400 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            {iconSelector(t.icon)}
                            {/* {workIcon} */}
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900">
                                    {t.title} - {t.company}
                                </div>
                                <time className="font-caveat font-medium text-indigo-500">
                                    {t.years}
                                </time>
                            </div>
                            <div className="text-slate-500">
                                {t.technologies.join(', ')}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
