import React from 'react'
import dash from '../../assets/Dash.gif'
import { Form } from 'antd'
import { InputsTemplate } from '../../templates/inputsTemplate'
import { SaveButton } from '../accesserios/buttons'

export const Login = () => {



    const credentials = [
        { id: 0, label: 'Nss Number', defaultValue: '', stateName: '' },
        { id: 1, label: 'Password', defaultValue: '', stateName: '' },
    ]
    return (
        <div className='w-full h-full'>
            <div className='w-full h-full py-8  justify-center items-center'>
                <div className=' w-full  flex justify-center py-12'>
                    <img className='w-[40%] h-[30%]' src={dash} alt='' />
                </div>
                <Form
                    className='w-full h-full'
                    labelCol={{ span: 9 }}
                    wrapperCol={{ span: 5 }}
                >
                    {credentials.map(({ id, label, stateName, defaultValue }) => {
                        return (
                            <>
                                <InputsTemplate
                                    label={label}
                                    InputType={id === 0 ? 'number' : 'password'}
                                    disabled={false}
                                />
                            </>
                        )
                    })}

                    <Form.Item labelCol={{ span: 9 }} label={<p className='hidden'>{""}</p>} colon={false} className='my-0 '>
                        <div className='w-1/2  justify-end'>
                            <SaveButton btnName={'Login'} handleSave={() => { }} />
                        </div>
                    </Form.Item>
                </Form>

                {/* <div className='w-full h-[20px]  mb-16 bg-slate-500'>

                </div> */}

            </div>
        </div>
    )
}
