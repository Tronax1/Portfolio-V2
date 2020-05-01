import {ChangeGear, 
        Discord, 
        MoneyManager, 
        Portfolio} from '../Images';

interface Project{
    img: string,
    Description: string,
    Technologies: Array<string>,
    URL: string
}

const Projects: Array<Project> = [
    {
        img: ChangeGear,
        Description: 'This is the changegear bleh bleh',
        Technologies: ['React', 'Redux', 'Node', 'Express', 'MongoDB'],
        URL: 'http://changegear-ticket-system.herokuapp.com/'
    },
    {
        img: Discord,
        Description: 'This is the discord bot stuff',
        Technologies: ['Node', 'AWS EC2'],
        URL: 'https://github.com/Tronax1/Aldebaran-'
    },
    {
        img: MoneyManager,
        Description: 'The money manager thingy bleh bleh',
        Technologies: ['React', 'Redux', 'Node', 'Express', 'Firebase'],
        URL: 'https://managerfolio.herokuapp.com/'
    },
    {
        img: Portfolio,
        Description: 'The previous portfolio that is gonna die soon',
        Technologies: ['React', 'Redux', 'Node', 'Express'],
        URL: 'https://jorge-villarreal.herokuapp.com/'
    }
]

export default Projects