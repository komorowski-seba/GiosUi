import { PieChart, Pie, Cell } from 'recharts';

const getColor: string = (value: number) => {
    if (value < 60) return '#52c41a';
    if (value < 80) return '#faad14';
    return '#ff4d4f';
};

export type GaugeComponentProps = { value: number; name: string };

export const GaugeComponent: Element = ({ value, name }: GaugeComponentProps) => {
    const data = [
        { name: 'value', value },
        { name: 'rest', value: 100 - value },
    ];

    const color = getColor(value);

    return (
        <div style={{ textAlign: 'center' }}>
            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                >
                    <Cell fill={color} />
                    <Cell fill="#eee" />
                </Pie>
            </PieChart>

            <div style={{ marginTop: -10, fontWeight: 600 }}>
                {name}: {value}%
            </div>
        </div>
    );
};