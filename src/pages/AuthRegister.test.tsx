import { render} from 'vitest-browser-react'
import { expect, test } from 'vitest'
import Auth from './Auth'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { MemoryRouter } from 'react-router-dom'

test('should display register page', async () => {
  // Renderiza register page
  const { getByText, getByPlaceholder } = render(
    <Provider store={store}>
      <MemoryRouter >
        <Auth />
      </MemoryRouter>
    </Provider>
  )
    // @ts-ignore
    await expect.element(getByText('Registration')).toBeInTheDocument()

    // @ts-ignore
    await expect.element(getByPlaceholder('Email')).toBeInTheDocument()

    // @ts-ignore
    await expect.element(getByPlaceholder('Password')).toBeInTheDocument()

    // @ts-ignore
    await expect.element(getByText('Submit')).toBeInTheDocument()

    // @ts-ignore
    await expect.element(getByText(' Already have an account ?')).toBeInTheDocument()
})