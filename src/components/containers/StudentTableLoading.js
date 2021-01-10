import { connect } from "umi"
import Loading from "../Loading"
const mapStateToProps = state => {
    console.log(state)
    return {
        show: state.loading.effects["students/fetchStudent"]
    }
}
export default connect(mapStateToProps)(Loading)