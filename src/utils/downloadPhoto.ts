function forceDownload(blobUrl: string, filename: string) {
    let a: any = document.createElement('a')
    a.download = filename
    a.href = blobUrl
    document.body.appendChild(a)
    a.click()
    a.remove()
}
