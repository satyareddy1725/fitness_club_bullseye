import React, { useState } from 'react';
import './style.css';

function FitnessClubRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [members, setMembers] = useState([]);

  const handleNameChange = event => setName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handlePhoneChange = event => setPhone(event.target.value);
  const handleAddressChange = event => setAddress(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const newMember = { name, email, phone, address };
    setMembers([...members, newMember]);
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    alert('User added successfully');
  };

  const handleViewMembers = () => {
    alert(JSON.stringify(members));
  };

  return (
    <div>
      <h1>Fitness Club Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} required />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={address} onChange={handleAddressChange} required />

        <input type="submit" value="Add Member" />
      </form>

      <button onClick={handleViewMembers}>View Member List</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>{member.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FitnessClubRegistration;
