import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
   
    //console.log(props)
    props.handleFilterOptionChange(props.filterField,event.target.value)
    setAge(event.target.value)
   
    
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
  <InputLabel id="demo-simple-select-label">{props.filterOption}</InputLabel>
        <Select
          labelid="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
         
          {props.filterByOptions.map((option,i) => 
            <MenuItem key = {`Option_${i}`}value={option}>{option}</MenuItem>)}
         
        </Select>
      </FormControl>
      
    </div>
  );
}