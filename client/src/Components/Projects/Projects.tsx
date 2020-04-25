import ChangeGear from '../Images/ChangeGear.png'
import Discord from '../Images/Discord.png'
import MoneyManager from '../Images/moneymanager.jpg'
import Portfolio from '../Images/Portfolio.png'

interface Project{
    img: string,
    Description: string,
    Technologies: Array<string>,
    URL: string
}

const Projects: Array<Project> = [
    {
        img: ChangeGear,
        Description: '',
        Technologies: ['kappa'],
        URL: 'http://changegear-ticket-system.herokuapp.com/'
    },
    {
        img: Discord,
        Description: '',
        Technologies: ['kappa'],
        URL: 'https://github.com/Tronax1/Aldebaran-'
    },
    {
        img: MoneyManager,
        Description: '',
        Technologies: ['kappa'],
        URL: 'https://managerfolio.herokuapp.com/'
    },
    {
        img: Portfolio,
        Description: '',
        Technologies: ['kappa'],
        URL: 'https://jorge-villarreal.herokuapp.com/'
    }
]

export default Projects