import { Outlet } from '@tanstack/solid-router';
import { SiteFooter, SiteHeader } from '@components';
import { SocialIconSprite } from '@ui';

export function RootLayout() {
  return (
    <div class="relative min-h-screen text-foreground" id="top">
      <SocialIconSprite />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
