import { useStateValue } from '../contexts/stateContext';

const History = () => {
    const [state, dispatch] = useStateValue();

    return (
        <div className='content'>
            Histórico
            <div>
                {state.calc.history.map((item, index) => (
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
} 
export default History