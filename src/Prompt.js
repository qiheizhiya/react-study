import { withRouter } from 'react-router-dom'
import propTypes from 'prop-types'
import { useEffect } from 'react'
function Prompt(props) {
  useEffect(() => {
    let unBlock = null
    if (props.when) unBlock = props.history.block(props.message)
    else unBlock && unBlock()
    return () => {
      unBlock && unBlock()
    }
  }, [props])
  return null
}

Prompt.defaultProps = {
  when: false,
  message: ''
}
Prompt.propTypes = {
  when: propTypes.bool,
  message: propTypes.string
}
export default withRouter(Prompt)