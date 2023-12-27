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

const workIcon = {
    icon: <MdWorkOutline />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
}

const schoolIcon = {
    icon: <FaSchool />,
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
}
const armyIcon = {
    icon: <TbTank />,
    iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
}

export function Experience({ dictionary }: { dictionary: any }) {
    return (
        <section id="experience" className="full">
            <h3>
                My Experience{' '}
                {/* <a
                    href="https://www.cluemediator.com/"
                    target="_blank"
                    rel="noopener"
                >
                    My Experience
                </a> */}
            </h3>

            <VerticalTimeline>
                {dictionary['experience'].map((t: any, i: any) => {
                    const contentStyle =
                        i === 0
                            ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                            : undefined
                    const arrowStyle =
                        i === 0
                            ? { borderRight: '7px solid  rgb(33, 150, 243)' }
                            : undefined

                    console.log('t', t)
                    console.log('i', i)
                    return (
                        <VerticalTimelineElement
                            visible={true}
                            key={i}
                            className="vertical-timeline-element--work"
                            contentStyle={contentStyle}
                            contentArrowStyle={arrowStyle}
                            date={t.date}
                            icon={<MdWorkOutline />}
                        >
                            {t.title ? (
                                <React.Fragment>
                                    <h3 className="vertical-timeline-element-title">
                                        {t.title}
                                        {' - '}
                                        <span className="vertical-timeline-element-title font-bold">
                                            {t.company}
                                        </span>
                                    </h3>

                                    <h4 className="vertical-timeline-element-subtitle text-sm">
                                        {t.years}
                                    </h4>

                                    <p className="vertical-timeline-element-subtitle font-thin ">
                                        {t.technologies.join(', ')}
                                    </p>
                                </React.Fragment>
                            ) : undefined}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </section>
    )
}
