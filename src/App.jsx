import React from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import { ThemeProvider } from "@/components/theme-provider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex w-full">
        <LeftSide />
        <RightSide />
      </div>
    </ThemeProvider>
    
  );
};

export default App;