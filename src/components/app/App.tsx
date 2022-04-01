import Navbar from 'components/navigation/Navbar';
import Sidebar from 'components/navigation/Sidebar';
import Top from 'components/navigation/Top';

// Content
import About from 'components/content/About';
import Projects from 'components/content/Projects';
import Stack from 'components/content/Stack';

// Smooth scrolling polyfill
import smoothscroll from 'smoothscroll-polyfill';

export default function App() {
  smoothscroll.polyfill();
  return (
    <div className="flex min-h-screen flex-col gap-12 bg-primary md:gap-20">
      <Navbar />
      <Sidebar />
      <About />
      <Stack />
      <Projects />
      <Top />
    </div>
  );
}
