import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase';

const LoginPage = ({ onSuccess }) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const sendOtp = () => {
    if (!phone.startsWith('+')) {
      alert('Phone number must start with + and country code (e.g., +91XXXXXXXXXX)');
      return;
    }

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          console.log('reCAPTCHA solved:', response);
        }
      }, auth); // ✅ Pass auth here correctly
    }

    signInWithPhoneNumber(auth, phone, window.recaptchaVerifier)
      .then((result) => {
        setConfirmation(result);
        alert('OTP sent successfully!');
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  };

  const verifyOtp = () => {
    if (!confirmation) return;

    confirmation.confirm(otp)
      .then(() => {
        alert('OTP verified successfully!');
        onSuccess();
      })
      .catch((err) => {
        console.error(err);
        alert('Invalid OTP');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Sign In with Phone</h2>

      <input
        type="text"
        placeholder="+91XXXXXXXXXX"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 mb-4 w-64 rounded"
      />
      <button
        onClick={sendOtp}
        className="bg-indigo-600 hover:bg-purple-600 text-white px-4 py-2 rounded mb-6 w-64"
      >
        Send OTP
      </button>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2 mb-4 w-64 rounded"
      />
      <button
        onClick={verifyOtp}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-64"
      >
        Verify OTP
      </button>

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default LoginPage;
