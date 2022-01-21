import Content from 'components/content/Content';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import Sidebar from 'components/sidebar/Sidebar';
import { useNavbar } from 'context/NavbarContext';

export default function App() {
  const { close } = useNavbar();
  return (
    <main className="bg-primary min-h-screen" onWheel={close} onTouchStart={close}>
      <div className="flex flex-col">
        <Navbar />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    </main>
  );
}
