Feature: Render income and expense chart

  Scenario: Render the chart with valid values
    Given I have a chart with a total income of 1000 and a total expense of 500
    When the chart is rendered
    Then it should display the text "Income"
    And it should display the text "Expense"

  Scenario: Display message when there is no data
    Given I have a chart with a total income of 0 and a total expense of 0
    When the chart is rendered
    Then it should display the message "No data available"
