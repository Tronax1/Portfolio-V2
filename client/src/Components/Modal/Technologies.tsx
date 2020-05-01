import React from 'react'
import '../../Styles/Technologies.scss'

interface TechnologiesProps{
    technology: string
}

const Technologies: React.FC<TechnologiesProps> = ({technology}) => {
    return (
        <div className="Tech">
            {technology}
        </div>
    )
}
export default Technologies;