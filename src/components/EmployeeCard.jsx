import React from 'react'
import { useDispatch } from 'react-redux'
import { del } from '../redux/action'
import EditEmployee from './EditEmployee'
import { RiCloseCircleLine } from 'react-icons/ri';


const EmployeeCard = ({Employe}) => {
    const dispatch = useDispatch()
  return (
    <div className='App-row'>
        <div>{Employe.name}</div>
        <div>{Employe.dateOfBirth}</div>
        <div>{Employe.phone}</div>
        <div>{Employe.fonction}</div>
        <EditEmployee Employe = {Employe}/>
        <div className='icons'>
            <RiCloseCircleLine
            onClick={()=>dispatch(del(Employe.id))}
            className='delete-icon' />
        </div>
        
    </div>
  )
}

export default EmployeeCard