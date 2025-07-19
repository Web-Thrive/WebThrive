import React, { useState, useEffect } from 'react';
import { auth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from '../firebase';

const EmailLogin = ({ onSuccess }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const savedEmail = window.localStorage.getItem('emailForSignIn');
      if (savedEmail) {
        signInWithEmailLink(auth, savedEmail, window.location.href)
          .then(() => {
            window.localStorage.removeItem('emailForSignIn');
            onSuccess();
          })
          .catch((err) => {
            console.error(err);
            alert('Failed to sign in');
          });
      }
    }
  }, [onSuccess]);

  const handleSendLink = () => {
    const actionCodeSettings = {
      url: 'http://localhost:3000', // Replace with your domain in production
      handleCodeInApp: true,
    };

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email);
        alert('Magic link sent to your email!');
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Sign In with Email (Magic Link)</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-4 w-64 rounded"
      />
      <button
        onClick={handleSendLink}
        className="bg-indigo-600 hover:bg-purple-600 text-white px-4 py-2 rounded w-64"
      >
        Send Magic Link
      </button>
    </div>
  );
};

export default EmailLogin;
