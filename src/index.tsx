/* @refresh reload */
import { RouterProvider } from '@tanstack/solid-router';
import { hydrate } from 'solid-js/web';
import { createRouter } from '@router';
import './index.css';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Missing #root');
}

const router = createRouter();

hydrate(() => <RouterProvider router={router} />, root);
