import './Badge.css';

interface Props {
    shape: string;
    color: string;
    children: string;
}

export default function Badge({
    shape = 'square',
    color = 'gray',
    children,
}: Props) {
    return <div className={`badge ${shape} ${color}`}>{children}</div>;
}
