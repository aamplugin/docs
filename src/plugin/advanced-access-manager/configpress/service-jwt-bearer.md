---
title: service.jwt.bearer
---

### Syntax

`service.jwt.bearer = "string"`

The default value: `header,query_param,post_param,cookie`

### Definition

The comma separated list of locations to look for a JWT token. When [JWT Tokens](/plugin/advanced-access-manager/service/jwt) service is enabled, AAM uses the list of provided places to search for JWT token that can be used to authenticate the HTTP request. This entire functionality is automatically invoced when WordPress core triggers the [determine_current_user](https://developer.wordpress.org/reference/hooks/determine_current_user/) filter.

A JWT token can be passed as:
- the part of HTTP headers. The common header name is `Authorization`, however, you can configure a custom header with [service.jwt.header_name](/plugin/advanced-access-manager/configpress/service-jwt-header-name) option.
- HTTP query (aka GET) parameter. The expected query parameter name is `aam-jwt`, however, it can be customized with [service.jwt.query_param_name](/plugin/advanced-access-manager/configpress/service-jwt-query-param-name) option.
- HTTP POST parameter. The expected parameter name is `aam-jwt`, however, it can be customized with [service.jwt.post_param_name](/plugin/advanced-access-manager/configpress/service-jwt-post-param-name) option.
- HTTP cookie. The expected cookie name is `aam_jwt_token`, however, you can customize it with [service.jwt.cookie_name](/plugin/advanced-access-manager/configpress/service-jwt-cookie-name) option.
- Custom bearer. When none of the above satisfy your requirements, you may use the [aam_extract_jwt_filter](/advanced/hooks/aam_extract_jwt_filter) filter to extract the token.

In the example configurations below, AAM will attempt to extract the JWT token only from HTTP headers and query param.

```ini
[aam]
service.jwt.bearer = "header,query_param"
```