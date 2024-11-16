import { useState ,useRef,useEffect} from 'react';

import Index from './Routes/Index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/SideBar/SideBar'; 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} sidebarRef={sidebarRef} onMenuToggle={handleMenuToggle} />
      <main className={isSidebarOpen ? 'content-overlay ' : 'content'} >
      <Header onMenuToggle={handleMenuToggle} />
      
      
     <Index></Index>
     
      <Footer />
      </main>
    </div>
  );
}

export default App;
