import '../index.css';
import { createMemoryHistory, RouterProvider } from '@tanstack/solid-router';
import { renderToStringAsync } from 'solid-js/web';
import { createRouter } from '@router';

export async function renderRouteAppHtml(path: string): Promise<string> {
  const router = createRouter();

  const history = createMemoryHistory({
    initialEntries: [path],
  });

  router.update({ history });
  await router.load();

  return renderToStringAsync(() => <RouterProvider router={router} />);
}
