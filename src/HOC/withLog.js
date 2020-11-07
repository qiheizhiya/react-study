import React from 'react'

export default function withLog(Comp) {
    return class WithLog extends React.Component {
        
        componentDidMount() {
            console.log(`组件${Comp.name}被创建了！${Date.now()}`);
        }
        

        render () {
            return <Comp {...this.props} />
        }
    }
}
