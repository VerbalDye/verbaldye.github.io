import { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
    const [heroOpen, setHeroOpen] = useState(true);

    return (
        <div>
            <Nav heroOpen={heroOpen} setHeroOpen={setHeroOpen} />
            { !heroOpen && <About />}
        </div>
    );
}

export default App;
