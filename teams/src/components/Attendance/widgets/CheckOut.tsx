import { Form } from 'antd'
import React from 'react'
import { InputsTemplate } from '../../../templates/inputsTemplate'
import { ImageUploader } from '../../../templates/imageUploader'
import { SaveButton } from '../../accesserios/buttons'

export const CheckOut = () => {
    return (
        <div className='w-full h-full px-2'>
            <p className='pt-1 border-[1px] border-b-0 px-2 w-full bg-slate-100 font-semibold my-2'>{"NSS Personnel Check-Out Form"}</p>
            <Form
                name="check-out"
                className=''
                layout={"horizontal"}
                size={"small"}
                labelCol={{ span: 3 }}
            // wrapperCol={{span:3}}

            >
                <section>
                    <InputsTemplate
                        InputType={'string'}
                        label='Name'
                        placeholder={''}
                        itemChange={() => { }}
                        disabled

                    />

                    <Form.Item className='' label={<p className=''>{"Image"}</p>}>
                        <div className='w-full h-[180px] flex border-2 justify-center items-center'>
                            <p className='flex h-full justify-center items-center'>No Image</p>
                        </div>

                        <div className='w-full my-1 flex justify-end'>
                            <SaveButton handleSave={() => { }} btnName={'Update'} />
                        </div>
                    </Form.Item>
                </section>

            </Form>

        </div>
    )
}
