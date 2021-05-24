import React, { useEffect, useState } from 'react';
import {
  DatePicker,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  List,
  message,
} from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  getShift,
  createShift,
  getNextShift,
} from '../../../redux/action/shift';
import { CalendarWrapper, ModalWrapper } from './styles';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const { WeekPicker } = DatePicker;

const shiftList = {
  ca_1: 'Shift 1',
  ca_2: 'Shift 2',
  ca_3: 'Shift 3',
};

const Calendar = () => {
  let ca1 = {
    name: 'Shift 1',
  };

  let ca2 = {
    name: 'Shift 2',
  };

  let ca3 = {
    name: 'Shift 3',
  };

  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const currentWeekData = useSelector((state) => state.shift.currentWeekData);
  const nextWeekData = useSelector((state) => state.shift.nextWeekData);
  const t2 = moment(date).startOf('week').toISOString();

  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mon',
      dataIndex: t2,
      key: '1',
    },
    {
      title: 'Tue',
      dataIndex: moment(t2).add(1, 'days').toISOString(),
      key: '2',
    },
    {
      title: 'Wed',
      dataIndex: moment(t2).add(2, 'days').toISOString(),
      key: '3',
    },
    {
      title: 'Thu',
      dataIndex: moment(t2).add(3, 'days').toISOString(),
      key: '4',
    },
    {
      title: 'Fri',
      dataIndex: moment(t2).add(4, 'days').toISOString(),
      key: '5',
    },
    {
      title: 'Sat',
      dataIndex: moment(t2).add(5, 'days').toISOString(),
      key: '6',
    },
    {
      title: 'Sun',
      dataIndex: moment(t2).add(6, 'days').toISOString(),
      key: '7',
    },
  ];

  currentWeekData?.map((data) => {
    if (data.name === 'ca_1') {
      ca1[`${data.date}`] = 'x';
    }
    if (data.name === 'ca_2') {
      ca2[`${data.date}`] = 'x';
    }
    if (data.name === 'ca_3') {
      ca3[`${data.date}`] = 'x';
    }
  });

  let calendar = [ca1, ca2, ca3];

  const showModal = () => {
    setIsModalVisible(true);
    dispatch(
      getNextShift({
        startAt: moment(hihi3).startOf('week').toISOString(),
        endAt: moment(hihi3).endOf('week').toISOString(),
      })
    );
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onChange = (date, dateString) => {
    if (date) {
      setDate(date);
    } else {
      setDate('');
    }
  };
  const onFinish = (values: any) => {
    if (values)
      dispatch(
        createShift({
          name: values.name,
          date: moment(values.date['_d']).startOf('date').toISOString(),
        })
      ).then(() => {
        setIsModalVisible(false);
        message.info('This is a normal message');
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const hihi2 = moment().add(14, 'days').startOf('week');
  const hihi3 = moment().add(7, 'days').startOf('week');

  useEffect(() => {
    dispatch(
      getShift({
        startAt: moment(date || new Date())
          .startOf('week')
          .toISOString(),
        endAt: moment(date || new Date())
          .endOf('week')
          .toISOString(),
      })
    );
  }, [date]);
  const disabledDate = (current) => {
    return (
      (current && current < moment().endOf('week')) ||
      current > moment(hihi2).startOf('week')
    );
  };

  const disableWeek = (current) => {
    return current > moment(hihi3).startOf('week');
  };

  const handleDelete = () => {
    message.info('This is a normal message');
  }

  return (
    <CalendarWrapper>
      <ModalWrapper
        title="Add a new shift"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          // name="Add a new shift"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <div className="input-section">
            <Form.Item
              label="Choose a date"
              name="date"
              rules={[{ required: true, message: 'Please choose a date!' }]}
            >
              <DatePicker
                onChange={onChange}
                placeholder="Select date"
                disabledDate={disabledDate}
              />
            </Form.Item>
            <Form.Item
              label="Select a shift"
              name="name"
              rules={[{ required: true, message: 'Please select a shift!' }]}
            >
              <Select defaultValue="ca_1">
                <Select.Option value="ca_1">Ca 1</Select.Option>
                <Select.Option value="ca_2">Ca 2</Select.Option>
                <Select.Option value="ca_3">Ca 3</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              <PlusOutlined />
              Add
            </Button>
          </Form.Item>
        </Form>
        <div className="history-section">
          <h3>History</h3>
          <List
            bordered
            dataSource={nextWeekData}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button onClick={handleDelete}>
                    <DeleteOutlined />
                  </Button>,
                ]}
              >
                <div>
                  You have create {shiftList[`${item.name}`]} on{' '}
                  {moment(item.date).format('MMMM Do YYYY')}
                </div>
              </List.Item>
            )}
          />
        </div>
      </ModalWrapper>
      <div className="header-section">
        <DatePicker
          defaultValue={moment()}
          onChange={onChange}
          picker="week"
          format="[Tuần] ww-yyyy"
          disabledDate={disableWeek}
        />
        <h3>Your shift calendar</h3>
        <Button onClick={showModal}>Create New Shift</Button>
      </div>
      <div className="table-section">
        <Table columns={columns} dataSource={calendar} pagination={false} />
      </div>
      <p>Total shift: {currentWeekData?.length}</p>
    </CalendarWrapper>
  );
};

export default Calendar;
