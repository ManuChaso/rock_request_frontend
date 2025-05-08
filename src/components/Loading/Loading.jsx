import './Loading.css';

import loadingGif from '../../assets/icons/loading.gif';

export default function Loading(){

    return(
        <div className='loading-container'>
            <img className='loading-icon' src={loadingGif} alt="loading icon"/>
        </div>
    )
}