import React, { FC, ReactElement } from 'react';
import { ITaskFooter } from './interfaces/ITaskFooter';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';

export const TaskFooter: FC<ITaskFooter> = (
  props,
): ReactElement => {
  const {
    onStatuschange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            onChange={(e) => onStatuschange(e)}
            color="warning"
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatuschange: PropTypes.func,
  onClick: PropTypes.func,
};
