import {ChangeGear, 
        Discord, 
        MoneyManager, 
        Portfolio} from '../Images';

interface Project{
    title: string,
    img: string,
    Description: string,
    Technologies: Array<string>,
    URL: string
}

const Projects: Array<Project> = [
    {
        title: 'Change Gear Utility',
        img: ChangeGear,
        Description: 'This is a full stack web application that allows a user to compare ChangeGear ticket information.',
        Technologies: ['React', 'Redux', 'Node', 'Express', 'MongoDB'],
        URL: 'http://changegear-ticket-system.herokuapp.com/'
    },
    {
        title: 'Aldebaran',
        img: Discord,
        Description: 'This is the discord bot stuff',
        Technologies: ['Node', 'AWS EC2'],
        URL: 'https://github.com/Tronax1/Aldebaran-'
    },
    {
        title: 'Money Manager',
        img: MoneyManager,
        Description: 'This is a full stack application that helps the user keep track of expenses, it also has a mortgage calculator to determine what the house payments per month would be given a down payment, and interest rate. The application also displays whether the user is overspending given the income, as well as the expenses. Last but not least, it shows the current value of a stock given by user input.',
        Technologies: ['React', 'Redux', 'Node', 'Express', 'Firebase'],
        URL: 'https://managerfolio.herokuapp.com/'
    },
    {
        title: 'Portfolio V1',
        img: Portfolio,
        Description: 'The previous portfolio that is gonna die soon',
        Technologies: ['React', 'Redux', 'Node', 'Express'],
        URL: 'https://jorge-villarreal.herokuapp.com/'
    }
]

export default Projects