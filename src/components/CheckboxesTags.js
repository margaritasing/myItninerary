import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={topCountry}
      disableCloseOnSelect
      getOptionLabel={(option) => option.pais}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.pais}
        </React.Fragment>
      )}
      style={{ width: 300, marginLeft:10, marginTop:40 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Country" placeholder="Favorites" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const topCountry = [
  { pais: 'Singapur'},
  { pais: 'Francia'},
  { pais: 'Japon'},
  { pais: 'Thailandia'},
  { pais: 'Bora bora'},
  { pais: "Inglaterra"},
  
];