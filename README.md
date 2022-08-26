## Request

## Response

- Response Code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

  - 100: Informational Codes (We don't see those that often)
  - 200: The response is Successful and content is sent.
    - 204: Request is good, but there is no content.
  - 300: The thing you are requesting has moved and this is usually a redirect message.
  - 400: Bad Request: It's the users fault
    - 401: Unauthorized to receive content.
    - 403: Authorized but not allowed
    - 404: Content is not available (bad request)
  - 500: Something went wrong, but it the servers fault

- Response Body
