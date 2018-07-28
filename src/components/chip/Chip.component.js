import React from 'react'
import './style.scss'

const Chip = ({value, click}) => {
  let classes = `fifteen-chip ${!value ? 'fifteen-chip-empty' : ''}`
  return (
    <div onClick={click} className={classes}>{value}</div>
  )
}

export default Chip
