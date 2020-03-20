import React from 'react'
import TestImage from '../Images/test image.jpg'
import '../../Styles/AboutPage.scss'

export default function AboutPage() {
    return (
        <>
            
            <div className = "About-Flex">
                <span>
                    <h1>About Me</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ut massa maximus sem rhoncus consectetur. Maecenas turpis enim,
                    iaculis ac feugiat nec, malesuada et nunc. Donec commodo mi at justo feugiat 
                    pretium. Suspendisse vitae nibh tortor. Aenean aliquam sit amet est sit ame
                    t imperdiet. Donec ornare viverra nisl, quis consequat justo. Cras a vulpu
                    tate tortor. Aenean et leo a metus fringilla euismod vitae a justo. Curabi
                    tur urna nisl, maximus at fringilla sed, faucibus ac magna. Aliquam ac qu
                    am augue. In eu lectus erat. Mauris elementum at erat ac aliquet. Ut luct
                    us nisl ut efficitur vulputate. Ut tincidunt quis eros sed tempus. Intege
                    r lobortis est non nisl imperdiet, ut tincidunt orci malesuada. 
                </span>
                <img src={TestImage} alt=""/>
            </div>
        </>
    )
}
