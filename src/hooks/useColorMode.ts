import type { ColorModeContextValue } from '@context';
import { ColorModeContext } from '@context';
import { useContext } from 'solid-js';

export function useColorMode(): ColorModeContextValue {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
}
