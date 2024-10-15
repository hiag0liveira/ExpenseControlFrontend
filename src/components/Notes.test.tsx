import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import Notes from './Notes'

test('Notes should be visible', async () => {
	const { getByText } = render(<Notes />)

	await expect.element(getByText('Notes')).toBeInTheDocument('12')
})
