import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  };

  const headingStyle = {
    fontSize: '28px',
    marginBottom: '10px',
    color: 'blue',
  };

  const subheadingStyle = {
    fontSize: '22px',
    marginTop: '20px',
    marginBottom: '10px',
    color: 'magenta',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
  };

  const listStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    paddingLeft: '20px',
  };

  const listItemStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={paragraphStyle}>
        Welcome to our notes application! We're a team of passionate developers who believe in the power of organized thinking. Our goal is to provide a simple and intuitive platform for you to capture and manage your thoughts, ideas, and important information.
      </p>

      <h2 style={subheadingStyle}>Features:</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>Effortless Note Taking: Create and organize your notes with ease.</li>
        <li style={listItemStyle}>Flexible Organization: Arrange your notes into categories, tags, or folders.</li>
        <li style={listItemStyle}>Real-time Collaboration: Collaborate with others in real time.</li>
        <li style={listItemStyle}>Cross-Device Sync: Access your notes anytime, anywhere.</li>
        <li style={listItemStyle}>Powerful Search: Find what you need in an instant.</li>
        <li style={listItemStyle}>Reminders and Notifications: Set reminders and receive notifications.</li>
        <li style={listItemStyle}>Privacy and Security: Your data is encrypted and stored securely.</li>
      </ul>

      <p style={paragraphStyle}>
        Whether you're a student, professional, or someone who loves to stay organized, our notes app is designed to streamline your workflow and enhance your productivity.
      </p>

      <p style={{paragraphStyle,color:"rgb(100,200,200)"}}>Start organizing your thoughts today!</p>
    </div>
  );
};

export default About;

// import React from 'react'

// const About = () => { 
//     return (
//         <div>
//             This is About page
//         </div>
//     )
// }

// export default About