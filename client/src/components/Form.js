import React, { useState } from 'react';
import "./FormStyle.css";

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://full-portfolio.onrender.com/backend/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                // Optionally clear the form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred while sending your message. Please try again later.');
        }
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' value={formData.name} onChange={handleChange} required />

                <label>Email</label>
                <input type='email' name='email' value={formData.email} onChange={handleChange} required />

                <label>Subject</label>
                <input type='text' name='subject' value={formData.subject} onChange={handleChange} required />

                <label>Message</label>
                <textarea rows="6" name='message' value={formData.message} onChange={handleChange} placeholder='Type your message here' required />

                <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default Form;
