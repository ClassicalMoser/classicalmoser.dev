import { Separator, SocialIconSprite } from '@ui';
import {
  ConnectSection,
  FeaturedWorkSection,
  FocusSection,
  HeroSection,
  SideProjectsSection,
  SiteFooter,
  SiteHeader,
} from '@components';

function App() {
  return (
    <div class="relative min-h-screen text-foreground" id="top">
      <SocialIconSprite />
      <SiteHeader />

      <main>
        <HeroSection />
        <FeaturedWorkSection />
        <SideProjectsSection />
        <Separator class="mx-auto max-w-5xl" />
        <FocusSection />
        <Separator class="mx-auto max-w-5xl" />
        <ConnectSection />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
