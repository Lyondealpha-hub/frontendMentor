import Dragger from 'antd/es/upload/Dragger'
import React from 'react'
import { InboxOutlined } from '@ant-design/icons';
import { Form, message } from 'antd';


interface props{
    label ?: string;
}

export const ImageUploader = ({label}:props) => {
    return (
        <div className='w-full '>
            <Form.Item label={<p>{label}</p>}>
                <Dragger
                    name='fileUploader'
                    multiple={false}
                    action={"."}
                    onChange={(e) => {

                        if (e.file.status !== 'uploading') {
                            console.log(e.file, e.fileList);
                        }
                        if (e.file.status === 'done') {
                            message.success(`${e.file.name} file uploaded successfully.`);
                        } else if (e.file.status === 'error') {
                            message.error(`${e.file.name} file upload failed.`);
                        }

                    }}
                    onDrop={(e) => {
                        console.log('Dropped files', e.dataTransfer.files);
                    }}

                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                        banned files.
                    </p>
                </Dragger>
            </Form.Item>

        </div >
    )
}
