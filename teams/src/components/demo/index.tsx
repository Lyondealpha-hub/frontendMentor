import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Form, Select } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface childProps {
  testSubmit: (data: any) => void;
  data: any[];
  schema: any;
}

const Home = ({ testSubmit, data, schema }: childProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <main>
      <div className="flex gap-5 p-5 bg-red-300 rounded-lg ">
        
      </div>
      <br />
      <br />
      <form onSubmit={handleSubmit(testSubmit)}>
        {data.map(({ id, name, fieldSpecs }) =>
          fieldSpecs.field === "input" ? (
            <Controller
              name={name}
              control={control}
              render={({ field }) => {
                return (
                  <>
                    <Form.Item label={name}>
                      <Input placeholder="demo" type="text" {...field}/>
                      {errors.root&&errors.root?.message}
                    </Form.Item>
                    {/* { customError?.message} */}
                  </>
                );
              }}
            />
          ) : fieldSpecs.field === "select" ? (
            <Controller
              name={name}
              control={control}
              render={({ field }) => {
                return (
                  <>
                    <Form.Item label={name}>
                      <Select {...field}>
                        {fieldSpecs.children.map((item: string, id: number) => (
                          <Select.Option value={item}>{item}</Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                    {/* { customError?.message} */}
                  </>
                );
              }}
            />
          ) : (
            ""
          )
        )}
      </form>
    </main>
  );
};

export default Home;
