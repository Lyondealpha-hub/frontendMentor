import React from 'react';
import { Input } from 'antd';

const addSubItem = () => {

}

const InputTemplate: React.FC = () => (
  <Input
    onClick={addSubItem}
    placeholder="+ Add tasks"
    style={{
    width: '150%',
      color: 'blue', // sets the text color to blue
      padding: '10px', // sets the padding to 10px
      // add more styles as needed
    }}
  />
);

export default InputTemplate;