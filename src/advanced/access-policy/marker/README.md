---
title: Markers
---

### Syntax

`(*type)${SOURCE.pathToProperty}`


### Definition

Think about marker as the way to inject a dynamic value to the access policy. You can specify them literally anywhere in your policy, and AAM recursively replaces them during policy evaluation.

The marker is declared with the leading dollar sign `$` and wrapped curly brackets `{…}`. Inside the curly brackets you specify the _source of data_ and the _property path_ delimited by the `.`. The optional part is [typecast](/advanced/access-policy/typecast/) `(*type)`. There are many usecases where you may find it handy. For example, if you need to refer the current user's email address, you can use `${USER.user_email}` marker.

The the complete list of supported _sources_ we provide in this documentation. However, you can manage a custom source by hooking into the [aam_policy_marker_value_filter](/advanced/hooks/aam_policy_marker_value_filter) filter.

The _property path_ can be complex to give you more flexibility to define its true nature. For example, you can use square brackets `[]` to access an array element by index or get a deeply nested property in the multi-level object. These are just a few examples of valid paths:

- `${CONTEXT.Players[0].profile.name}`
- `${USER.address["physical"].zip}`
- `${MAP.Country[USA][NC][Charlotte]}`
- `${PURCHASE.0929431.amount}`

The common place for markers is the [Conditions](/advanced/access-policy/condition/) section. In the example policy below, we restrict access to the WordPress backend for all users with the email's domain `@gmail.com`.

```json
{
  "Statement": [
    {
      "Effect": "deny",
      "Resource": [
        "Capability:aam_access_dashboard"
      ],
      "Condition": {
        "Like": {
          "${USER.user_email}": "*@gmail.com"
        }
      }
    }
  ]
}
```

With AAM 5.8.2 or higher, you can type cast the marker's value. For example, if you are usure that the `${USER.ID}` returns an integer value, you may cast it to this type.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": ["Capability:aam_access_dashboard"],
            "Condition": {
              "Equals": {
                "(*int)${USER.ID}": 5
              }
            }
        }
    ]
}
```
