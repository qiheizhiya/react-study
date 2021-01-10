import React from 'react'
import { connect, history } from 'umi'

function privateRouter(props) {
    if (props.loginId) {
        return props.children
    } else {
        props.onNotLogin && props.onNotLogin()
        return null
    }
}

const mapStateToProps = (state) => ({
    loginId: state.loginUser
})

const mapDispatchToProps = dispatch => ({
    onNotLogin () {
        history.push('/login')
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(privateRouter)