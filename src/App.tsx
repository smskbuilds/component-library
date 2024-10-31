import './App.css';
import Badge from './components/Badge/Badge';

function App() {
    return (
        <main>
            <img src='src/assets/badges.svg' />
            <div className='square-badge-container'>
                <Badge shape='square' color='gray' />
                <Badge shape='square' color='red' />
                <Badge shape='square' color='yellow' />
                <Badge shape='square' color='green' />
                <Badge shape='square' color='blue' />
                <Badge shape='square' color='indigo' />
                <Badge shape='square' color='purple' />
                <Badge shape='square' color='pink' />
            </div>
            <div className='pill-badge-container'>
                <Badge shape='pill' color='gray' />
                <Badge shape='pill' color='red' />
                <Badge shape='pill' color='yellow' />
                <Badge shape='pill' color='green' />
                <Badge shape='pill' color='blue' />
                <Badge shape='pill' color='indigo' />
                <Badge shape='pill' color='purple' />
                <Badge shape='pill' color='pink' />
            </div>
        </main>
    );
}

export default App;
