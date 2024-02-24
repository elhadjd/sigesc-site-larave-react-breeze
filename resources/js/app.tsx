import './bootstrap';
import '../css/app.css';
import '../assets/scss/variable.scss'
import 'react-toastify/dist/ReactToastify.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';


// window.googleTranslateElementInit = () => {
//     new window.google.translate.TranslateElement(
//         {
//             pageLanguage: 'en',
//             autoDisplay: true,
//         },
//         'google_translate_element'
//     );
// };

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
