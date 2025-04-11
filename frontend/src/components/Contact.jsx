import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.className = 'body'; 
        return () => {
            document.body.className = 'body'; 
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, phone, email, message } = event.target.elements;

        try {
            const response = await fetch('http://localhost:5000/api/auth/contactus', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name.value.trim(),
                    phone: phone.value.trim(),
                    email: email.value.trim(),
                    message: message.value.trim(),
                }),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Message sent successfully!');
                event.target.reset();
                navigate('/');
            } else {
                alert(result.error ? JSON.stringify(result.error) : 'An error occurred.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send the message. Please try again later.');
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="tel" name="phone" placeholder="Your Phone Number" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
