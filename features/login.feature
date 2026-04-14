Feature: Login

    Scenario: Login with valid credentials
        Given in the Login page
        When using the following credentials
            | usuario | <usuario> |
            | senha   | <senha>   |
        Then redirects to the secret page

        Examples:
            | usuario    | senha  |
            | julio.lima | 123456 |
            | adam       | 123456 |

//Example using parameterization
//Scenario: Login with invalid credentials
//    Given in the Login page
//    When using the following credentials
//        | usuario | <usuario> |
//        | senha   | <senha>   |
//    Then displays an error message "<message>"
//
//      Examples:
//        | usuario    | senha  | message               |
//        | julio.lima | 123456 | invalid data          |
//        | adam       | 123456 | the field is required |