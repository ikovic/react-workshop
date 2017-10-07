import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import InputField from 'components/InputField';
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

const initState = {
  name: '',
  tooltip: '',
};

export default class extends PureComponent {
  static displayName = 'AddMarkerModal'

  state = initState

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    })

  onSubmit = e => {
    const { position } = this.props;
    const { name, tooltip } = this.state;
    e.preventDefault();

    this.props.hideModal();

    this.props.onSave({
      position,
      name: { text: name, id: Date.now() },
      title: tooltip,
    });

    this.setState(initState);
  };

  render() {
    const { isOpen, hideModal } = this.props;
    const { name, tooltip } = this.state;

    return (
      <Modal
        className="modal"
        isOpen={isOpen}
        onRequestClose={hideModal}
        contentLabel="Add Marker"
        style={style}
      >
        <h3>Add Marker</h3>
        <form onSubmit={this.onSubmit}>
          <InputField
            label="Tooltip"
            id="markerTooltip"
            name="tooltip"
            value={tooltip}
            onChange={this.handleChange}
          />
          <InputField
            label="Name"
            id="markerName"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <button className="submitButton" type="submit">
            Save
          </button>
        </form>
      </Modal>
    );
  }
}

// const AddMarkerModal = ({ isOpen, hideModal, position, onSave }) => {
//   const onSubmit = e => {
//     e.preventDefault();

//     hideModal();

//     onSave({
//       position,
//       name: { text: this.name.value, id: Date.now() },
//       title: this.tooltip.value
//     });
//   };

//   return (
//     <Modal
//       className="modal"
//       isOpen={isOpen}
//       onRequestClose={hideModal}
//       contentLabel="Add Marker"
//       style={style}
//     >
//       <h3>Add Marker</h3>
//       <form onSubmit={onSubmit}>
//         <InputField
//           label="Tooltip"
//           id="markerTooltip"
//           name="tooltip"
//           bindRef={input => (this.tooltip = input)}
//         />
//         <InputField
//           label="Name"
//           id="markerName"
//           name="name"
//           bindRef={input => (this.name = input)}
//         />
//         <button className="submitButton" type="submit">
//           Save
//         </button>
//       </form>
//     </Modal>
//   );
// };

// export default AddMarkerModal;
