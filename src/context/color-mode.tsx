import type { Accessor, ParentProps } from 'solid-js';
import { createContext, createEffect, createSignal } from 'solid-js';
import { constants } from '@config';

const { ZAIDAN_COLOR_MODE_COOKIE_KEY } = constants;

export type ColorMode = 'light' | 'dark';

export type ColorModeContextValue = {
  colorMode: Accessor<ColorMode>;
  toggleColorMode: () => void;
  setColorMode: (mode: ColorMode) => void;
};

export const ColorModeContext = createContext<ColorModeContextValue>();

function applyColorModeToDocument(mode: ColorMode) {
  const html = document.documentElement;
  html.classList.remove('light', 'dark');
  html.classList.add(mode);
  document.cookie = `${ZAIDAN_COLOR_MODE_COOKIE_KEY}=${mode}; path=/; max-age=31536000; SameSite=Lax`;
}

export function ColorModeProvider(
  props: ParentProps<{
    initialColorMode: ColorMode;
  }>,
) {
  const [colorMode, setColorMode] = createSignal<ColorMode>(props.initialColorMode);

  createEffect(() => {
    applyColorModeToDocument(colorMode());
  });

  const toggleColorMode = () => {
    setColorMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode, setColorMode }}>
      {props.children}
    </ColorModeContext.Provider>
  );
}

/** Resolved theme for the document (cookie wins, then system preference). */
export const getClientColorMode = (): ColorMode => {
  const raw =
    document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith(`${ZAIDAN_COLOR_MODE_COOKIE_KEY}=`))
      ?.split('=')[1]
      ?.trim() ?? '';
  if (raw === 'dark' || raw === 'light') {
    return raw;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};
