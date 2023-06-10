---
title: JWT Tokens
---

## Get all tokens

`GET /aam/v2/service/jwt`

Get the list of all tokens issued for the given user.

::: code-tabs

@tab curl

```shell:active
curl --request GET \
     --url https://<your-server-domain>/aam/v2/service/jwt?fields=token,id \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <jwt-token>'
```

@tab js

```js
const axios = require('axios');

axios.get('https://<your-server-domain>/aam/v2/service/jwt', {
    params: {
        fields: 'token,id'
    },
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer <jwt-token>'
    }
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```

@tab wp-php

```php
<?php

wp_remote_get('https://<your-server-domain>/aam/v2/service/jwt?fields=token,id', [
    'headers' => [
        'Accept: application/json',
        'Authorization': 'Bearer <jwt-token>'
    ]
]);
```

:::


| Params | Description |
| ------ | ----------- |
| `user_id` | **Required**. User ID. |
| `fields`  | _Optional_. Comma-separated list of properties to return. The supported properties are `token`, `id`, `claims`, `signed_url`, `is_valid`, `error`. |

::: details Response Sample
```json
[
    {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODUyMzEyMzQsImlzcyI6Imh0dHBzOi8vZGVtby5hYW1wb3J0YWwuY29tIiwiZXhwIjoxNjg1NTc2ODI3LCJqdGkiOiJjZGJkYjI4NC04ZWM2LTRkM2EtYjAwOS00ODdiYjRmMTRiOWYiLCJyZWZyZXNoYWJsZSI6ZmFsc2UsInJldm9jYWJsZSI6IjEiLCJ1c2VySWQiOjF9.QjmNyXqsg1rM8f0WCHV6EioUjyMsng2xHKiro6CXd0w",
        "id": "cdbdb284-8ec6-4d3a-b009-487bb4f14b9f"
    }
]
```
:::

| Error Codes | Description |
| ----------- | ----------- |
| 401 | User is unauthorized. Make sure that user has proper permissions assigned. |
| 500 | Unexpected application error. Check your PHP error log for more detail. |

## Get a token

`GET /aam/v2/service/jwt/<id>`

Get a specific JWT token by ID (aka `jti`).

::: code-tabs

@tab curl

```shell:active
curl --request GET \
     --url https://<your-server-domain>/aam/v2/service/jwt/<id> \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <jwt-token>'
```

@tab js

```js
const axios = require('axios');

axios.get('https://<your-server-domain>/aam/v2/service/jwt/<id>', {
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer <jwt-token>'
    }
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```

@tab wp-php

```php
<?php

wp_remote_get('https://<your-server-domain>/aam/v2/service/jwt/<id>', [
    'headers' => [
        'Accept: application/json',
        'Authorization': 'Bearer <jwt-token>'
    ]
]);
```

:::

| Params | Description |
| ------ | ----------- |
| `id` | **Required**. The unique JWT token ID (aka `jti`). |
| `user_id` | **Required**. User ID. |
| `fields`  | _Optional_. Comma-separated list of properties to return. The supported properties are `token`, `id`, `claims`, `signed_url`, `is_valid`, `error`. |

::: details Response Sample
```json
{
    "id": "52123676-3772-4e59-976a-38024d62179b",
    "is_valid": true,
    "claims": {
        "iat": 1685233137,
        "iss": "https://demo.aamportal.com",
        "exp": 1690503537,
        "jti": "52123676-3772-4e59-976a-38024d62179b",
        "refreshable": false,
        "revocable": true,
        "userId": 1
    },
    "signed_url": "https://demo.aamportal.com?aam-jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODUyMzMxMzcsImlzcyI6Imh0dHBzOi8vZGVtby5hYW1wb3J0YWwuY29tIiwiZXhwIjoxNjkwNTAzNTM3LCJqdGkiOiI1MjEyMzY3Ni0zNzcyLTRlNTktOTc2YS0zODAyNGQ2MjE3OWIiLCJ5ZXMiOnRydWUsInJlZnJlc2hhYmxlIjpmYWxzZSwicmV2b2NhYmxlIjoiMSIsInVzZXJJZCI6MX0.X61V2u5ti-I1xjdk1Xsxvvkdk3_XvG_I5wvshw_I8OY",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODUyMzMxMzcsImlzcyI6Imh0dHBzOi8vZGVtby5hYW1wb3J0YWwuY29tIiwiZXhwIjoxNjkwNTAzNTM3LCJqdGkiOiI1MjEyMzY3Ni0zNzcyLTRlNTktOTc2YS0zODAyNGQ2MjE3OWIiLCJ5ZXMiOnRydWUsInJlZnJlc2hhYmxlIjpmYWxzZSwicmV2b2NhYmxlIjoiMSIsInVzZXJJZCI6MX0.X61V2u5ti-I1xjdk1Xsxvvkdk3_XvG_I5wvshw_I8OY"
}
```
:::

