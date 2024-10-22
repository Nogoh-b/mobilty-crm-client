"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = () => {
          console.log('User accepted the install prompt111');
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div>
      <h1>Bienvenue sur mon application</h1>
      {deferredPrompt && (
        <button onClick={handleInstallClick}>Ajouter à l'écran d'accueil</button>
      )}
    </div>
  );
}
