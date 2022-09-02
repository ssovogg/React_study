import React from 'react';
import classes from './FileInput.module.css'

const FileInput = ({value}) => (
    <button className={classes.button}>{value}</button>
  );

export default FileInput;