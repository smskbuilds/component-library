import './Badge.css';

export default function Badge({ shape = 'square', color = 'gray' }) {
    return <div className={`badge ${shape} ${color}`}>Badge</div>;
}
