import { useState } from 'react';
import './Post.css'

const CustomButton = (props) => {
    const [buttonClass, setButtonClass] = useState('inactive');

    function handleClick(){
        if(buttonClass === 'inactive'){
            setButtonClass('active1');
        }
        else if(buttonClass === 'active1'){
            setButtonClass('active2');
        }
        else{
            setButtonClass('inactive');
        }

    }
        return(
            <div>
                <button className={buttonClass} onClick={handleClick}>{props.message}</button>
            </div>
        )
}

export default CustomButton