import { PureComponent } from 'react'
import { withRouter } from "react-router-dom"
class ClassPrompt extends PureComponent {

  static defaultProps = {
    when: false,
    message: ''
  }

  componentDidMount() {
    this.handleBlock();
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleBlock();
  }

  componentWillUnmount() {
    this.unBlock && this.unBlock()
  }


  handleBlock() {
    if (this.props.when) this.unBlock = this.props.history.block(this.props.message)
    else this.unBlock && this.unBlock()
  }

  render() {
    return null
  }
}

export default withRouter(ClassPrompt)