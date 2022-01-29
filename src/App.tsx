import Content from 'components/content/Content';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import Sidebar from 'components/sidebar/Sidebar';

export default function App() {
  return (
    <main className="min-h-screen bg-primary">
      <div className="flex flex-col">
        <Navbar />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    </main>
  );
}
