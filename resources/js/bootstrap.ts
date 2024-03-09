/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
//     wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });



import Pusher from 'pusher-js';
import Echo from "laravel-echo";

window.Pusher = Pusher

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '220c2b5dc4701d1bea4a',
    cluster: 'mt1',
    forceTLS: true
});

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from './Pages/translate';

const url = new URL(window.location.href);
const languageMatch = url.pathname.match(/\/(en|pt|fr)/);

console.log(languageMatch);

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: languageMatch[1] ? languageMatch[1] : 'en',
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
});
