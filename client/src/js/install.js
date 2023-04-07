const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to prompt the user to download the app
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// Event handler for installing the app
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Event handler for after the app is installed
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
