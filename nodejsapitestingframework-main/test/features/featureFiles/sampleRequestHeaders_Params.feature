Feature: Feature name


@core1
Scenario: Scenario name
When I set header "Accept" to "application/json"
And I set header "Content-Type" to "application/json"
And I GET /
Then response code should be 200
And validate response body should be valid according to schema "response_200_schema" file


@core2
Scenario: Scenario name
When I set all headers for the request
And I GET /
Then response code should be 200
And validate response body should be valid according to schema "response_200_schema" file


@core3
Scenario: Scenario name
When I set all headers for the request
And I set query parameters to
    | parameters      | value |
    | x-tst-client-id | "aaa" |
And I GET /
Then response code should be 200
And validate response body should be valid according to schema "response_200_schema" file


@core4
Scenario: Scenario name
When I set all headers for the request
And I pipe contents of file ./test-controller/responseSchemaTemplate/testConfig.json to body
And I POST to /post
Then response code should be 200
