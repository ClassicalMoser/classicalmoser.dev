import { Moon, Sun } from 'lucide-solid';
import { useColorMode } from '@hooks';
import { Button } from '@ui';

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      onClick={() => toggleColorMode()}
      aria-label={colorMode() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {colorMode() === 'dark' ? <Sun class="size-4" /> : <Moon class="size-4" />}
    </Button>
  );
}
