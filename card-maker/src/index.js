import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/ImageFileInput/ImageFileInput';

const imageUploader = new ImageUploader();
const FileInput = props => <ImageFileInput {...props} imageUploader={imageUploader} />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App FileInput={FileInput} />
  </React.StrictMode>
);