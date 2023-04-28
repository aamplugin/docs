---
title: JWT Tokens
---

## Get all tokens

Get the list of all tokens issued for the given user

`GET /aam/v2/service/jwt`

| Params | Description |
| ------ | ----------- |
| `user_id` | **Required**. User ID. |

## Get a token

`GET /aam/v2/service/jwt/<id>`

| Params | Description |
| ------ | ----------- |
| `id` | **Required**. The unique JWT token ID (aka `jti`). |
| `user_id` | **Required**. User ID. |

## Create new token

`POST /aam/v2/service/jwt`

| Params | Description |
| ------ | ----------- |
| `user_id` | **Required**. User ID. |
| `url` | **Required**. Valid URL or relative path on the website. |
| `expires_at` | _Optional_. Valid date-time string in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format that is in the future. The token will expire after given date-time. |
| `expires_in` | _Optional_. Another way to specify the token's expiration date. This properly accepts a valid [date and time format](https://www.php.net/manual/en/datetime.formats.php) that PHP can parse into a DateTime object with [strtotime](https://www.php.net/manual/en/function.strtotime.php) core function. |
| `is_refreshable` | _Optional_. Wether token can be used to obtain a new token before it is expired. |
| `additional_claims` | _Optional_. An optional collection of claims that can be added to the token. |

## Delete a token

`DELETE /aam/v2/service/jwt/<id>`

| Params | Description |
| ------ | ----------- |
| `id` | **Required**. The unique JWT token ID. |
| `user_id` | **Required**. User ID. |

## Reset all tokens

`POST /aam/v2/service/jwt/reset`

| Params | Description |
| ------ | ----------- |
| `user_id` | **Required**. User ID. |