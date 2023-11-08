import { Checkbox, Form } from 'antd'
import React from 'react'

interface props {
    label: string
}

export const CheckboxTemplate = ({ label }: props) => {
    return (
        <div>
            <Form.Item className="my-1" label={<p>{label}</p>}>
                <Checkbox
                    id=''
                    className='border-[1px] px-1 rounded'
                    onChange={() => { }}
                    value={''}

                />

            </Form.Item>
        </div>
    )
}
