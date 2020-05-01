import React from 'react'
import Technologies from './Technologies'

import '../../Styles/Modal.scss'

interface ModalProps {
    show: boolean,
    toggleShow: (state: boolean) => void,
    modalDesc: string,
    modalTech: Array<string>
}

const Modal: React.FC<ModalProps> = ({show, toggleShow, modalDesc, modalTech}) => {
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
                        <p>
                           {modalDesc}
                        </p>
                        <div>
                            {modalTech.map((item, i) => (
                                <Technologies key = {i} technology={item}/>
                            ))}
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
