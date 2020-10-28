import React, { Component } from 'react'
import Modal from './Modal'
export default class Test extends Component {
    state = {
        showModal: false
    }
    showModal = () => {
        this.setState({
            showModal: true
        })
    }
    hideModal = () => {
        this.setState({
            showModal: false
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.showModal ? <Modal onClose={this.hideModal}>
                        <h1>eqwwqeqeqwqqqwqw</h1>
                        <button onClick={this.hideModal}>关闭蒙层</button>
                    </Modal> : null
                }
                <p>
                    <button onClick={this.showModal}>显示蒙层</button>
                </p>
            </div>
        )
    }
}
