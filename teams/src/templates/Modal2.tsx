import React, { useState } from "react";
import { Button, Modal, Form, Input, Avatar, List, Tooltip } from "antd";

const data = [
  {id:'0',
    title: '',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${1}`,
  description: ''  },
  {id:'1',
    title: '',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${2}`,
    description: '' },
  {id:'2',
    title: '',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${3}`,
    description: '' },
  {id:'3',
    title: '',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${4}`,
    description: '' },
];

interface props {
  label?: string;
  InputType?: string;
  itemChange?: (e: any) => void;
  placeholder?: string;
  disabled?: boolean;
  isMultiple?: boolean;
  isList?: boolean;
  multipleInputs?: any[];
   title?: string;
  //  tipTitle: string;
   img?: string;
   description?: string;
}

const App: React.FC = ({
  label,
  InputType,
  placeholder,
  disabled = false,
  itemChange,
  isMultiple = false,
  multipleInputs,
  isList = true,
  title,
  // tipTitle,
  img,
  description
}: props) => {
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
      <Button
        type="primary"
        onClick={showModal}
        className="bg-blue-500 text-white font-md"
      >
        Open Modal
      </Button>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        // okText="Submit"
        okButtonProps={{ style: { backgroundColor: "#427bed" } }}
      >
        <div className="w-full">
          {isList ? (
            <>
              <List
                id={data[0].id}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Tooltip title='Your name'>                      
                          <Avatar
                          src={item.img}
                        />
                        </Tooltip>
                      }
                      title={item.title}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </>
          ) : (
            <>
              <Form.Item className="justify-center my-1" label={<p>{label}</p>}>
                <div className="space-y-3">
                  {isMultiple ? (
                    <>
                      {multipleInputs?.map(
                        ({ id, inputType, placeholder, disabled }) => {
                          return (
                              <Input
                                size={"middle"}
                                type={InputType}
                                placeholder={placeholder}
                                disabled={disabled}
                                value={placeholder}
                                onChange={(e: any) => {
                                  const inputValue = e.target.value;
                                  setValue(inputValue);
                                  itemChange && itemChange(inputValue);
                                }}
                              />
                          );
                        }
                      )}
                    </>
                  ) : (
                      <Input
                        size={"middle"}
                        type={InputType}
                        placeholder={placeholder}
                        disabled={disabled}
                        value={placeholder}
                        onChange={(e: any) => {
                          const inputValue = e.target.value;
                          setValue(inputValue);
                          itemChange && itemChange(inputValue);
                        }}
                      />
                  )}
                </div>
              </Form.Item>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default App;