import { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [currentPage, setCurrentPage] = useState('hero');

    function renderMain(currentPage) {
        switch (currentPage) {
            case 'hero':
                return <Hero setCurrentPage={setCurrentPage} />;
            case 'about':
                return <About />;
            case 'showcase':
                return <Showcase />;
            case 'contact':
                return <Contact />;
            default:
                return <About />;
        }
    }

    return (
        <div>
            <Nav setCurrentPage={setCurrentPage}/>
            <main>
                {renderMain(currentPage)}
            </main>
            {currentPage !== 'hero' && <Footer />}
        </div>
    );
}

export default App;
