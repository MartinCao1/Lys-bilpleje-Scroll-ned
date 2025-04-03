import React, { useState } from 'react';

function TopBar() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className='topbar'>
      <div className='social-links'>
        <p>Følg Ly's Bilpleje:</p>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
          <img src='/bilag/facebook-icon.png' alt='Facebook' />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
          <img src='/bilag/insta-icon.png' alt='Instagram' />
        </a>
        <a href='https://tiktok.com' target='_blank' rel='noopener noreferrer'>
          <img src='/bilag/tiktok-icon.png' alt='TikTok' />
        </a>
      </div>
      <div className='login-box'>
        <button onClick={handleLoginClick}>Login</button>
      </div>

      {showLoginModal && (
        <div className='login-modal'>
          <div className='modal-content'>
            <button className='close-modal' onClick={handleCloseModal}>
              &times;
            </button>
            <h2>Log ind</h2>
            <form>
              <label>
                Brugernavn:
                <input type='text' name='username' placeholder='Indsæt brugernavn' />
              </label>
              <label>
                Adgangskode:
                <input type='password' name='password' placeholder='Indsæt adgangskode' />
              </label>
              <button type='submit'>Log ind</button>
            </form>
            <div className='modal-links'>
              <a href='#'>Opret dig</a>
              <a href='#'>Glemt adgangskode?</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopBar;
