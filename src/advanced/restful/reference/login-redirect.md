---
title: Login Redirect
---

## Get redirect

Get current login redirect settings for given access level.

`GET /aam/v2/service/redirect/login`

| Params | Description |
| ------ | ----------- |
| `access_level` | **Required**. Can be either `role`, `user`, `visitor` or `default`. |
| `role_id` | **Conditionally required**. The option is required if the `access_level` is "role". |
| `user_id` | **Conditionally required**. The option is required if the `access_level` is "user". |

## Set redirect

`POST /aam/v2/service/redirect/login`

| Params | Description |
| ------ | ----------- |
| `access_level` | **Required**. Can be either `role`, `user`, `visitor` or `default`. |
| `role_id` | **Conditionally required**. The option is required if the `access_level` is "role". |
| `user_id` | **Conditionally required**. The option is required if the `access_level` is "user". |
| `type` | **Required**. The redirect type. The allowed values are `page_redirect`, `url_redirect`, `trigger_callback` and `default`. |
| `redirect_page_id` | **Conditionally required**. The valid and existing page ID if the `type=page_redirect`. |
| `redirect_url` | **Conditionally required**. Valid URL or relative path on the website if the `type=url_redirect`. |
| `callback` | **Conditionally required**. The valid callback function if the `type=trigger_callback`. The value is sanitized with the [is_callable](https://www.php.net/manual/en/function.is-callable) PHP core function and checks only for valid syntax. |

## Reset redirect

`DELETE /aam/v2/service/redirect/login`

| Params | Description |
| ------ | ----------- |
| `access_level` | **Required**. Can be either `role`, `user`, `visitor` or `default`. |
| `role_id` | **Conditionally required**. The option is required if the `access_level` is "role". |
| `user_id` | **Conditionally required**. The option is required if the `access_level` is "user". |