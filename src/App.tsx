import Content from 'components/content/Content';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import Sidebar from 'components/sidebar/Sidebar';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-primary">
      <Navbar />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}
