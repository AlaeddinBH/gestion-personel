import React, { useState } from 'react'
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch } from 'react-redux';
import { edit } from '../redux/action';
import { TiEdit } from "react-icons/ti";

const EditEmployee = ({Employe}) => {
    const [name, setName] = useState(Employe.name);
    const [dateOfBirth, setDateOfBirth] = useState(Employe.dateOfBirth);
    const [phone, setPhone] = useState(Employe.phone);
    const [fonction, setFonction] = useState(Employe.fonction);
    const dispatch = useDispatch()
    const handelSubmit = (e) => {
        e.preventDefault();
        const editedOne = {
          id: Employe.id,
          name,
          dateOfBirth,
          phone,
          fonction
        };
        dispatch(edit(editedOne));
        setName();
        setDateOfBirth();
        setPhone();
        setFonction();
        closeModal();
      };
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
      
      const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
        <div className='icons' >
        <TiEdit onClick={openModal} className="edit-icon" />
        </div>
        
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <form onSubmit={handelSubmit}>
            <p type="Name:">
              <input
                type="text"
                className="formEntry"
                placeholder={Employe.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p type="Date of birth:">
              <input
                type="Date"
                className="formEntry"
                placeholder={Employe.dateOfBirth}
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </p>
            <p type="Phone:">
              <input
                type="text"
                className="formEntry"
                placeholder={Employe.phone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </p>
            <p type="Function:">
              <input
                type="text"
                className="formEntry"
                placeholder={Employe.fonction}
                value={fonction}
                onChange={(e) => setFonction(e.target.value)}
              />
            </p>
            <button type="submit">Confirm</button>
            <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  )
}

export default EditEmployee