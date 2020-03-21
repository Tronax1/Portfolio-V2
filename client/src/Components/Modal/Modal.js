import React from 'react'
import '../../Styles/Modal.scss'

export default function Modal({show, toggleShow}) {
    if(show){
        return (
            <>
            <div className = "Modal-bg"/>
                <div className="Modal-Content">
                    <span onClick={() => toggleShow(false)}>
                        <i className="fas fa-times">
                            </i>
                    </span>

                </div>
            </>
        )
    }
    else{
        return null;
    }
}
