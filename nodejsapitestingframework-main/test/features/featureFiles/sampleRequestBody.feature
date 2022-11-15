Feature: Feature name


@core11
Scenario: Scenario name
When I set all headers for the request
And I set body to '{"name":"test", "fwk":"api", "car":null}'
And I POST to /post
Then response code should be 200

@core12
Scenario: Scenario name
When I set all headers for the request
And I set contents of file "validRequest.schema" to body
And I POST to /post
Then response code should be 200

