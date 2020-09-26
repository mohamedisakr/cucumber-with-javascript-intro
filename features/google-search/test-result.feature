Feature: Google searching
    Scenario: Search from search bar produce correct links
        Given a web browser is at google home page
        When the user enter "cucumber" into the search bar
        Then links related to "cucumber" are shown on the results page


