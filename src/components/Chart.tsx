import { FC } from 'react'
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts'

const COLORS = ['#16A34A', '#EF4444']

interface IChart {
	totalIncome: number
	totalExpense: number
}

interface IData {
	value: number
	name: string
}

const Chart: FC<IChart> = ({ totalExpense, totalIncome }) => {
	const data = new Array<IData>(
		{ name: 'Income', value: totalIncome },
		{ name: 'Expense', value: totalExpense },
	)
	const hasData = totalIncome > 0 || totalExpense > 0;
	 return (
        <div>
            {!hasData ? (
                <p>No data available</p> 
            ) : (
                <PieChart width={240} height={240}>
                    <Pie
                        data={data}
                        cx={'50%'}
                        cy={'50%'}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                    >
                        {data.map((__entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                </PieChart>
            )}
        </div>
    );
}

export default Chart
