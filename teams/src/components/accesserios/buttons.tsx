import React from 'react'

interface props {
    btnName: string
    handleSave: (e: any) => void
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
