import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/projects';
import Team from './components/Team';
import Contact from './components/contact';
import ChatBotComponent from './components/ChatBotComponent';
import './index.css';

import EmailLogin from './components/EmailLogin';
import { signOut, auth } from './firebase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Optional: Auto-login if already authenticated
    const user = auth.currentUser;
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        window.localStorage.removeItem('emailForSignIn');
        setIsLoggedIn(false);
        alert('Logged out successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Error logging out.');
      });
  };

  if (!isLoggedIn) {
    return <EmailLogin onSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="App font-sans text-gray-900 bg-white">
      <div className="flex justify-end p-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
        >
          Logout
        </button>
      </div>

      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <ChatBotComponent />
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center text-sm py-6">
        © 2025 WebThrive. Made with ❤️ by the team.
      </footer>
    </div>
  );
}

export default App;
