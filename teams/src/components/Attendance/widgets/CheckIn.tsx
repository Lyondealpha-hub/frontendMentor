import React, { useCallback, useRef, useState } from 'react'
import camera from '../../../assets/camera.png'
import { ImageUploader } from '../../../templates/imageUploader'
import { InputsTemplate } from '../../../templates/inputsTemplate'
import { Checkbox, Form } from 'antd'
import { SaveButton } from '../../accesserios/buttons'
import Webcam from 'react-webcam'
import { CheckboxTemplate } from '../../../templates/checkboxTemplate'

export const CheckIn = () => {
    const [isCam, setIsCam] = useState<boolean>(false);
    const [Image, setImage] = useState<any>("");

    const videoConstraints = {
        width: 300,
        height: 220,
        facingMode: "user"
    };


    const webcamRef = useRef<any>(null);
    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
            console.log(imageSrc);

        },
        [webcamRef]
    );


    return (
        <div className='w-full px-2'>
            <p className='pt-1 border-[1px] border-b-0 px-2 w-full bg-slate-100 font-semibold my-2'>{"NSS Personnel Check-In Form"}</p>
            <Form
                name="check-in"
                className='w-full h-full'
                layout={"horizontal"}
                size={"small"}
                labelCol={{ span: 6 }}
            // wrapperCol={{span:3}}

            >
                <section className=''>
                    <InputsTemplate
                        InputType={'string'}
                        label='Name'
                        placeholder={''}
                        itemChange={() => { }}
                        disabled

                    />


                    <>
                        <Form.Item className='my-0' label={<p className=''>{"Capture/Preview"}</p>} colon={true}>
                            <div className='flex justify-between space-x-3'>
                                {isCam ?
                                    <>
                                        <div className='w-1/2'>
                                            <Webcam
                                                audio={false}
                                                height={220}
                                                ref={webcamRef}
                                                screenshotQuality={10}
                                                imageSmoothing={true}
                                                screenshotFormat="image/jpeg"
                                                width={300}
                                                videoConstraints={videoConstraints}

                                            />
                                        </div>

                                    </>
                                    :
                                    <>
                                        <div className='w-1/2 h-[180px] bg-slate-300 border-2 rounded'>

                                            <div className='flex-col h-full py-10 justify-center items-center'>
                                                <span className='flex justify-center items-center'><img src={camera} alt='capture camera' /></span>
                                                <p className='flex justify-center items-center'>Click "ON" to <span className=' underline '>  Turn on Camera</span></p>
                                            </div>

                                        </div>
                                    </>
                                }
                                <div className='w-1/2 h-[180px] border-2 rounded'>
                                    {Image === "" ?
                                        <>
                                            <p className='flex h-full justify-center items-center'>No Image</p>
                                        </>
                                        :
                                        <>
                                            <img src={Image} alt='Taken Photo' />
                                        </>
                                    }
                                </div>

                            </div>
                        </Form.Item>
                    </>


                </section>

                <Form.Item className='my-1' label={<p className=''>{"Active"}</p>} colon={true}>
                    <div className='w-full flex  justify-between'>
                        <div className='w-1/2 space-x-1 '>
                            <Checkbox className='border-[1px] px-1 rounded' />
                            <SaveButton handleSave={() => { setIsCam(!isCam) }} btnName={isCam == true ? "OFF" : "ON"} />
                            {isCam == true && <SaveButton handleSave={capture} btnName={'Capture'} />}
                        </div>
                        <div className='w-1/2 flex justify-end'>
                            <SaveButton handleSave={() => { }} btnName={'Save'} />
                        </div>
                    </div>
                </Form.Item>

            </Form>
        </div>
    )
}