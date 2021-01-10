import { connect, history } from "umi"
import LoginForm from "../LoginForm"
const mapDispatchToProps = dispatch => ({
    async onLogin(loginId, loginPwd) {
        const result = await dispatch({ type: "loginUser/login", payload: { loginId, loginPwd } })
        if(result){
            history.push("/")
        }
        else{
            window.alert("账号/密码错误");
        }
    }
})

export default connect(null, mapDispatchToProps)(LoginForm)