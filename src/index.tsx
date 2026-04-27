/* @refresh reload */
import { ColorModeProvider, getClientColorMode } from '@context';
import { render } from 'solid-js/web';
import './index.css';
import App from './App';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Missing #root');
}
const initialColorMode = getClientColorMode();
document.documentElement.classList.remove('light', 'dark');
document.documentElement.classList.add(initialColorMode);

render(
  () => (
    <ColorModeProvider initialColorMode={initialColorMode}>
      <App />
    </ColorModeProvider>
  ),
  root,
);
