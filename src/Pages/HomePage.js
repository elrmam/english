import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [name, setName] = useState('');
  const [isButtonClickable, setIsButtonClickable] = useState(false);
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const [buttonStyle, setButtonStyle] = useState({});
  const [isNearPointer, setIsNearPointer] = useState(false);

  // Handle input change
  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.toLowerCase() === 'ahmed is the most creative and intelligent student') {
      setIsButtonClickable(true); // Enable the button once the name is "Ahmed"
    } else {
      setIsButtonClickable(false); // Disable the button until "Ahmed" is entered
    }
  };

  // Handle submit action
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.toLowerCase() === 'ahmed is the most creative and intelligent student') {
      navigate('/info'); // Redirect to the Info page if "Ahmed" is entered
    }
  };

  // Check if the mouse pointer is near the button
  useEffect(() => {
    const button = buttonRef.current;

    const checkPointerProximity = (event) => {
      const buttonRect = button.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const distance = Math.sqrt(
        Math.pow(mouseX - (buttonRect.left + buttonRect.width / 2), 2) +
          Math.pow(mouseY - (buttonRect.top + buttonRect.height / 2), 2)
      );

      // Trigger movement when mouse is near (e.g., within 100px)
      if (distance < 100) {
        setIsNearPointer(true);
      } else {
        setIsNearPointer(false);
      }
    };

    // Add event listener for mousemove
    window.addEventListener('mousemove', checkPointerProximity);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', checkPointerProximity);
    };
  }, []);

  // Move the button when the pointer is near
  useEffect(() => {
    if (isNearPointer && name.toLowerCase() !== 'ahmed is the most creative and intelligent student') {
      const button = buttonRef.current;
      const buttonWidth = button.offsetWidth;
      const buttonHeight = button.offsetHeight;
      const maxX = window.innerWidth - buttonWidth;
      const maxY = window.innerHeight - buttonHeight;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      setButtonStyle({
        position: 'absolute',
        top: `${randomY}px`,
        left: `${randomX}px`,
        transition: 'all 0.3s ease', // Smooth transition for the button's movement
      });
    }
  }, [isNearPointer, name]);

  return (
    <div className="container-fluid info" style={{ textAlign: 'center', padding: '15rem' }}>
      <h1 className='text-white mb-5'>Who is the most creative and intelligent student ?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '50%',
            marginBottom: '20px',
            borderRadius: '5px',
          }}
        />
        <br />
        <button
          ref={buttonRef}
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#6a0dad',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            position: 'absolute',
            ...buttonStyle,
            pointerEvents: isButtonClickable ? 'auto' : 'none', // Enable clicking if "Ahmed" is typed
            opacity: isButtonClickable ? 1 : 0.5, // Make button look clickable when enabled
          }}
          disabled={!isButtonClickable} // Disable button if not clickable
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default HomePage;
