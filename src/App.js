import './App.css';

import { StateProvider } from './contexts/stateContext'
import Calculator from './components/Calculator';
import History from './components/History';




const App = () => {
    
    return (
        <StateProvider >
            <div className="container">
                <Calculator/>
                <History/>
            </div>
        </StateProvider>
    );
}


export default App;
