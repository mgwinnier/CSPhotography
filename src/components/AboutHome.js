import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

function CommercialPhotographySection() {
    return (
        <div style={{
            background: 'white', 
            padding: '50px 20px', 
            textAlign: 'center',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' // Adds a more readable font family
        }}>
            <h1 style={{
                fontSize: '28px', // Increased font size for more prominence
                color: '#333',
                fontWeight: 'bold' // Makes the font weight bolder
            }}>Commercial Photography in Austin, Texas</h1>
            <p style={{
                fontSize: '18px', // Slightly larger text for better readability
                color: '#444', // Darker text color for better contrast
                maxWidth: '600px',
                margin: '20px auto',
                lineHeight: '1.6' // Increased line height for better text flow
            }}>
                Crystal is a photographer based in Central Texas, specializing in capturing the essence of commercial spaces. With a keen eye for detail and a passion for showcasing each property’s unique character, Crystal helps businesses translate their physical environment into stunning visual narratives.
            </p>
            <Link to="/about" style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 20px',
                fontSize: '16px',
                color: 'black', // Changed to black text
                backgroundColor: 'transparent', // No fill color
                textDecoration: 'none',
                borderRadius: '5px',
                border: '2px solid black', // Double outline
                boxShadow: '0 0 0 2px white' // Mimics a double border with a white gap
            }}>
                About Me
            </Link>
        </div>
    );
}

export default CommercialPhotographySection;
