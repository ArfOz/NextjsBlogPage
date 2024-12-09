'use client'
import React from 'react'

const DownloadButton = ({
    lang,
    download,
}: {
    lang: string
    download: string
}) => {
    // There is no turkish cv
    lang == 'tr' ? (lang = 'en') : lang
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = `/docs/cv_${lang}.pdf?timestamp=${new Date().getTime()}` // PDF dosyasının yolu
        link.download = `Arif_Ozkan_CV_${lang}.pdf` // İndirilen dosya adı
        link.click()
    }

    return (
        <button onClick={handleDownload} className="btn">
            {download}
        </button>
    )
}

export default DownloadButton
