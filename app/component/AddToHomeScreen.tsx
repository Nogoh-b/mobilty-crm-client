


"use client"
import React, { useState, useEffect } from 'react';

const AddToHomeScreenButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const isPWA = () => {
        console.log(( window.navigator))
      return ('serviceWorker' in navigator) && ('Standalone' in window.navigator) && !window.navigator.Standalone;
    }


    const beforeInstallPromptHandler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    };
  }, []);
  useEffect(() => {
    // Vérifier si l'application est déjà installée en mode PWA
    const isPWAInstalled = () => {
      return window.matchMedia('(display-mode: standalone)').matches;
    };

    // Mettre à jour l'état du bouton en fonction du résultat de la vérification
    setShowButton(!isPWAInstalled());
  }, []);

  // Fonction pour gérer le clic sur le bouton
  const handleAddToHomeScreen = () => {
    if (!deferredPrompt) {
        return;
      }
  
      deferredPrompt.prompt();
  
      deferredPrompt.userChoice.then((result: any) => {
        if (result.outcome === 'accepted') {
          console.log('PWA installation accepted');
        } else {
          console.log('PWA installation dismissed');
        }
      });
  
      setDeferredPrompt(null);
  };

  // Rendu conditionnel du bouton en fonction de l'état
  return (
    <div>
      {showButton && (
        <button className='pb-5' onClick={handleAddToHomeScreen}>Add to Home Screen</button>
      )}
    </div>
  );
};

export default AddToHomeScreenButton;

