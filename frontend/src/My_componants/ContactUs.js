import React, { useState } from 'react';
import Header from './Header';
import { Footer } from './Footer';
import contactimg from './contactus.avif';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:5000/feedback', {
      method: 'post',
      body: JSON.stringify({ name, email, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert('Data saved successfully');
      setEmail('');
      setName('');
      setMessage('');
    }
  };

  return (
    <div>
      <Header />
      <div
        className="container-fluid "
        style={{
          backgroundImage: `url(${contactimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          padding: '2rem',
        }}
      >
        <div className="row">
          <div className="col-md-6 bg-white p-4 rounded shadow p-4">
            <h1 className="mb-4">Contact Us</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message:
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
