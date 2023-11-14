import React from 'react';
import { Input } from 'antd';

const addSubItem = () => {

}

const InputTemplate: React.FC = () => (
  <Input
    onClick={addSubItem}
    placeholder="+ Add tasks"
    style={{
      width: 200,
      color: 'blue',
      padding: '10px',

    }}
  />
);

export default InputTemplate;