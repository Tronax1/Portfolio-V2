import React from 'react'
import '../../Styles/Technologies.scss'

interface Tech{
    technology: string
}

const Technologies: React.FC<Tech> = ({technology}) => {
    return (
        <div className="Tech">
            {technology}
        </div>
    )
}
export default Technologies;