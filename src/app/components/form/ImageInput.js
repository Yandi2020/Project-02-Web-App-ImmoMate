import React, { useState } from 'react'
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import { useFormikContext, ErrorMessage } from 'formik'

const ImageInput = () => {
    const { setFieldValue } = useFormikContext();
    const [error, setError] = useState(null);
    
    const changeHandler = (e) => {
        const files = e.target.files;
        const preview = document.querySelector('.App .post-listing .images-upload .preview');

        const previewImage = (file) => {
            const reader = new FileReader();

            reader.addEventListener('load', () => {
                let image = new Image();
                image.title = file.name; 
                image.src = reader.result; 
                preview.appendChild(image);
            })

            reader.readAsDataURL(file);
        }

        if(files.length > 10) {
            setError('Please select max. 10 images')
            e.preventDefault();
        }

        //when files is object not array, then we do as follow: 
        if(files.length <= 10) {
            preview.innerHTML = '';
            [].forEach.call(files, previewImage);
            setError(null);
            setFieldValue('images', files);
        }
    }
    
    return (
        <div className='images-upload'>
            <div className='container'>
                <PhotoSizeSelectActualOutlinedIcon className='icon' />
                <label htmlFor='images'>Upload Images: </label>
                <input type='file' name='images' accept='image/*' multiple onChange={changeHandler}  />
            </div>
            
            { error && <div className='error'>{ error }</div> }
            
            <ErrorMessage name='images'>
                { msg => <div className='images-error'>{msg}</div> }
            </ErrorMessage>

            <div className='preview'></div>
        </div>
    )
}

export default ImageInput;

