'use client';

import React, { useState } from 'react';
import { charactersData } from '@/data/index';
import CharacterCard from '@/components/CharacterCard';
import Zoom from '@mui/material/Zoom';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Homepage = () => {
  const [characterState, setCharacterState] = useState(0);
  const [cardVisible, setCardVisible] = useState(true);

  const handleCardClick = () => {
    setCardVisible(false);
    setTimeout(() => {
      setCharacterState((prev) =>
        prev < charactersData.length - 1 ? prev + 1 : 0
      );
      setCardVisible(true);
    }, 200);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: '10%',
        }}>
        <Zoom in={cardVisible}>
          <Box>
            <CharacterCard
              characterData={charactersData[characterState]}
              onClick={handleCardClick}
            />
          </Box>
        </Zoom>
      </Box>
    </ThemeProvider>
  );
};

export default Homepage;
