import { render } from 'vitest-browser-react';
import { expect, test, vi } from 'vitest';
import ChartCambio from './ChartCambio';
import { instance } from '../api/axios.api'; 

test('should display loading message initially', async () => {
    // Limpa mocks anteriores
    vi.restoreAllMocks();

    // Mock da API que retorna os dados com delay de 500ms
    const mockGet = vi.spyOn(instance, 'get')
        .mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 500))); 

    const { getByText } = render(<ChartCambio />);

    // @ts-ignore
    await expect.element(getByText('Loading...')).toBeInTheDocument();

    mockGet.mockRestore();
});

test('should display the chart without data', async () => {
  
    vi.restoreAllMocks();

    const mockGet = vi.spyOn(instance, 'get')
        .mockImplementation(() => Promise.resolve({ data: [] }));

    const { getByText } = render(<ChartCambio />);

    // @ts-ignore
    await expect.element(getByText('USD to BRL Exchange Rate')).toBeInTheDocument();

    // @ts-ignore
     await expect.element(getByText('Exchange Rate')).toBeInTheDocument(); 

    mockGet.mockRestore();
});

test('should display the chart with data', async () => {
    // Limpa mocks anteriores
    vi.restoreAllMocks();

    // Mock da API que retorna um dado específico
    const mockGet = vi.spyOn(instance, 'get')
        .mockImplementation(() => Promise.resolve({ data: [{ date: '2024-10-01', rate: 0.2 }] }));

    const { getByText } = render(<ChartCambio />);

    // Verifica o título do gráfico após o carregamento
    // @ts-ignore
    await expect.element(getByText('USD to BRL Exchange Rate')).toBeInTheDocument();

    // Verifica o rótulo do eixo Y "Exchange Rate"
    // @ts-ignore
    await expect.element(getByText('Exchange Rate')).toBeInTheDocument();

    // Verifica se os dados corretos foram passados para o gráfico
    expect(mockGet).toHaveBeenCalledWith('/exchange-rate', { params: { currency: 'BRL' } });

    // Confirma a presença do mock
    expect(mockGet).toHaveBeenCalledTimes(1);

    mockGet.mockRestore();
});

