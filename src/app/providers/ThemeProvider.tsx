import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
export type Palette = "blue" | "green" | "purple" | "red" | "orange";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  palette: Palette;
  setPalette: (p: Palette) => void;
};

const STORAGE_THEME = "vite-ui-theme";
const STORAGE_PALETTE = "vite-ui-palette";

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined,
);

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultPalette?: Palette;
}> = ({ children, defaultTheme = "system", defaultPalette = "blue" }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      return (localStorage.getItem(STORAGE_THEME) as Theme) || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const [palette, setPaletteState] = useState<Palette>(() => {
    try {
      return (
        (localStorage.getItem(STORAGE_PALETTE) as Palette) || defaultPalette
      );
    } catch {
      return defaultPalette;
    }
  });

  // apply theme (light/dark/system)
  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (t: Theme) => {
      root.classList.remove("light", "dark");

      if (t === "system") {
        const isDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        root.classList.add(isDark ? "dark" : "light");
      } else {
        root.classList.add(t);
      }
    };

    applyTheme(theme);

    // listen to system changes when theme === system
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (theme === "system") applyTheme("system");
    };
    mql.addEventListener?.("change", onChange);
    // fallback for older browsers
    mql.addListener?.(onChange);

    return () => {
      mql.removeEventListener?.("change", onChange);
      mql.removeListener?.(onChange);
    };
  }, [theme]);

  // apply palette on <html> as data attribute
  useEffect(() => {
    try {
      document.documentElement.setAttribute("data-palette", palette);
    } catch {}
  }, [palette]);

  const setTheme = (t: Theme) => {
    try {
      localStorage.setItem(STORAGE_THEME, t);
    } catch {}
    setThemeState(t);
  };

  const setPalette = (p: Palette) => {
    try {
      localStorage.setItem(STORAGE_PALETTE, p);
    } catch {}
    setPaletteState(p);
  };

  return (
    <ThemeProviderContext.Provider
      value={{ theme, setTheme, palette, setPalette }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = (): ThemeProviderState => {
  const ctx = useContext(ThemeProviderContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
