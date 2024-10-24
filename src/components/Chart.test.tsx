import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import Chart from './Chart';


test('should render Chart with correct data', async  () => {
    const { getByText } = render(<Chart totalIncome={1000} totalExpense={500} />);
    getByText('Income');
    getByText('Expense');
    
    // @ts-ignore
    await expect.element(getByText('Income')).toBeInTheDocument('1000');
    
    // @ts-ignore
    await expect.element(getByText('Expense')).toBeInTheDocument('500');
});

test('should handle zero values', async  () => {
    const { getByText } = render(<Chart totalIncome={0} totalExpense={0} />);
    
    // @ts-ignore
    await expect.element(getByText('No data available')).toBeInTheDocument();
});
