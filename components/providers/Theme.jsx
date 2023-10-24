"use client";

import { ThemeProvider } from "next-themes";

function Theming({ children }) {
  return (
    <ThemeProvider
      // storageKey="joscript-theme"
      enableSystem
      // disableTransitionOnChange
      attribute="class"
    >
      {children}
    </ThemeProvider>
  );
}
export default Theming;
