import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {

    console.log(box);

    return(
        <div className='center na' >
            <div className='absolute mt2' >
                <img id='inputimage' width='500px' height='auto' src={imageUrl} alt={''}/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div> 
        </div>
    )
}

export default FaceRecognition;

