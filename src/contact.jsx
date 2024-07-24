import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!recaptchaToken) {
      setErrorMessage('Please verify you are not a robot.');
      setIsSubmitting(false);
      return;
    }

    const dataToSend = {
      ...formData,
      recaptcha: recaptchaToken,
    };

    try {
      const response = await axios.post('https://jqarrg981h.execute-api.us-east-2.amazonaws.com/default/CSaddler', dataToSend);
      console.log('Email sent successfully!', response.data);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setRecaptchaToken('');
      setErrorMessage('');
    } catch (error) {
      console.error('Failed to send email', error);
      setErrorMessage('Failed to send message. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center justify-start pt-6 min-h-screen bg-white" style={{ fontFamily: '"Glacial Indifference", sans-serif' }}>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2" style={{ letterSpacing: '0.15em', color: '#3b2d2d' }}>CONTACT US</h1>
      </div>
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full max-w-md mx-4 border-2 border-black">
        <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="p-2 border-2 rounded-md border-black"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-2 border-2 rounded-md border-black"
          />
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="p-2 border-2 rounded-md border-black"
          />
          <textarea
            id="message"
            rows="6"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="p-2 border-2 rounded-md border-black"
          />
          <ReCAPTCHA
            sitekey="6LdyvRcqAAAAAOvkB0GYslJyDuTKut_1ZWU9Pect"
            onChange={token => setRecaptchaToken(token)}
            onExpired={() => setRecaptchaToken('')}
            className="flex justify-center my-4"
          />
          <button type="submit" disabled={isSubmitting || !recaptchaToken} className="bg-black text-white p-2 rounded-md hover:bg-grey-400 transition duration-200">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
