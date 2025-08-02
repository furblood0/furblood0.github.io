// src/main.tsx
//import { StrictMode } from 'react'; // StrictMode'u koruyoruz
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Global stillerimiz
import { HashRouter } from 'react-router-dom'; // GitHub Pages için HashRouter kullanıyoruz

createRoot(document.getElementById('root')!).render(
    <HashRouter>
      {/* App bileşenimizi HashRouter içine alıyoruz.
          Bu sayede GitHub Pages'te routing çalışır. */}
      <App />
    </HashRouter>
);