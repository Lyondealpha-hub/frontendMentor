import React, { useState } from "react";
import { Button, Modal, Form, Input, Avatar, List, Tooltip } from "antd";

const data = [
  {
    id: '0',
    title: '',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${1}`,
    description: ''
  },
  {
    id: '1',
    title: '',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${2}`,
    description: ''
  },
  {
    id: '2',
    title: '',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${3}`,
    description: ''
  },
  {
    id: '3',
    title: '',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${4}`,
    description: ''
  },
];

interface props {
  label?: string;
  InputType?: string;
  itemChange?: (e: any) => void;
  isModalOpen: boolean;
  handleCancel: (e: any) => void;
  handleOK?: (e: any) => void;
  placeholder?: string;
  disabled?: boolean;
  isMultiple?: boolean;
  isList?: boolean;
  multipleInputs : any[];
  title?: string;
  //  tipTitle: string;
  img?: string;
  description?: string;
}

const Modalx = ({
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
  isModalOpen,
  handleCancel,
  handleOK,
  img,
  description
}: props) => {
  const [value, setValue] = useState<string | number>();
  // const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>

      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOK}
        onCancel={handleCancel}
        // okText="Submit"
        okButtonProps={{ style: { backgroundColor: "#427bed" } }}
      >
        <div className="w-full p-10">
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

              <div className="space-y-3">
                {isMultiple ? (
                  <>
                    {multipleInputs?.map(
                      ({ id, inputType, label, placeholder, disabled }) => {
                        return (
                          <Form.Item  className="justify-center my-1" label={<p>{label}</p>}>
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
                          </Form.Item>
                        );
                      }
                    )}
                  </>
                ) : (
                  <Form.Item>
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
                  </Form.Item>
                )}
              </div>

            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Modalx;