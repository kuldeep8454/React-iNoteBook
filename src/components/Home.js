import Notes from './Notes';
import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from "reactstrap"

import AddNote from './AddNote';
export const Home = (props) => {
const {showAlert} = props;
const [ modal, setModal ] = useState(false)
    return (
        <div className="home-container bg-image" > 
        <div>
        <h1 style={{color:"magenta"}}>iNoteBook</h1>
        <div style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Welcome to iNoteBook</h3>
        <h3>Your Notes is secour on the cloud</h3>
        </div>
        </div>
            <Modal
            size='lg'
            isOpen={modal}
            toggle={()=>setModal(!modal)}>

                <ModalHeader toggle={()=>setModal(!modal)}>
                  
                    
                </ModalHeader>
                <ModalBody>
                    <form>
                    <AddNote showAlert={showAlert} />
                    </form>
                
                </ModalBody>
            </Modal>
            <button className='btn btn-primary mx-1 mt-3' style={{backgroundColor:"magenta"}} onClick={()=>setModal(true)}>
                Create Note
                </button>  
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <Notes showAlert={showAlert}/>
            </div>
        </div>
    )
}
 