import { connect } from "umi"
import Pager from "../Pager"

const mapStateToProps = state => ({
    current: state.students.condition.page,
    total: state.students.result.total,
    limit: state.students.condition.limit,
    panelNumber: 5
})

const mapDispatchToProps = dispatch => ({
    onPageChange(newPage) {
        //重新设置条件
        dispatch({
            type: "students/changeCondition",
            payload: {
                page: newPage
            }
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Pager);