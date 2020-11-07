import React, { Component } from 'react'

export default class Comps extends Component {

    constructor(props) {
        super(props)
        // this.txt = React.createRef()
        // console.log(this.txt);
    }
    
    componentDidMount() {
        console.log(this.txt);
    }
    
    getRef = (ref) => {
        this.txt = ref
        console.log('11111');
    }

    clickHandle = () => {
        // this.txt.current.focus()
        this.txt.focus()
        this.setState({})
    }
    
    render() {
        return (
            <div>
                <input ref={this.getRef} type="text"/>
                <button onClick={this.clickHandle}>聚焦</button>
            </div>
        )
    }
}
