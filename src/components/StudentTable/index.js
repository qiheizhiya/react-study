import React, { useState } from 'react'
import styles from "./index.css"
import { history } from "umi"
import { Table, Button } from 'antd'
// export default function StudentTable(props) {
//     const trs = props.stus.map(s => <tr key={s.id}>
//         <td>{s.sNo}</td>
//         <td>{s.name}</td>
//         <td>{s.sex === 1 ? "女" : "男"}</td>
//         <td>{s.birth}</td>
//         <td>{s.email}</td>
//         <td>
//             <Link to={`/student/${s.sNo}`}>详情</Link>
//         </td>
//     </tr>)
//     return (
//         <table className={styles.tab}>
//             <thead>
//                 <tr>
//                     <th>学号</th>
//                     <th>姓名</th>
//                     <th>性别</th>
//                     <th>出生年份</th>
//                     <th>邮箱</th>
//                     <th>操作</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {trs}
//             </tbody>
//         </table>
//     )
// }
export default function StudentTable(props) {
    const columns = [
        {
            title: '学号',
            dataIndex: 'sNo'
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '性别',
            dataIndex: 'sex',
            render: sex => sex === 0 ? '男' : '女'
        },
        {
            title: '出生年份',
            dataIndex: 'birth'
        },
        {
            title: '邮箱',
            dataIndex: 'email'
        },
        {
            title: '操作',
            dataIndex: 'id',
            render(id) {
                return <Button type="link" onClick={() => {
                    history.push(`/student/${id}`)
                }} >详情</Button>
            }
        }
    ]
    return (
        <Table columns={columns} pagination={{
            total: props.total,
            defaultCurrent: props.current,
            pageSize: props.limit,
            onChange (page) {
                props.onPageChange && props.onPageChange(page)
            }
        }} rowKey='id' loading={props.isLoading} dataSource={props.stus}/>
    )
}