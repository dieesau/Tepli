import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Footer} from './components/footer';
import {Header} from './components/header';
import {AuthProvider} from './hoc/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <App />
                <Footer />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
