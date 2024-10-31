import './App.css';
import Badge from './components/Badge/Badge';

function App() {
    return (
        <main>
            <img src='src/assets/badges.svg' />
            <div className='square-badge-container'>
                <Badge shape='square' color='gray'>
                    Badge
                </Badge>
                <Badge shape='square' color='red'>
                    Badge
                </Badge>
                <Badge shape='square' color='yellow'>
                    Badge
                </Badge>
                <Badge shape='square' color='green'>
                    Badge
                </Badge>
                <Badge shape='square' color='blue'>
                    Badge
                </Badge>
                <Badge shape='square' color='indigo'>
                    Badge
                </Badge>
                <Badge shape='square' color='purple'>
                    Badge
                </Badge>
                <Badge shape='square' color='pink'>
                    Badge
                </Badge>
            </div>
            <div className='pill-badge-container'>
                <Badge shape='pill' color='gray'>
                    Badge
                </Badge>
                <Badge shape='pill' color='red'>
                    Badge
                </Badge>
                <Badge shape='pill' color='yellow'>
                    Badge
                </Badge>
                <Badge shape='pill' color='green'>
                    Badge
                </Badge>
                <Badge shape='pill' color='blue'>
                    Badge
                </Badge>
                <Badge shape='pill' color='indigo'>
                    Badge
                </Badge>
                <Badge shape='pill' color='purple'>
                    Badge
                </Badge>
                <Badge shape='pill' color='pink'>
                    Badge
                </Badge>
            </div>
        </main>
    );
}

export default App;
