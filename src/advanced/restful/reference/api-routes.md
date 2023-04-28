---
title: API Routes
---

## Get all routes

Get the list of all RESTful API routes with information if access is allowed or denied

`GET /aam/v2/service/api-route`

| Params | Description |
| ------ | ----------- |
| `access_level` | **Required**. Can be either `role`, `user`, `visitor` or `default`. |
| `role_id` | **Conditionally required**. The option is required if the `access_level` is "role". |
| `user_id` | **Conditionally required**. The option is required if the `access_level` is "user". |

## Update route's permission

`PATCH /aam/v2/service/api-route/<id>`

| Params | Description |
| ------ | ----------- |
| `id` | **Required**. The unique URL hash. |
| `access_level` | **Required**. Can be either `role`, `user`, `visitor` or `default`. |
| `role_id` | **Conditionally required**. The option is required if the `access_level` is "role". |
| `user_id` | **Conditionally required**. The option is required if the `access_level` is "user". |
| `is_restricted` | **Required**. Wether access to the route is allowed or denied. |

## Delete route's permission

`DELETE /aam/v2/service/api-route/<id>`

| Params | Description |
| ------ | ----------- |
| `id` | **Required**. The unique URL hash. |
| `access_level` | **Required**. Can be either `role`, `user`, `visitor` or `default`. |
| `role_id` | **Conditionally required**. The option is required if the `access_level` is "role". |
| `user_id` | **Conditionally required**. The option is required if the `access_level` is "user". |

## Reset all permissions

`POST /aam/v2/service/api-route/reset`

| Params | Description |
| ------ | ----------- |
| `access_level` | **Required**. Can be either `role`, `user`, `visitor` or `default`. |
| `role_id` | **Conditionally required**. The option is required if the `access_level` is "role". |
| `user_id` | **Conditionally required**. The option is required if the `access_level` is "user". |