import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Note Added Successfully","success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    const containerStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
      };
    
      const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
      };
    
      const buttonStyle = {
        backgroundColor: '#007bff',
        width: '100%',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      };
      const buttonHoverStyle = {
        backgroundColor: 'magenta',
      };
    
    return (
        <div className="container my-3 " style={containerStyle}>
            <h2 className='text text-info'>Create Notes</h2>
            <p className='text text-dark'>Add Notes with your info / notes</p>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" placeholder='Title*' className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} style={inputStyle} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text"placeholder='Description*' className="form-control" id="description" name="description" value={note.description} onChange={onChange} style={inputStyle} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label  htmlFor="tag" className="form-label text-info">#Tag</label>
                    <input type="text" placeholder='Tag*' className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} style={inputStyle} minLength={5} required />
                </div>
               
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick} 
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = buttonStyle.backgroundColor;
                }}
                >Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
