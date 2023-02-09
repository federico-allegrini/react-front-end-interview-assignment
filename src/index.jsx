import React from 'react'
import ReactDOM from 'react-dom/client'

import PhotoFetcher from './components/PhotoFetcher'

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhotoFetcher />
  </React.StrictMode>
)