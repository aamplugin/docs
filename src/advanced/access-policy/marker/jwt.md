---
title: JWT
---

### Syntax

`${JWT.<pathToProperty>}`

### Definition

The `JWT` marker is a powerful way to manage access based on the token claims.

In the example below, AAM issued the JWT token with the following claims.

```json
{
  "iat": 1573608282,
  "iss": "https://demo.aamportal.com",
  "exp": 1573694682,
  "jti": "a9627546-5389-43d5-8519-080a89a00948",
  "userId": 673,
  "group": "contractor",
  "revocable": true,
  "refreshable": false
}
```

When an HTTP request is authenticated with a JWT token, the policy below restricts the ability to manage any post if the `group` property contains either the `contractor` or `freelancer` string value.

```json
{
  "Statement": [
    {
      "Effect": "deny",
      "Resource": "PostType:post:posts",
      "Action": [
        "Edit",
        "Delete",
        "Publish"
      ],
      "Condition": {
        "In": {
          "${JWT.group}": [
            "contractor",
            "freelancer"
          ]
        }
      }
    }
  ]
}
```