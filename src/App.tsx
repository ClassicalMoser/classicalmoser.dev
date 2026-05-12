import { Separator, SocialIconSprite } from '@ui';
import {
  ConnectSection,
  ExperienceSection,
  FocusSection,
  HeroSection,
  SiteFooter,
  SiteHeader,
  WorkSection,
} from '@components';

function App() {
  return (
    <div class="relative min-h-screen text-foreground" id="top">
      <SocialIconSprite />
      <SiteHeader />

      <main>
        <HeroSection />
        <WorkSection />
        <Separator class="mx-auto max-w-5xl" />
        <ExperienceSection />
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
