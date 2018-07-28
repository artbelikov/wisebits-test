import React from 'react'
import './style.scss'
import { connect } from 'react-redux'

class Board extends React.Component{

  render(){
    return (
      <div className="fifteen-board">
        <div className="fifteen-cell" style={{'order': 3}}>1</div>
        <div className="fifteen-cell" style={{'order': 12}}>2</div>
        <div className="fifteen-cell" style={{'order': 5}}>3</div>
        <div className="fifteen-cell" style={{'order': 12}}>4</div>
        <div className="fifteen-cell" style={{'order': 8}}>5</div>
        <div className="fifteen-cell" style={{'order': 12}}>6</div>
        <div className="fifteen-cell" style={{'order': 12}}>7</div>
        <div className="fifteen-cell" style={{'order': 12}}>8</div>
        <div className="fifteen-cell" style={{'order': 0}}>9</div>
        <div className="fifteen-cell" style={{'order': 12}}>10</div>
        <div className="fifteen-cell" style={{'order': 12}}>11</div>
        <div className="fifteen-cell" style={{'order': 12}}>12</div>
        <div className="fifteen-cell" style={{'order': 12}}>13</div>
        <div className="fifteen-cell" style={{'order': 12}}>14</div>
        <div className="fifteen-cell" style={{'order': 11}}>15</div>
        <div className="fifteen-cell fifteen-cell-empty" style={{'order': 12}}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Board)
