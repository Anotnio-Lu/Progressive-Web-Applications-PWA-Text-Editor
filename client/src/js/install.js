const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default installation prompt
  event.preventDefault();
  // Save the event to be used later
  window.deferredInstallPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const deferredPrompt = window.deferredInstallPrompt;
    if (deferredPrompt) {
        // Show the installation prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the installation prompt.');
        } else {
        console.log('User dismissed the installation prompt.');
        }
        // Clear the saved event
        window.deferredInstallPrompt = null;
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully.');
});
