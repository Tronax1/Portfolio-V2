import React from 'react'
import Technologies from './Technologies'
import Underline from './Underline'

import '../../Styles/Modal.scss'

interface ModalProps {
    show: boolean,
    toggleShow: (state: boolean) => void,
    modalTitle: string,
    modalDesc: string,
    modalTech: Array<string>
}

const Modal: React.FC<ModalProps> = ({show, toggleShow, modalTitle, modalDesc, modalTech}) => {
    const displayTechnologies = () => {
        return modalTech.map((item, i) => (
            <Technologies key={i} technology={item} />
        ))
    }
    if(show){
        return (
            <>
            <div className = "Modal-bg"/>
                <div className="Modal-Content">
                    <section className = "Modal-Header">
                        <span onClick={() => toggleShow(false)}>
                            <i className="fas fa-times">
                            </i>
                        </span>
                    </section>
                    <section className = "Modal-Body">
                        <h1>{modalTitle}</h1>
                            <Underline />
                        <p>
                           {modalDesc}
                        </p>
                        <h3>Technologies</h3>
                            <Underline />
                        <div className = "Technologies">
                            {displayTechnologies()}
                        </div>
                    </section>
                </div>
            </>
        )
    }
    else{
        return null;
    }
}
export default Modal;
