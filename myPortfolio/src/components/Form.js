import React from 'react';
import "./FormStyle.css";

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const subject = event.target.elements.subject.value;
        const message = event.target.elements.message.value;
        const mailtoUrl = `mailto:lepharamchiary@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' />

                <label>Email</label>
                <input type='email' name='email' />

                <label>Subject</label>
                <input type='text' name='subject' />

                <label>Message</label>
                <textarea rows="6" name='message' placeholder='Type your message here' />
                <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default Form;
