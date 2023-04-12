---
title: URL Access
---

## Get all rules

Get the list of all URL access rules for the requested subject.

`GET /aam/v2/service/url`

| Params | Description |
| ------ | ----------- |
| `access_level` | **Required**. Can be either `role`, `user`, `visitor` or `default`. |
| `role_id` | **Conditionally required**. The option is required if the `access_level` is "role". |
| `user_id` | **Conditionally required**. The option is required if the `access_level` is "user". |

## Get a rule

`GET /aam/v2/service/url/<id>`

| Params | Description |
| ------ | ----------- |
| `id` | **Required**. The unique URL hash. |
| `access_level` | **Required**. Can be either `role`, `user`, `visitor` or `default`. |
| `role_id` | **Conditionally required**. The option is required if the `access_level` is "role". |
| `user_id` | **Conditionally required**. The option is required if the `access_level` is "user". |

## Create new rule

`POST /aam/v2/service/url`

| Params | Description |
| ------ | ----------- |
| `access_level` | **Required**. Can be either `role`, `user`, `visitor` or `default`. |
| `role_id` | **Conditionally required**. The option is required if the `access_level` is "role". |
| `user_id` | **Conditionally required**. The option is required if the `access_level` is "user". |
| `url` | **Required**. Valid URL or relative path on the website. |
| `type` | **Required**. Rule type. The allowed values are `allow`, `deny`, `custom_message`, `page_redirect`, `url_redirect`, `trigger_callback` and `login_redirect`. |
| `message` | **Conditionally required**. The custom message if the `type=custom_message`. The message can be a plain text or rich HTML. The value is sanitized with [esc_js](https://developer.wordpress.org/reference/functions/esc_js/) WordPress core function. |
| `redirect_page_id` | **Conditionally required**. The valid and existing page ID if the `type=page_redirect`. |
| `redirect_url` | **Conditionally required**. Valid URL or relative path on the website if the `type=url_redirect`. |
| `callback` | **Conditionally required**. The valid callback function if the `type=trigger_callback`. The value is sanitized with the [is_callable](https://www.php.net/manual/en/function.is-callable) PHP core function and checks only for valid syntax. |
| `http_redirect_code` | _Optional_. HTTP redirect code in case of URL or page redirect. |

## Update existing rule

`PATCH /aam/v2/service/url/<id>`

| Params | Description |
| ------ | ----------- |
| `id` | **Required**. The unique URL hash. |
| `access_level` | **Required**. Can be either `role`, `user`, `visitor` or `default`. |
| `role_id` | **Conditionally required**. The option is required if the `access_level` is "role". |
| `user_id` | **Conditionally required**. The option is required if the `access_level` is "user". |
| `url` | **Required**. Valid URL or relative path on the website. |
| `type` | **Required**. Rule type. The allowed values are `allow`, `deny`, `custom_message`, `page_redirect`, `url_redirect`, `trigger_callback` and `login_redirect`. |
| `message` | **Conditionally required**. The custom message if the `type=custom_message`. The message can be a plain text or rich HTML. The value is sanitized with [esc_js](https://developer.wordpress.org/reference/functions/esc_js/) WordPress core function. |
| `redirect_page_id` | **Conditionally required**. The valid and existing page ID if the `type=page_redirect`. |
| `redirect_url` | **Conditionally required**. Valid URL or relative path on the website if the `type=url_redirect`. |
| `callback` | **Conditionally required**. The valid callback function if the `type=trigger_callback`. The value is sanitized with the [is_callable](https://www.php.net/manual/en/function.is-callable) PHP core function and checks only for valid syntax. |
| `http_redirect_code` | _Optional_. HTTP redirect code in case of URL or page redirect. |

## Delete rule

`DELETE /aam/v2/service/url/<id>`

| Params | Description |
| ------ | ----------- |
| `id` | **Required**. The unique URL hash. |
| `access_level` | **Required**. Can be either `role`, `user`, `visitor` or `default`. |
| `role_id` | **Conditionally required**. The option is required if the `access_level` is "role". |
| `user_id` | **Conditionally required**. The option is required if the `access_level` is "user". |

## Reset all rules

`POST /aam/v2/service/url/reset`

| Params | Description |
| ------ | ----------- |
| `access_level` | **Required**. Can be either `role`, `user`, `visitor` or `default`. |
| `role_id` | **Conditionally required**. The option is required if the `access_level` is "role". |
| `user_id` | **Conditionally required**. The option is required if the `access_level` is "user". |