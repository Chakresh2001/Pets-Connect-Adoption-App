import React, { useState } from 'react';
import './ContributionForm.css'; // Import the CSS file for styling

const ContributionForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contributionType, setContributionType] = useState('buy');
  const [petType, setPetType] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <div className="contribution-form-container">
      <br />
      <h2 className='header'>Contribute to Petfinder</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contributionType">Contribution Type:</label>
          <select
            id="contributionType"
            value={contributionType}
            onChange={(e) => setContributionType(e.target.value)}
            
          >
            <option value="buy">BUY</option>
            <option value="rescue">RESCUE</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="petType">Pet Type:</label>
          <input
            type="text"
            id="petType"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="petBreed">Pet Breed:</label>
          <input
            type="text"
            id="petBreed"
            value={petBreed}
            onChange={(e) => setPetBreed(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button className="Button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContributionForm;
