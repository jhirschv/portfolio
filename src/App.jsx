import React from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import { ThemeProvider } from "@/components/theme-provider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col lg:flex-row w-full dark:bg-[black]">
        <LeftSide />
        <RightSide />
      </div>
    </ThemeProvider>
    
  );
};

export default App;