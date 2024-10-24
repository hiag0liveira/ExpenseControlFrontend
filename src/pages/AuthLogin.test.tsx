import { render } from 'vitest-browser-react'
import { expect, test } from 'vitest'
import Auth from './Auth'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { MemoryRouter } from 'react-router-dom'

test('should display login page when URL contains ?mode=login', async () => {
  const { getByText, getByPlaceholder } = render(
    <Provider store={store}>
      <MemoryRouter>
        {/* Passando o valor de search como prop para simular ?mode=login */}
        <Auth search="?mode=login" />
      </MemoryRouter>
    </Provider>
  )

    //@ts-ignore
    await expect.element(getByText('Login')).toBeInTheDocument()

    //@ts-ignore
    await expect.element(getByPlaceholder('Email')).toBeInTheDocument()

    //@ts-ignore
    await expect.element(getByPlaceholder('Password')).toBeInTheDocument()

  // @ts-ignore
    await expect.element(getByText('Submit')).toBeInTheDocument()

    // @ts-ignore
    await expect.element(getByText("You don't have an account?")).toBeInTheDocument()
})
