import React from 'react';
import { Form, Input, Select, Button, useForm, message } from 'antd';
import { useDispatch } from 'react-redux';
import todoService from './todoService';
import { formatTimeStr } from 'antd/lib/statistic/utils';
import FormItem from 'antd/lib/form/FormItem';
function TodoAdd() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        todoService.add(dispatch, values).then(res => {
            console.log(res)

            form.resetFields()
        })
    }

    return (
        <div className="add-frm">
            <Form
                form={form}
                layout="inline"
                onFinish={onFinish}
            >
                <FormItem
                    name="todo"
                    placeholder="Enter todo"
                    rules={[{ required: true, message: "please enter todo" }]}
                >
                    <input type="text" />
                </FormItem>
                <FormItem >
                    <button className="btn btn-primary" >Submit</button>
                </FormItem>

            </Form>
        </div>
    );

}
export default TodoAdd;