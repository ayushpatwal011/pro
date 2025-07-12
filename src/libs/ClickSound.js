

   export  const playSound = (audioRef) => {
      if (audioRef.current) {
        // Rewind to the start if already playing
        audioRef.current.currentTime = 0;

        // Play the sound
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      }
    };