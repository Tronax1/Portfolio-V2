import React from 'react'
import "../../Styles/ContactPage.scss"

const ContactPage: React.FC = () => {
    return (
        <div>
            <form className = "Form">
                <h1>Contact Me</h1>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="subject"/>
                <textarea placeholder="message"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default ContactPage;
