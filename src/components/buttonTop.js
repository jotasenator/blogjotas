import React, { useState } from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


const ButtonTop = () => {

    let [, setTop] = useState('')//el hook era [top,setTop] pero top no se usa

    const ToTop = () => {
        setTop(
            document.documentElement.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        )
    }

    return (
        <div className='toTop' title='arriba'>
            <ArrowDropUpIcon className='buttonToTop' onClick={ToTop} />
        </div >

    )
}

export default ButtonTop