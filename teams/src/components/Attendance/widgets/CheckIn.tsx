import React from 'react'

import { ImageUploader } from '../../../templates/imageUploader'
import { InputsTemplate } from '../../../templates/inputsTemplate'
import { Form } from 'antd'

export const CheckIn = () => {
  return (
    <div className='w-full px-2'>
        <p className='pt-1 border-[1px] border-b-0 px-2 w-full bg-slate-100 font-semibold my-2'>{"NSS Personnel Check-Out Form"}</p>
            <Form
                name="check-out"
                className=''
                layout={"horizontal"}
                size={"small"}
                labelCol={{span:3}}
                // wrapperCol={{span:3}}
                
            >
                <section>
                    <InputsTemplate
                        InputType={'string'}
                        label='Name'
                        placeholder={''}
                        itemChange={()=>{}}
                        disabled
                        
                    />

                    <ImageUploader 
                        label='Image'
                        
                    />
                </section>

            </Form>
    </div>
  )
}
