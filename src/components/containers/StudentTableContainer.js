import { connect } from "umi"
import StudentTable from "../StudentTable"

const mapStateToProps = state => {
    return {
        stus: state.students.result.datas,
        total: state.students.result.total,
        current: state.students.condition.page,
        limit: state.students.condition.limit,
        isLoading: state.loading.effects["students/fetchStudent"]
    }
}

const mapDispatchToProps = dispatch => ({
    onPageChange(newPage) {
        dispatch({
            type: 'students/setCondition',
            payload: {
                page: newPage
            }
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentTable)