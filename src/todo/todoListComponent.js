import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd'
import todoService from './todoService'
function TodoList() {
    const dispatch = useDispatch();
    //  const { list } = useSelector((state) => state.todoReducer)
    const { list } = useSelector((state) => state.todo);
    const columns = [

        {
            title: "Todo",
            dataIndex: 'todo',
            key: 'todo'
        },
        {
            title: "Action",
            dataIndex: 'action',
            key: 'action',
            render: (key, val) => {
                return (
                    <a onClick={() => handleDelete(val)}>Done</a>
                )
            }
        },
    ];

    useEffect(() => {
        console.log("Fetch List")
        todoService.list(dispatch)
    }, [dispatch])
    const handleDelete = (val) => {
        todoService.delete(dispatch, val.id)
    }

    return (
        <Table
            dataSource={list}
            columns={columns}
            rowKey="id"
        >

        </Table>
    );
}

export default TodoList;