import { Experience } from '@components/index'
export interface DictionaryType {
    navbar: {
        todos: string
        weather: string
        photos: string
    }
    contact: {
        left_title: string
        left_small_title: string
        left_details: string
        right_title: string
        right_fullname: string
        right_email: string
        right_subject: string
        right_message: string
        right_send_button: string
        link: string
    }
    weather: {
        weather_forecast: string
        TR: string
        CH: string
    }
    title: string
    home: {
        context: string
        course_title: string
        course_times: string
        working_history_title: string
        working_history: string
    }
    experience: Experience[]
    technologies: {
        title: string
        answer: string
        qualities: string[]
        context: string
        techs: string[]
    }
}

export type Country = 'TR' | 'CH'

export type Details = 'family' | 'mine'

type Experience = {
    icon: string
    company: string
    title: string
    years: string
    technologies?: string[]
}
