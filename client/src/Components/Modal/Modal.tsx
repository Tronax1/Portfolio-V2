import React from 'react'
import Technologies from './Technologies'

import '../../Styles/Modal.scss'

interface Display {
    show: boolean,
    toggleShow: (state: boolean) => void
}

const Modal: React.FC<Display> = ({show, toggleShow}) => {
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
                             lectus ornare, viverra lorem luctus, viverra metus. Donec mattis
                              at nisi non posuere. Cras dictum magna mauris, at ultricies arcu finibus 
                              ac. Maecenas eu metus eget lorem malesuada molestie. Sed vel risus in 
                              justo hendrerit aliquam. Nulla sed justo gravida, luctus enim at, commodo 
                              sem. Donec diam dui, tristique vitae dapibus in, eleifend vitae nisl. 
                              Aliquam convallis leo ac dapibus gravida. Etiam malesuada, ante a aliquam
                               laoreet, libero ex condimentum arcu, imperdiet dignissim magna ante et lectus.
                                Fusce suscipit, ipsum nec consectetur feugiat, elit arcu placerat nulla,
                                 a maximus eros diam at nunc. Nunc in magna vitae neque facilisis fermentum
                                  ac ac lorem. Quisque suscipit magna eu velit scelerisque, quis gravida 
                                  odio placerat. Suspendisse potenti. 
                        </p>
                        <div>
                            <Technologies/>
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
