// 'use client'
// // import React from 'react'
// // import Badge from 'react-bootstrap/Badge'
// import {
//     VerticalTimeline,
//     VerticalTimelineElement,
// } from 'react-vertical-timeline-component'
// import 'react-vertical-timeline-component/style.min.css'
// import { BiWorld } from 'react-icons/bi'

// // company": "Shopify",
// // "title": "Senior Software Engineer",
// // "years": "08/2021 - present",
// // "technologies": ["React", "TypeScript", "Ruby on Rails", "Jest"]

// export function Experience({ dictionary }: { dictionary: any }) {
//     console.log('arif', dictionary['experience'])
//     return (
//         <section id="experience" className="full">
//             <h3>
//                 Create a vertical timeline component in React -{' '}
//                 <a
//                     href="https://www.cluemediator.com/"
//                     target="_blank"
//                     rel="noopener"
//                 >
//                     Clue Mediator
//                 </a>
//             </h3>

//             <VerticalTimeline>
//                 {dictionary['experience'].map((element: any) => {
//                     console.log('element', element.years)
//                     return (
//                         <VerticalTimelineElement
//                             key={element.id}
//                             // date={element.years}
//                             iconStyle={{
//                                 backgroundColor: 'slateblue',
//                                 alignContent: 'center',
//                                 textAlign: 'center',
//                             }}
//                             contentStyle={{
//                                 backgroundColor: '#22333b',
//                             }}
//                             contentArrowStyle={{
//                                 borderRightColor: '#22333b',
//                             }}
//                             icon={<BiWorld />}
//                         >
//                             selam
//                             <h3 className="heading text-red-700">
//                                 {element.company}
//                             </h3>
//                             <h5 className="subHeading">{element.company}</h5>
//                             <p className="description">{element['company']}</p>
//                         </VerticalTimelineElement>
//                     )
//                 })}
//             </VerticalTimeline>
//         </section>
//     )
// }

'use client'

import React from 'react'

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//     faBriefcase,
//     faSchool,
//     faStar,
// } from '@fortawesome/free-solid-svg-icons'

const workIcon = {
    // icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
}
const schoolIcon = {
    // icon: <FontAwesomeIcon icon={faSchool} />,
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
}
const starIcon = {
    // icon: <FontAwesomeIcon icon={faStar} />,
    iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
}

export function Experience() {
    const timeline = [
        {
            icon: workIcon,
            date: '2011 - present',
            title: 'Creative Director',
            subtitle: 'Miami, FL',
            desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
        },
        {
            icon: workIcon,
            date: '2010 - 2011',
            title: 'Art Director',
            subtitle: 'San Francisco, CA',
            desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
        },
        {
            icon: workIcon,
            date: '2008 - 2010',
            title: 'Web Designer',
            subtitle: 'Los Angeles, CA',
            desc: 'User Experience, Visual Design',
        },
        {
            icon: workIcon,
            date: '2006 - 2008',
            title: 'Web Designer',
            subtitle: 'San Francisco, CA',
            desc: 'User Experience, Visual Design',
        },
        {
            icon: schoolIcon,
            date: 'April 2013',
            title: 'Content Marketing for Web, Mobile and Social Media',
            subtitle: 'Online Course',
            desc: 'Strategy, Social Media',
        },
        {
            icon: schoolIcon,
            date: 'November 2012',
            title: 'Agile Development Scrum Master',
            subtitle: 'Certification',
            desc: 'Creative Direction, User Experience, Visual Design',
        },
        {
            icon: schoolIcon,
            date: '2002 - 2006',
            title: 'Bachelor of Science in Interactive Digital Media Visual Imaging',
            subtitle: 'Bachelor Degree',
            desc: 'Creative Direction, Visual Design',
        },
        { icon: starIcon },
    ]

    return (
        <div className="App">
            <h3>
                Create a vertical timeline component in React -{' '}
                {/* <a href="https://www.cluemediator.com/" target="_blank">
                    Clue Mediator
                </a> */}
            </h3>
            <VerticalTimeline>
                {timeline.map((t, i) => {
                    const contentStyle =
                        i === 0
                            ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                            : undefined
                    const arrowStyle =
                        i === 0
                            ? { borderRight: '7px solid  rgb(33, 150, 243)' }
                            : undefined

                    return (
                        <VerticalTimelineElement
                            visible={true}
                            key={i}
                            className="vertical-timeline-element--work"
                            contentStyle={contentStyle}
                            contentArrowStyle={arrowStyle}
                            date={t.date}
                            {...t.icon}
                        >
                            {t.title ? (
                                <React.Fragment>
                                    <h3 className="vertical-timeline-element-title">
                                        {t.title}
                                    </h3>
                                    {t.subtitle && (
                                        <h4 className="vertical-timeline-element-subtitle">
                                            {t.subtitle}
                                        </h4>
                                    )}
                                    {t.desc && <p>{t.desc}</p>}
                                </React.Fragment>
                            ) : undefined}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}
