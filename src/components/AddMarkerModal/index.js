import React from 'react';
import Modal from 'react-modal';

import FormInputField from 'components/FormInputField';
import './AddMarkerModal.css';

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    width: '200px',
    height: '150px',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    margin: '0 auto'
  }
};

const AddMarkerModal = ({ isOpen, hideModal, position, onSave }) => {
  const onSubmit = e => {
    e.preventDefault();

    hideModal();

    onSave({
      position,
      name: { text: this.name.value, id: Date.now() },
      title: this.tooltip.value
    });
  };

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={hideModal}
      contentLabel="Add Marker"
      style={style}
    >
      <h3>Add Marker</h3>
      <form onSubmit={onSubmit}>
        <div className="formRow">
          <label htmlFor="markerTooltip">Tooltip</label>
          <input
            style={{ marginLeft: '4px' }}
            type="text"
            name="tooltip"
            id="markerTooltip"
            className="formInput"
            ref={input => (this.tooltip = input)}
          />
        </div>
        <div className="formRow">
          <label htmlFor="markerName">Name</label>
          <input
            style={{ marginLeft: '4px' }}
            type="text"
            name="name"
            id="markerName"
            className="formInput"
            ref={input => (this.name = input)}
          />
        </div>
        <FormInputField label='vojko' id = "markerTooltip" name = "tooltip" />
        <button className="submitButton" type="submit">Save</button>
      </form>
    </Modal>
  );
};

export default AddMarkerModal;
