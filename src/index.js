import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import AddToHomeScreenButton from './component/AddToHomeScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <html>
      <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, minimal-ui, viewport-fit=cover"/>
            <meta name="theme-color" content="#2196f3"/>
            <meta name="author" content="DexignZone" /> 
            <meta name="keywords" content="" /> 
            <meta name="robots" content="" /> 
            <meta name="description" content="Soziety - Social Network Mobile App Template ( Bootstrap 5 + PWA )"/>
            <meta property="og:title" content="Soziety - Social Network Mobile App Template ( Bootstrap 5 + PWA )" />
            <meta property="og:description" content="Soziety - Social Network Mobile App Template ( Bootstrap 5 + PWA )" />
            <meta property="og:image" content="https://soziety.dexignzone.com/xhtml/social-image.png"/>
            <meta name="format-detection" content="telephone=no"/>

            <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png" />

            <title>Soziety - Social Network Mobile App Template ( Bootstrap 5 + PWA )</title>

            <link rel="manifest" href="manifest.json"/>

            <link rel="stylesheet" href="assets/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css"/>
            <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css"/>
            <link rel="stylesheet" type="text/css" href="assets/css/style.css"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

        </head>   
      <body>
          <App />
          <AddToHomeScreenButton/>
          
      </body>
    </html>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register(); //change the service worker registration from 'unregistered' to 'registered'

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
