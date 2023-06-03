import Notes from './Notes';
import React, { useState } from 'react'
import { Modal, ModalHeader } from "reactstrap"
export const Home = (props) => {
const {showAlert} = props;
const [ modal, setModal ] = useState(false)
    return (
        <div> 
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <Notes showAlert={showAlert}/>
            </div>
        </div>
    )
}
{/* <Modal
            size='lg'
            isOpen={modal}
            toggle={()=>setModal(!modal)}>

                <ModalHeader>
                 toggle={()=>setModal(!modal)} 
                    
                </ModalHeader>
            </Modal>
            <button className='btn btn-primary mx-1 mt-3' style={{backgroundColor:"magenta"}} onClick={()=>setModal(true)}>
                Profile
                </button>  */}