| Error Codes | Description |
| ----------- | ----------- |
| 401 | User is unauthorized. Make sure that user has proper permissions assigned. |
| 404 | Token does not exist. |
| 500 | Unexpected application error. Check your PHP error log for more detail. |

## Create new token

`POST /aam/v2/service/jwt`

Issue new JWT token.

::: code-tabs

@tab curl

```shell:active
curl --request POST \
     --url https://<your-server-domain>/aam/v2/service/jwt \
     --data '{"expires_in":"+2 weeks","is_refreshable":false,"is_revocable":true}'
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <jwt-token>'
```

@tab js

```js
const axios = require('axios');

axios.get('https://<your-server-domain>/aam/v2/service/jwt', {
    data: {
        expires_in: '+2 weeks',
        is_refreshable: false,
        is_revocable: true
    },
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer <jwt-token>'
    }
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```

@tab wp-php

```php
<?php

wp_remote_post('https://<your-server-domain>/aam/v2/service/jwt', [
    'headers' => [
        'Accept: application/json',
        'Authorization': 'Bearer <jwt-token>'
    ],
    'body' => [
        'expires_in'     => '+2 weeks',
        'is_refreshable' => false,
        'is_revocable'   => true
    ]
]);
```
:::

| Params | Description |
| ------ | ----------- |
| `user_id` | **Required**. User ID. |
| `url` | **Required**. Valid URL or relative path on the website. |
| `expires_at` | _Optional_. Valid date-time string in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format that is in the future. The token will expire after given date-time. |
| `expires_in` | _Optional_. Another way to specify the token's expiration date. This properly accepts a valid [date and time format](https://www.php.net/manual/en/datetime.formats.php) that PHP can parse into a DateTime object with [strtotime](https://www.php.net/manual/en/function.strtotime.php) core function. |
| `is_refreshable` | _Optional_. Wether token can be used to obtain a new token before it is expired. |
| `is_revocable` | _Optional_. Wether token should be considered as revocable or not. |
| `additional_claims` | _Optional_. An optional collection of claims that can be added to the token. |
| `fields`  | _Optional_. Comma-separated list of properties to return. The supported properties are `token`, `id`, `claims`, `signed_url`, `is_valid`, `error`. |

::: details Response Sample
```json
{
    "id": "52123676-3772-4e59-976a-38024d62179b",
    "is_valid": true,
    "claims": {
        "iat": 1685233137,
        "iss": "https://demo.aamportal.com",
        "exp": 1690503537,
        "jti": "52123676-3772-4e59-976a-38024d62179b",
        "refreshable": false,
        "revocable": true,
        "userId": 1
    },
    "signed_url": "https://demo.aamportal.com?aam-jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODUyMzMxMzcsImlzcyI6Imh0dHBzOi8vZGVtby5hYW1wb3J0YWwuY29tIiwiZXhwIjoxNjkwNTAzNTM3LCJqdGkiOiI1MjEyMzY3Ni0zNzcyLTRlNTktOTc2YS0zODAyNGQ2MjE3OWIiLCJ5ZXMiOnRydWUsInJlZnJlc2hhYmxlIjpmYWxzZSwicmV2b2NhYmxlIjoiMSIsInVzZXJJZCI6MX0.X61V2u5ti-I1xjdk1Xsxvvkdk3_XvG_I5wvshw_I8OY",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODUyMzMxMzcsImlzcyI6Imh0dHBzOi8vZGVtby5hYW1wb3J0YWwuY29tIiwiZXhwIjoxNjkwNTAzNTM3LCJqdGkiOiI1MjEyMzY3Ni0zNzcyLTRlNTktOTc2YS0zODAyNGQ2MjE3OWIiLCJ5ZXMiOnRydWUsInJlZnJlc2hhYmxlIjpmYWxzZSwicmV2b2NhYmxlIjoiMSIsInVzZXJJZCI6MX0.X61V2u5ti-I1xjdk1Xsxvvkdk3_XvG_I5wvshw_I8OY"
}
```
:::

