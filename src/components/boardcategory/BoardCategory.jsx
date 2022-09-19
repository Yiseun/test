import * as React from 'react';
import './boardCategory.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function BoardCategory() {

    const categories = [
        {label: '카테고리1', number:1},
        {label: '카테고리2', number:2},
        {label: '카테고리3', number:3},
        {label: '카테고리4', number:4},
    ];

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={categories}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="카테고리" />}
    />
  );
}