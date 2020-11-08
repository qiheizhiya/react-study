import React from 'react'

export default function withLog(Comp) {
    class WithLog extends React.Component {
        
        componentDidMount() {
            console.log(`组件${Comp.name}被创建了！${Date.now()}`);
        }
        
        render () {
            const { forwardRef, ...reset } = this.props

            return <Comp ref={forwardRef} {...reset} />
        }
    }
    return React.forwardRef((props, ref) => {
       return <WithLog forwardRef={ref} {...props} />
    })
}
