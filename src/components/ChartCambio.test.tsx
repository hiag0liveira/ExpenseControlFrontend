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