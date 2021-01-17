import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <ButtonGroup>
          <Button
            startIcon={<SaveIcon />}
            endIcon={<SaveIcon />}
            size="small"
            style={{
              fontSize: 12
            }} 
            onClick={()=>alert('hello')} 
            href="#" 
            variant="contained" 
            color="primary">
            Save
          </Button>
  
          <Button
            startIcon={<DeleteIcon />}
            endIcon={<DeleteIcon />}
            size="small"
            style={{
              fontSize: 12
            }} 
            onClick={()=>alert('hello')} 
            href="#" 
            variant="contained" 
            color="secondary">
            Discard
          </Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
