import React from 'react'
import { useSelector } from 'react-redux'
import EmployeeCard from './EmployeeCard'

const EmployeeList = () => {
    const {Employee} = useSelector(state=>state)

  return (
    <div>
        {Employee.map(el=>
            <EmployeeCard key={el.id} Employe = {el} />)}
    </div>
  )
}

export default EmployeeList