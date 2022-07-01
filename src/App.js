import { useState } from 'react';
import Nav from './components/Nav';

function App() {
    const [heroOpen, setHeroOpen] = useState(true);

    return (
        <div>
            <Nav heroOpen={heroOpen} setHeroOpen={setHeroOpen} />
        </div>
    );
}

export default App;
