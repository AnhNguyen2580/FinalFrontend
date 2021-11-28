import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './slices/message.slice';
import voiceReducer from './slices/voice.slice';

const store = configureStore({
  reducer: {
    message: messageReducer,
    voice: voiceReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
