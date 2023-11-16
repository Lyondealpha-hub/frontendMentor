import { Form, Input } from 'antd'
import React, { useState } from 'react'

interface props {
    label?: string
    InputType?: string,
    itemChange?: (e: any) => void
    placeholder?: string
    disabled?: boolean
}

export const InputsTemplate = ({ label, InputType, placeholder, disabled = true, itemChange }: props) => {
    const [value, setValue] = useState<string | number>();
    return (
        <div className='w-full'>
            <Form.Item className='my-1' label={<p>{label}</p>}>
                <Input
                    size={"middle"}
                    type={InputType}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={placeholder}
                    onChange={(e: any) => {
                        const inputValue = e.target.value;
                        setValue(inputValue)
                        itemChange && itemChange(inputValue);
                    }}
                />

            </Form.Item>
        </div>
    )
}
