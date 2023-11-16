import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Avatar,
  List,
  Tooltip,
  Select,
  Tabs,
  Popover,
} from "antd";
import { spawn } from "child_process";
import type { SelectProps } from "antd";
import { BellOutlined } from "@ant-design/icons";

type incomingData = {
  id: string;
  title: string;
  img: string;
  description: string;
};

interface content {
  id: string;
  title: string;
  img: string;
  description: string;
}

const options: SelectProps["options"] = [
  {
    id: "0",
    label: "Ahmed",
    value: "Ahmed",
  },
  {
    id: "1",
    label: "Maslan",
    value: "Maslan",
  },
  {
    id: "2",
    label: "Millicent",
    Value: "Millicent",
  },
  {
    id: "3",
    label: "Stone",
    value: "Stone",
  },
  {
    id: "4",
    label: "Oscar",
    value: "Oscar",
  },
  {
    id: "5",
    label: "Jesse",
    value: "Jesse",
  },
  {
    id: "6",
    label: "Emma",
    value: "Emma",
  },
  {
    id: "7",
    label: "Samy",
    value: "Samy",
  },
  {
    id: "8",
    label: "Percy",
    value: "Percy",
  },
];

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

interface props {
  label?: string;
  InputType?: string;
  itemChange?: (e: any) => void;
  isModalOpen: boolean;
  handleCancel: (e: any) => void;
  hide?: (e: any) => void;
  handleOK?: (e: any) => void;
  placeholder?: string;
  disabled?: boolean;
  isMultiple?: boolean;
  isList?: boolean;
  multipleInputs: any[];
  title?: string;
  //  tipTitle: string;
  img?: string;
  description?: string;
  data?: incomingData[];
  content?: content[];
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
  isModalOpen,
  handleCancel,
  hide,
  handleOK,
  img,
  description,
  data,
  content,
}: props) => {
  const [value, setValue] = useState<string | number>();
  const [Open, setOpen] = useState(false);
  const [task, setTask] = useState<any[]>([]);

  // const hide = () => {
  //   setOpen(false);
  // };

  const handleOpenChange = (newOpen: any) => {
    setOpen(newOpen);
  };

  const contentList = (
    <div>
      <p>
        Dev details
        {/* {content} */}
      </p>
    </div>
  );

  return (
    <>
      <Modal
        title={
          <span className="flex flex-col space-y-2">
            <p className="text-slate-700 font-bold text-base">{title}</p>
            <p className="text-slate-500 font-medium text-sm">{description}</p>
          </span>
        }
        open={isModalOpen}
        onOk={handleOK}
        onCancel={handleCancel}
        width={700}
        // okText="Submit"
        okButtonProps={{ style: { backgroundColor: "#427bed" } }}
      >
        <div className="w-full p-10">
          {isList ? (
            <>
              <List
                id={undefined}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <Tooltip title="Click to view details" placement="right">
                    <List.Item className="cursor-pointer hover:bg-gray-200 w-full">
                      <Popover
                        content={
                          <>
                            {contentList}
                            {/* <a onClick={hide}>Close</a> */}
                          </>
                        }
                        title={item.title}
                        trigger="click"
                        onOpenChange={async (e: any) => {
                          item.id && setOpen(true);
                        }}
                        placement="topRight"
                      >
                        <List.Item.Meta
                          className="ml-4"
                          avatar={
                            <Avatar
                              src={item.img}
                              className="rounded-full ring ring-blue-400"
                            />
                          }
                          title={item.title}
                          description={
                            <article className="flex flex-col space-y-2">
                              <p className="text-slate-600 font-semibold">
                                {item.description}
                              </p>
                              <div className="flex flex-row space-x-2">
                                <span className="flex self-start items-center space-x-2 rounded-xl bg-stone-100 px-2 cursor-pointer hover:bg-stone-200 ">
                                  <p className="rounded-full animate-ping bg-red-500 w-1 h-1"></p>
                                  <p className="text-blue-500 font-bold text-sm pr-1">
                                    Jesse
                                  </p>
                                </span>
                                <div className="flex">
                                  <BellOutlined className="font-bold text-red-500 text-base" />
                                  <p className="text-gray-600 font-medium">{task.length}</p>
                                </div>
                              </div>
                            </article>
                          }
                        />
                      </Popover>
                    </List.Item>
                  </Tooltip>
                )}
              />
            </>
          ) : (
            <>
              <div className="space-y-3">
                {isMultiple ? (
                  <>
                    {multipleInputs?.map(
                      ({
                        id,
                        inputType,
                        label,
                        placeholder,
                        name,
                        disabled,
                      }) => {
                        return (
                          <>
                            {id === 0 ? (
                              <>
                                <Form.Item
                                  className="justify-center my-1"
                                  label={<p>{label}</p>}
                                >
                                  <Input
                                    size={"middle"}
                                    type={InputType}
                                    style={{ width: "60%" }}
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
                              </>
                            ) : (
                              <>
                                <Form.Item
                                  className="justify-center my-1"
                                  label={<p>{label}</p>}
                                >
                                  <Select
                                    mode="multiple"
                                    allowClear
                                    style={{ width: "60%" }}
                                    placeholder="select assignee"
                                    onChange={handleChange}
                                    options={options}
                                  />
                                </Form.Item>
                              </>
                            )}
                          </>
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
