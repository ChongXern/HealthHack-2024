import React, {useState} from 'react';
import '../styles/UploadPage.css'
import NavBar from './NavBar';
//import { useNavigate } from 'react-router-dom';

const UploadPage = () =>{
    //const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const timestamp = new Date().toISOString();
        // API request to backend
        // send title, image, text, op info, timestamp to backend
        //console.log('Hello World');
        //console.log('Submitting post')
        console.log({
            title, image, text, timestamp
            // user info obtained from auth system
            // timestamp generated on client
        });
        //navigate('/home')
        setTitle('');
        setImage(null);
        setText('');
    };
    console.log('Hello World');
    return (
        <div className='upload-container'>
            <NavBar />
            <h1> Ask a medical Question! </h1>
            <form className='upload-form' onSubmit={handleSubmit}>
                <label className='label'>
                    <b>Title:</b>
                    <input type='text' className='input' value={title} onChange={handleTitleChange}/>
                </label>
                <br/>
                <label>
                    <b>Image: </b>
                    <input type='file' className='text' accept='image/' onChange={handleImageChange}/>
                </label>
                <br/>
                <label>
                    <b>Input text:</b>
                    <textarea value={text} className='textarea' onChange={handleTextChange} />
                </label>
                <br/>
                <button type='submit' className='button'> Post! </button>
            </form>
        </div>
    );
};

export default UploadPage;