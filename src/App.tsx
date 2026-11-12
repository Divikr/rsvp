import { useRef, useState } from 'react';
import { Blessing } from './components/Blessing';
import { FamilyBlessings } from './components/FamilyBlessings';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Menu } from './components/Menu';
import { Wishes } from './components/Wishes';
import { SaveTheDateModal } from './components/SaveTheDateModal';
import { Schedule } from './components/Schedule';
import { StickyBar } from './components/StickyBar';
import { Words } from './components/Words';
import { Vows } from './components/Vows';

export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);

  return (
    <div className="page">
      <StickyBar heroRef={heroRef} onOpenMenu={openMenu} />
      <Hero heroRef={heroRef} onOpenMenu={openMenu} onOpenDate={() => setDateOpen(true)} />
      <main>
        <Intro />
        <Vows />
        <Words />
        <Blessing />
        <Schedule />
        <FamilyBlessings />
        <Wishes />
      </main>
      
      <SaveTheDateModal open={dateOpen} onClose={() => setDateOpen(false)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
