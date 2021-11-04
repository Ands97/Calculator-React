import './App.css';

import { StateProvider } from './contexts/stateContext'


import Header from './components/Header';
import Menu from './components/Menu';
import Body from './components/Body';
import Button from './components/Button';

const App = () => {
    
    return (
        <StateProvider >
            <div className="container">
                <Header />
                <section>
                    <Menu />
                    <Body />
                </section>
            </div>
        </StateProvider>
    );
}


export default App;