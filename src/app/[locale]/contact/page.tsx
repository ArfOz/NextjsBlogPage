import Form from './form'

export default async function ContactUs({
    params,
}: ContactUsProps<'/[locale]'>) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a]">
            <Form />
        </div>
    )
}
