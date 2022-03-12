import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { add } from '../redux/action';
import makeid from '../redux/id';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
 
const AddEmployee = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [fonction, setFonction] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: makeid(5),
      name,
      dateOfBirth,
      phone,
      fonction
    }
    dispatch(add(newEmployee));
    setName();
    setDateOfBirth();
    setPhone();
    setFonction();
    closeModal();
  }

  return (
    <div>
        <button className='App-button' onClick={openModal}>Add</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <div className='App-container'>
        <div>Add an Employee</div>
        <form className='App-form' onSubmit={handelSubmit}>
            <p type="Name:">
              <input
                type="text"
                className="App-input"
                placeholder="Enter the name of the Employee"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p type="Date of birth:">
              <input
                type="Date"
                className="App-input"
                placeholder="Enter the Date of birth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </p>
            <p type="Phone:">
              <input
                type="text"
                className="App-input"
                placeholder="Enter Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </p>
            <p type="Function:">
              <input
                type="text"
                className="App-input"
                placeholder="Enter the function"
                value={fonction}
                onChange={(e) => setFonction(e.target.value)}
              />
            </p>
            <button className='App-button' type="submit">Save</button>
            <button className='App-button' onClick={closeModal}>close</button>
        </form>
        </div>
      </Modal>
     
    </div>
  )
}

export default AddEmployee