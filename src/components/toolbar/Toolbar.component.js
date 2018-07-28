import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { restart, cheat} from 'actions'

class Toolbar extends React.Component {
  render() {
    return (
      <div className="fifteen-board-toolbar">
        <button className="fifteen-board-button" onClick={this.props.restart}>Restart</button>
        <button className="fifteen-board-button" onClick={this.props.cheat}>Cheat</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  restart,
  cheat
};

export default connect(null, mapDispatchToProps)(Toolbar)
