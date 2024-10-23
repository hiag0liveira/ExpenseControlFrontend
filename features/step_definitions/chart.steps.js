import { Given, When, Then } from '@cucumber/cucumber'
import { render } from 'vitest-browser-react'
import { expect } from 'vitest'
import React from 'react'
import Chart from '../../src/components/Chart.tsx'

let getByText

Given(
	'I have a chart with a total income of {int} and a total expense of {int}',
	(totalIncome, totalExpense) => {
		const rendered = render(
			React.createElement(Chart, { totalIncome, totalExpense }),
		)
		getByText = rendered.getByText
	},
)

When('the chart is rendered', () => {
	// Não precisa fazer nada extra aqui
})

Then('it should display the text {string}', async (expectedText) => {
	await expect(getByText(expectedText)).toBeInTheDocument()
})

Then('it should display the message {string}', async (expectedMessage) => {
	await expect(getByText(expectedMessage)).toBeInTheDocument()
})
