import React from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/modal';


function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid />
      <Modal />
    </div>
  );
}

export default App;
