import React from 'react'

interface props {
    btnName: string
    handleSave ?: (e: any) => void
    handleCapture ?: (e: any) => void
    handleNew ?: (e: any) => void
    cam ?: (e: any) => void
}

export const SaveButton = ({ btnName, handleSave }: props) => {
    return (
        <>
            <button onClick={handleSave} className=' py-1.5 px-5 border-2 rounded' name={btnName} >
                {btnName}
            </button>

        </>
    )
}
export const NewButton = ({ btnName, handleNew }: props) => {
    return (
        <>
            <button onClick={handleNew} className=' py-1.5 px-5 border-2 rounded' name={btnName} >
                {btnName}
            </button>

        </>
    )
}
export const CaptureButton = ({ btnName, handleCapture }: props) => {
    return (
        <>
            <button onClick={handleCapture} className=' py-1.5 px-5 border-2 rounded' name={btnName} >
                {btnName}
            </button>

        </>
    )
}
export const CamButton = ({ btnName, cam }: props) => {
    return (
        <>
            <button onClick={cam} className=' py-1.5 px-5 border-2 rounded' name={btnName} >
                {btnName}
            </button>

        </>
    )
}
