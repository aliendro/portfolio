import Content from 'components/content/Content';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import Sidebar from 'components/sidebar/Sidebar';

const App = () => (
  <main className="bg-primary min-h-screen">
    <div className="flex flex-col">
      <Navbar />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  </main>
);

export default App;
