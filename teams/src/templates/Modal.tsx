import React, { useState } from "react";
import { Button, Modal, Form, Input, Avatar, List } from "antd";

const data = [
  {id:'0',
    title: 'Ant Design Title 1',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${1}`  },
  {id:'1',
    title: 'Ant Design Title 2',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${1}`
  },
  {id:'2',
    title: 'Ant Design Title 3',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${1}`
  },
  {id:'3',
    title: 'Ant Design Title 4',
    img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${1}`
  },
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

  // const [title, setTitle] = useState('');

  // useEffect(() => {
  //   document.title = title;
  // }, [title]);

  // function handleClick() {
  //   setTitle('New Title');
  // }

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
        title="Modal Title"
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
                        <Avatar
                          src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                        />
                      }
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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
