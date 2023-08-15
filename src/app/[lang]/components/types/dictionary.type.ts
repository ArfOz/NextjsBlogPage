export interface DictionaryType {
    navbar: {
        todos: string;
        weather: string;
    };
    contact: {
        left_title: string;
        left_small_title: string;
        left_details: string;
        right_title: string;
        right_fullname: string;
        right_email: string;
        right_subject: string;
        right_message: string;
        right_send_button: string;
        link: string;
    };
    weather: {
        weather_forecast: string;
        TR: string;
        CH: string;
    };
}

export type Country = 'TR' | 'CH';
