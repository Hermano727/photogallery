import React from 'react'
import { useState } from 'react'

const UploadForm = () => {
    const [file, setFile] = useState(null);
    // error state
    const [error, setError] = useState(null);

    const allowedTypes = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {        
        // Upload target (file) 
        let selected = e.target.files[0]
        
        // check if we have file, ensure it is png/jpg
        if (selected && allowedTypes.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            // Error! Invalid photo
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    return (
        <form>
            <input type="file" onChange = {changeHandler}/>
            <div className="output">
                { error && <div className="error">{error} </div>}
                { file && <div>{file.name} </div>}
            </div>
        </form>
    )
}

export default UploadForm;