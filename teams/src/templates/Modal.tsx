import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

interface props {
    label?: string
    InputType?: string,
    itemChange?: (e: any) => void
    placeholder?: string
    disabled?: boolean
}

const App: React.FC = ({ label, InputType, placeholder, disabled = true, itemChange }: props) => {
  const [value, setValue] = useState<string | number>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <Button type="primary" onClick={showModal} className='bg-blue-500 text-white font-md'>
        Open Modal
      </Button>
      <Modal title="Modal Name" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className='w-full'>
            <Form.Item className='justify-center my-1' label={<p>{label}</p>}>
                <div className='space-y-3'>
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
                </div>
            </Form.Item>



        </div>
      </Modal>
    </>
  );
};

export default App;