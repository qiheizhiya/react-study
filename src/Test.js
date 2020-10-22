import React, { Component } from 'react'

import Page from './Page'

import StudList from './studList'

import Model from './model'
export default class Test extends Component {
    state = {
        total: 99,
        limit: 10,
        current: 1,
        pageNumber: 5,
        studentList: [],
        isLoading: false
    }
    constructor (props) {
        super(props)
        this.getAllStud()
    }
    toPage = current => {
        this.setState({ current })
        this.getAllStud()
    }
    async getAllStud () {
        this.setState({isLoading: true})
        const stud = await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=aaa953136447_1581225655877&page=${this.state.current}&size=${this.state.limit}`).then(res => res.json())
        this.setState({
            total: stud.data.cont,
            studentList: stud.data.findByPage,
            isLoading: false
        })
    }
    render() {
        return (
            <div>
                <StudList stu={this.state.studentList} />
                <Page {...this.state} toPage={this.toPage} />
                <Model show={this.state.isLoading} />
            </div>
        )
    }
}
