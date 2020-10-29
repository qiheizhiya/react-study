import React, { Component } from 'react'
import ThreeLayout from './ThreeLayout'

export default class Test extends Component {
    render() {
        return (
            <div>
                <ThreeLayout leftContent={ <h2>左边的还行</h2>} rightContent={ <h2>右边的也是</h2> }>
                    <h1>中间的牛比</h1>
                </ThreeLayout>
            </div>
        )
    }
}
