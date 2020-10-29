import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        loginId: '',
        loginPwd: '',
        sex: 'male',
        chooseLoves: ['movie'],
        city: 'shanghai',
        loves: [
            { value: 'football', text: '足球' },
            { value: 'basketball', text: '篮球' },
            { value: 'movie', text: '电影' },
            { value: 'music', text: '音乐' },
            { value: 'other', text: '其他' }
        ]
    }
    handleChange = (e) => {
        let { value, name } = e.target
        if (e.target.type === 'checkbox') {
            if (e.target.checked) {
                value = [...this.state.chooseLoves, value]
            } else {
                value = this.state.chooseLoves.filter(item => item !== value)
            }
        }
        this.setState({ [name]: value })
    }
    render() {
        const checkboxes = this.state.loves.map(item => (
            <label key={item.value}>
                <input type="checkbox" name="chooseLoves" checked={this.state.chooseLoves.includes(item.value)} value={item.value} onChange={this.handleChange}  />
                {item.text}
            </label>
        ))
        return (
            <div>
                <p>
                    账号：<input type="text" value={this.state.loginId} name='loginId' onChange={this.handleChange} />
                </p>
                <p>
                    密码：<input type="password" name="loginPwd" value={this.state.loginPwd} onChange={this.handleChange} />
                </p>
                <p>
                    性别：
                    <label>
                        <input type="radio" name="sex" value='male' checked={this.state.sex === 'male'} onChange={this.handleChange} /> 男
                    </label>
                    <label>
                        <input type="radio" name="sex" value='female' checked={this.state.sex === 'female'} onChange={this.handleChange} /> 女
                    </label>
                </p>
                <p>
                    <select name="city" value={this.state.city} onChange={this.handleChange}>
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="guangzhou">广州</option>
                    </select>
                </p>
                <p>
                    {checkboxes}
                </p>
                <p>
                    <button onClick={() => {
                        console.log(this.state);
                    }}>查看状态</button>
                </p>
            </div>
        )
    }
}
