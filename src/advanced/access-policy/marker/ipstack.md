---
title: IPSTACK
---

::: info Note!
The `IPSTACK` is the custom marker available with the premium [Complete Package](/premium) add-on.
:::

Invoke the [ipstack.com](https://ipstack.com/) API to obtain the geolocation information based on the user’s IP address.

In the example below, we deny access to the _backend_ area to anybody outside of New York City.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Capability:aam_access_dashboard",
            "Condition": {
                "NotEquals": {
                    "${IPSTACK.region_code}": "NY"
                }
            }
        }
    ]
}
```

The `IPSTACK` marker can target any property the API returns. It is documented in their [official documentation](https://ipstack.com/documentation).