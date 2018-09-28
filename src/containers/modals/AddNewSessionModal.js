import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';

function SlideTransition(props) {
  return (
    <Slide
      {...props}
      direction="down"
    />
  );
}

class AddNewSessionModal extends React.Component {
  constructor() {
    super();
    this.state = {
      sessionName: ''
    };
  }

  handleChange = ({ target }) => {
    this.setState({ sessionName: target.value });
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onCancel}
        TransitionComponent={SlideTransition}
      >
        <DialogTitle>Start your new bender</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You're one step away from starting a new drinking session. 
            You just need to add a name for your newest bender, 
            just to make sure it stands out from the crowd.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Session Name"
            type="text"
            fullWidth
            value={this.state.sessionName}
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.props.onCancel}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={this.props.onConfirm}
            color="primary"
          >
            <Link to="/session">Start</Link>
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AddNewSessionModal;