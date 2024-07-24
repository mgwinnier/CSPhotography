import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

function ContactUsSection() {
    return (
        <div style={{
            background: 'white',
            padding: '20px 20px', // Reduced top and bottom padding
            textAlign: 'center',
            fontFamily: '"Glacial Indifference", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' // Use Glacial Indifference font
        }}>
            <h1 style={{
                fontSize: '28px',
                color: '#3b2d2d',
                fontWeight: 'bold',
                letterSpacing: '0.15em' // Added letter spacing
            }}>CONTACT</h1>
            <p style={{
                fontSize: '18px',
                color: '#444',
                maxWidth: '600px',
                margin: '20px auto',
                lineHeight: '1.6'
            }}>
                Ready to bring your commercial space to life with stunning photography? Contact me to schedule a consultation and discuss how we can create compelling visual stories together. Let's make your space stand out!
            </p>
            <Link to="/contact" style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 20px',
                fontSize: '16px',
                color: 'black',
                backgroundColor: 'transparent',
                textDecoration: 'none',
                borderRadius: '5px',
                border: '2px solid black',
                boxShadow: '0 0 0 2px white'
            }}>
                CONTACT ME
            </Link>
        </div>
    );
}

export default ContactUsSection;
