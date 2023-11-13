import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const Datepicker: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
    {/* <RangePicker showTime /> */}
   
  </Space>
);

export default Datepicker;