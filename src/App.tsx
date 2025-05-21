import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { ChatInterface } from './components/ChatInterface';
import { AboutModal } from './components/AboutModal';
import { EmergencyModal } from './components/EmergencyModal';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);

  return (
    <Layout 
      onAboutClick={() => setShowAbout(true)}
      onEmergencyClick={() => setShowEmergency(true)}
    >
      <ChatInterface />
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
      {showEmergency && <EmergencyModal onClose={() => setShowEmergency(false)} />}
    </Layout>
  );
}

export default App;