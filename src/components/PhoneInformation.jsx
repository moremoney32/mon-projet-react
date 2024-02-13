import 'react-international-phone/style.css';
import React, { forwardRef, useEffect } from 'react';

import {
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';

  export const PhoneInformation = forwardRef(({ value, onChange, error, register, ...restProps }, ref) => {
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: 'cm',
      value,
      countries: defaultCountries,
      onChange: (data) => {
        if (typeof onChange === 'function') {
            onChange(data.phone);
          }
      },
    });
    useEffect(() => {
      // Si une référence est fournie, la transmettre au parent
      if (ref) {
        ref.current = {
          value: inputValue,
          // Vous pouvez ajouter d'autres propriétés ou méthodes au besoin
        };
      }
    }, [inputValue, ref]);
      

  return (
    <TextField
      variant="outlined"
      label="Telephone"
      color="primary"
      placeholder="Entrer votre numero de telephone"
      value={inputValue}
      onChange={handlePhoneValueChange}
      type="tel"
       inputRef={inputRef}
       error={Boolean(error)}
       helperText={error ? error.message : ''}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            style={{ marginRight: '2px', marginLeft: '-8px' }}
          >
            <Select
              MenuProps={{
                style: {
                  height: '300px',
                  width: '360px',
                  top: '10px',
                  left: '-34px',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
              }}
              sx={{
                width: 'max-content',
                // Remove default outline (display only on focus)
                fieldset: {
                  display: 'none',
                },
                '&.Mui-focused:has(div[aria-expanded="false"])': {
                  fieldset: {
                    display: 'block',
                  },
                },
                // Update default spacing
                '.MuiSelect-select': {
                  padding: '8px',
                  paddingRight: '24px !important',
                },
                svg: {
                  right: 0,
                },
              }}
              value={country.iso2}
              onChange={(e) => setCountry(e.target.value)}
              renderValue={(value) => (
                <FlagImage iso2={value} style={{ display: 'flex' }} />
              )}
            >
              {defaultCountries.map((c) => {
                const country = parseCountry(c);
                return (
                  <MenuItem key={country.iso2} value={country.iso2}>
                    <FlagImage
                      iso2={country.iso2}
                      style={{ marginRight: '8px' }}
                    />
                    <Typography marginRight="8px">{country.name}</Typography>
                    <Typography color="gray">+{country.dialCode}</Typography>
                  </MenuItem>
                );
              })}
            </Select>
          </InputAdornment>
        ),
      }}
      {...restProps}
    />
  );
});
