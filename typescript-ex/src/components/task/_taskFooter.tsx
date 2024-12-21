import React, { FC, ReactElement } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
export const TaskFooter: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      justify-content="space-between"
      alignItems="center"
      width="100%"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch color="warning" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
      >
        Mark Complete
      </Button>
    </Box>
  );
};
