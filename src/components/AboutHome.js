import React from 'react';


function CommercialPhotographySection() {
    return (
        <div style={{
            background: 'white', 
            padding: '10px 10px 10px', // Reduced top padding
            textAlign: 'center',
            fontFamily: '"Glacial Indifference", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' // Adds Glacial Indifference font family
        }}>
    
            <p style={{
                fontSize: '18px', // Slightly larger text for better readability
                color: '#444', // Darker text color for better contrast
                maxWidth: '800px', // Increased max width for the text section
                margin: '10px auto',
                lineHeight: '1.6' // Increased line height for better text flow
            }}>
                I'm Crystal, a photographer based in Central Texas specializing in capturing the essence of commercial spaces. With a keen eye for detail and a passion for showcasing each property's unique character, I help businesses translate their physical environment into stunning visual narratives.
            </p>
           
        </div>
    );
}

export default CommercialPhotographySection;