| Error Codes | Description |
| ----------- | ----------- |
| 401 | User is unauthorized. Make sure that user has proper permissions assigned. |
| 400 | Invalid input. |
| 500 | Unexpected application error. Check your PHP error log for more detail. |

## Delete a token

`DELETE /aam/v2/service/jwt/<id>`

Delete an existing JWT token.

::: code-tabs

@tab curl

```shell:active
curl --request DELETE \
     --url https://<your-server-domain>/aam/v2/service/jwt/<id>?fields=token,id \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <jwt-token>'
```

@tab js

```js
const axios = require('axios');

axios.delete('https://<your-server-domain>/aam/v2/service/jwt/<id>?fields=token,id', {
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer <jwt-token>'
    }
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```

@tab wp-php

```php
<?php

wp_remote_request('https://<your-server-domain>/aam/v2/service/jwt/<id>?fields=token,id', [
    'method'  => 'DELETE',
    'headers' => [
        'Accept: application/json',
        'Authorization': 'Bearer <jwt-token>'
    ]
]);
```
:::

| Params | Description |
| ------ | ----------- |
| `id` | **Required**. The unique JWT token ID. |
| `user_id` | **Required**. User ID. |
| `fields`  | _Optional_. Comma-separated list of properties to return. The supported properties are `token`, `id`, `claims`, `signed_url`, `is_valid`, `error`. |

::: details Response Sample
```json
{
    "id": "52123676-3772-4e59-976a-38024d62179b",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODUyMzMxMzcsImlzcyI6Imh0dHBzOi8vZGVtby5hYW1wb3J0YWwuY29tIiwiZXhwIjoxNjkwNTAzNTM3LCJqdGkiOiI1MjEyMzY3Ni0zNzcyLTRlNTktOTc2YS0zODAyNGQ2MjE3OWIiLCJ5ZXMiOnRydWUsInJlZnJlc2hhYmxlIjpmYWxzZSwicmV2b2NhYmxlIjoiMSIsInVzZXJJZCI6MX0.X61V2u5ti-I1xjdk1Xsxvvkdk3_XvG_I5wvshw_I8OY"
}
```
:::

| Error Codes | Description |
| ----------- | ----------- |
| 401 | User is unauthorized. Make sure that user has proper permissions assigned. |
| 404 | Token does not exist. |
| 500 | Unexpected application error. Check your PHP error log for more detail. |

## Reset all tokens

`POST /aam/v2/service/jwt/reset`

Reset all tokens. In other words - delete all issued tokens for a given user.

::: code-tabs

@tab curl

```shell:active
curl --request POST \
     --url https://<your-server-domain>/aam/v2/service/jwt/reset \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <jwt-token>'
```

@tab js

```js
const axios = require('axios');

axios.post('https://<your-server-domain>/aam/v2/service/jwt/reset', {
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer <jwt-token>'
    }
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```

@tab wp-php

```php
<?php

wp_remote_post('https://<your-server-domain>/aam/v2/service/jwt/reset', [
    'headers' => [
        'Accept: application/json',
        'Authorization': 'Bearer <jwt-token>'
    ]
]);
```
:::

| Params | Description |
| ------ | ----------- |
| `user_id` | **Required**. User ID. |

::: details Response Sample
```json
{
    "deleted_token_count": 4
}
```
:::

| Error Codes | Description |
| ----------- | ----------- |
| 401 | User is unauthorized. Make sure that user has proper permissions assigned. |
| 500 | Unexpected application error. Check your PHP error log for more detail. |