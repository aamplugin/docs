---
title: RESTful API Overview
order: 2
---
There are several reasons you may want to leverage AAM RESTful API endpoints to manage JWT tokens for your users. One of the most common is a centralized user management system shared across multiple WordPress instances. With this setup, you may want to manage JWT tokens for any user from that system. In this case, cross-application integration is required, and AAM gives you all the necessary "pipes".

All the RESTful API endpoints for the JWT Token service are well documented in the [RESTful API Reference](/advanced/restful/reference/jwt) section. Though, it is beneficial to show how to use it with an example.

### Initial Setup

To work with JWT Tokens service through RESTful API endpoints, you need to authenticate all HTTP requests with the user who has the privilege of managing this service. At the minimum, this has to be either the user with the Administrator role or the user who has both [aam_manager](/plugin/advanced-access-manager/capability/aam_manager) and [aam_manage_jwt](/plugin/advanced-access-manager/capability/aam_manage_jwt) capabilities.

::: info FYI!
For more detail about managing access to the AAM services, refer to the [How to manage access to AAM page for other users?](/question/aam/manage-access-to-aam-for-other-users) Q&A.
:::

AAM supports all WordPress core standard [authentication methods](/advanced/restful/authentication), though, we'll issue a JWT token through AAM UI for the user that we'll use to work with the RESTful API. Navigate to the AAM page and select the user that meets the minimum required privileges. Then on the JWT Tokens tab create a new token.

![AAM Issued JWT Token](./assets/aam-issued-jwt-token.png)

In this course, we use [Postman](https://www.postman.com/) to perform HTTP API requests, however, you may use tools of your preference. We already have prepared the Postman collection with all RESTful API endpoints ready to use. You can download it from [this page](/advanced/restful/postman).

If you choose to go with our Postman collection, create a new environment variable `jwt_token` and use the generated before token. This token will be included in each API request as the `Authorization` header.

### Usage

If everything is set up correctly, the `GET /wp-json/aam/v2/service/jwt` request should return the array of issued JWT tokens for your user.

 ![AAM JWT Issued Tokens](./assets/aam-jwt-issued-tokens.png)

You have the ability to fine-tune the amount of data that is returned with the `fields` query parameter. This parameter accepts a comma-separated list of properties to return for each token. For example, if you care only about raw tokens and their ids, then adjust the `fields` param to `token,id`. The result will look like:

```json
[
    {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODUyMzEyMzQsImlzcyI6Imh0dHBzOi8vZGVtby5hYW1wb3J0YWwuY29tIiwiZXhwIjoxNjg1NTc2ODI3LCJqdGkiOiJjZGJkYjI4NC04ZWM2LTRkM2EtYjAwOS00ODdiYjRmMTRiOWYiLCJyZWZyZXNoYWJsZSI6ZmFsc2UsInJldm9jYWJsZSI6IjEiLCJ1c2VySWQiOjF9.QjmNyXqsg1rM8f0WCHV6EioUjyMsng2xHKiro6CXd0w",
        "id": "cdbdb284-8ec6-4d3a-b009-487bb4f14b9f"
    }
]
```

In the next chapter, we are going to learn about developer API and how to use it to manage JWT tokens programmatically.