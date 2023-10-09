import React, { useState } from 'react';

const SearchModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const modalStyles = {
    display: modalVisible ? 'block' : 'none',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
  };

  const modalContentStyles = {
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
    position: 'relative',
  };

  const closeModalStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  };

  const searchContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
  };

  const searchInputStyles = {
    margin: '8px 0',
    padding: '8px',
  };

  const searchButtonStyles = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px',
    border: '1px solid black', 
    cursor: 'pointer',
    margin: '8px 0',
    borderRadius: '10px',
    fontSize: '14px',
  };

  const showButtonStyles = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    cursor: 'pointer',
    color: 'black',
    borderRadius: '4px'
  };

  return (
    <div>
      <div class="btn-group" role="group" aria-label="Basic outlined example" style={showButtonStyles}>
        <button onClick={openModal} className="btn btn-outline-primary">Whole, Finland</button>
        <button className="btn btn-outline-primary">Add guests</button>
        <button className="btn btn-outline-primary">Buscar</button>
      </div>
      <div style={modalStyles}>
        <div style={modalContentStyles}>
          <span style={closeModalStyles} onClick={closeModal}>&times;</span>
          <div style={searchContainerStyles}>
            <input
              type="text"
              placeholder="Ciudad que estamos buscando"
              style={searchInputStyles}
            />
            <input
              type="number"
              placeholder="Cantidad de huéspedes"
              style={searchInputStyles}
            />
            <button style={searchButtonStyles} className="btn btn-outline-light">Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
