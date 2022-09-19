import { Box, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/system'
import React from 'react'
import './roomItem.css'

const RoomItem = () => {
  const roomItemTheme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      },
      success: {
        dark: '#009688',
      },
    },
  });
  
  return (
    // roomItemContainer 에 링크 먹여서 전체 어디를누러도 해당 호텔로 이동할 수 있도록.
    // 아니면 각자 링크를 먹여야하나
    <ThemeProvider theme={roomItemTheme}>
      <div className="roomItemContainer">
        <img src="data:image/jpeg;base64,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"
                  alt=""
                  className="roomItemImage" />
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
          }}
        >
          <Box sx={{ color: 'text.secondary' }}>하와이</Box>
          <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
            허코알라 호텔
          </Box>
          <Box
            sx={{
              color: 'success.dark',
              display: 'inline',
              fontWeight: 'bold',
              mx: 0.5,
              fontSize: 14,
            }}
          >
            4,000,000,000,000원
          </Box>
          <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
            / 박
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  )
}

export default RoomItem