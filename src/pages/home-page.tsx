import { Separator } from '@ui';
import {
  ConnectSection,
  FeaturedWorkSection,
  FocusSection,
  HeroSection,
  SideProjectsSection,
} from '@components';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedWorkSection />
      <SideProjectsSection />
      <Separator class="mx-auto max-w-5xl" />
      <FocusSection />
      <Separator class="mx-auto max-w-5xl" />
      <ConnectSection />
    </main>
  );
}
