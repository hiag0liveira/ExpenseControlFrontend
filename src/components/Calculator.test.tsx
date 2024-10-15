import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import Calculator from './Calculator'

test('6 + 6 = 12', async () => {
	const { getByRole } = render(<Calculator />)

	await getByRole('button', { name: '6' }).click()
	await getByRole('button', { name: '+' }).click()
	await getByRole('button', { name: '6' }).click()
    await getByRole('button', { name: '=' }).click()
	await expect.element(getByRole('textbox')).toHaveValue('12')
})

test('5 * 5 = 25', async () => {
	const { getByRole } = render(<Calculator />)

	await getByRole('button', { name: 'C' }).click()
	await getByRole('button', { name: '5' }).click()
	await getByRole('button', { name: '*' }).click()
	await getByRole('button', { name: '5' }).click()
	await getByRole('button', { name: '=' }).click()
	await expect
		.element(getByRole('textbox'))
		.toHaveValue('25')
})
