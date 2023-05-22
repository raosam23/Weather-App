import React from 'react'

import './Spinner.css'
import InfinitySpinner from '../../images/InfinitySpinner.gif'

export default function Spinner() {
  return (
    <div><img className='spinner' src={InfinitySpinner} alt=""/></div>
  )
}
