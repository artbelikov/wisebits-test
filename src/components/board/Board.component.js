import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { restart, swapChip} from 'actions'
import Chip from 'components/chip/Chip.component.js'

class Board extends React.Component{

  chipClick(index){
    let { space, swapChip} = this.props
    swapChip(index, space)
  }

  componentDidMount() {
    !this.props.order && this.props.restart()
  }

  render(){
    let { order = [] } = this.props
    return (
      <div className="fifteen-board">
        {order.map((value, index) => <Chip click={() => this.chipClick(index)} value={value}/>)}
      </div>
    )
  }
}

const mapStateToProps = ({state}) => {
  return {
    order: state.order,
    space: state.space
  }
};

const mapDispatchToProps = {
  restart,
  swapChip
};

export default connect(mapStateToProps, mapDispatchToProps)(Board)
