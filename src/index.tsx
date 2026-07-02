/* @refresh reload */
import { RouterProvider } from '@tanstack/solid-router';
import { hydrate, render } from 'solid-js/web';
import { createRouter } from '@router';
import './index.css';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Missing #root');
}

const router = createRouter();

const mountRoot = root;

function mountApp() {
  const app = () => <RouterProvider router={router} />;
  const isPrerendered = mountRoot.innerHTML.trim().length > 0;

  if (isPrerendered) {
    hydrate(app, mountRoot);
    return;
  }

  render(app, mountRoot);
}

void router.load().then(mountApp);
