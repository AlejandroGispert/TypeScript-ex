import React, { FC, ReactElement } from 'react';
import { backdropClasses, Box } from '@mui/material';
import { TaskHeader } from './_taskHeader';
import { TaskFooter } from './_taskFooter';
import { TaskDescription } from './_taskDescription';

export const Task: FC = (props): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flex-direction="column"
      mb={2}
      p={4}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'error.light',
      }}
    >
      <TaskHeader />
      <TaskDescription />
      <TaskFooter />
    </Box>
  );
};
