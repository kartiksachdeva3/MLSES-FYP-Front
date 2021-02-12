import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Skeleton from './components/Skeleton/AppMenu';




function App() {
  return (
    <div className="Container">
      <Grid>
        <Skeleton />
      </Grid>
    </div>
  );
}

export default App;