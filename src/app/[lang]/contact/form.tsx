import React, { useState } from 'react';
import { MailData } from '@api/index';
import { DictionaryType } from '../components/index';

const Form = ({ dictionary }: { dictionary: DictionaryType }) => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [form, setForm] = useState(false);

    //   Form validation
    const [errors, setErrors] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: '',
    });

    //   Setting button text
    const [buttonText, setButtonText] = useState(
        dictionary['contact']['right_send_button']
    );

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
        let tempErrors: any = {};
        let isValid = true;

        if (fullname.length <= 0) {
            tempErrors['fullname'] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors['email'] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors['subject'] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors['message'] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log('errors', errors);
        return isValid;
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            let isValidForm = handleValidation();
            if (isValidForm) {
                setButtonText('Sending');
                let data: MailData = {
                    Email: email,
                    Fullname: fullname,
                    Subject: subject,
                    Message: message,
                };

                const res = await fetch('/api/sendemail', {
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                });

                const response = await res.json();
                if (response.Data.Error) {
                    setShowSuccessMessage(false);
                    setShowFailureMessage(true);
                    setButtonText('Send');
                    // Reset form fields
                    setFullname('');
                    setEmail('');
                    setMessage('');
                    setSubject('');
                    return;
                }
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
                setButtonText('Send');
                // Reset form fields
                setFullname('');
                setEmail('');
                setMessage('');
                setSubject('');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40  md:h-96">
            <div className="mx-auto mb-10 md:mt-20">
                <div className="badge bg-green-500 inline-block rounded-xl">
                    <p className="font-light text-base px-4 py-1 text-gray-50">
                        {dictionary['contact']['left_title']}
                    </p>
                </div>
                <h1 className="text-4xl font-bold mt-4 dark:text-gray-50 text-gray-700">
                    {dictionary['contact']['left_small_title']}
                </h1>
                <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
                    {dictionary['contact']['left_details']}
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-slate-800"
            >
                <h1 className="text-2xl font-bold dark:text-gray-50">
                    {dictionary['contact']['right_title']}
                </h1>

                <label
                    htmlFor="fullname"
                    className="text-gray-500 font-light mt-8 dark:text-gray-50"
                >
                    {dictionary['contact']['right_fullname']}

                    <span className="text-red-500 dark:text-gray-50">*</span>
                </label>
                <input
                    type="text"
                    value={fullname}
                    onChange={(e) => {
                        setFullname(e.target.value);
                    }}
                    name="fullname"
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                />
                {errors.fullname && (
                    <p className="text-red-500">Fullname cannot be empty.</p>
                )}

                <label
                    htmlFor="email"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                    {dictionary['contact']['right_email']}
                    <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                />
                {errors?.email && (
                    <p className="text-red-500">Email cannot be empty.</p>
                )}

                <label
                    htmlFor="subject"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                    {dictionary['contact']['right_subject']}
                    <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => {
                        setSubject(e.target.value);
                    }}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                />
                {errors?.subject && (
                    <p className="text-red-500">Subject cannot be empty.</p>
                )}
                <label
                    htmlFor="message"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                >
                    {dictionary['contact']['right_message']}
                    <span className="text-red-500">*</span>
                </label>
                <textarea
                    name="message"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                ></textarea>
                {errors?.message && (
                    <p className="text-red-500">
                        Message body cannot be empty.
                    </p>
                )}
                <div className="flex flex-row items-center justify-start">
                    <button
                        type="submit"
                        className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                    >
                        {buttonText}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="text-cyan-500 ml-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
                <div className="text-left">
                    {showSuccessMessage && (
                        <p className="text-green-500 font-semibold text-sm my-2">
                            Thankyou! Your Message has been delivered.
                        </p>
                    )}
                    {showFailureMessage && (
                        <p className="text-red-500">
                            Oops! Something went wrong, please try again.
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Form;
