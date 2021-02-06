import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {

    return(
        <div className='center na' >
            <div className='absolute mt2' >
                <img id='inputimage' width='500px' height='auto' src={imageUrl} alt={''}/>
                <div className='bounding-box' ></div>
            </div> 
        </div>
    )
}

export default FaceRecognition;