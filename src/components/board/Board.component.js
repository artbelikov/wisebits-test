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

  isWin(){
    let { order = [] } = this.props
    return order.toString() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0'
  }

  render(){
    let { order = [] } = this.props
    let classes = `fifteen-board ${this.isWin() ? 'fifteen-board-win' : ''}`
    return (
      <div>
        <div className={classes}>
          {order.map((value, index) => <Chip click={() => this.chipClick(index)} value={value}/>)}
        </div>
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
