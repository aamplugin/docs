---
title: boolean
---

#### Syntax

`(*bool)`<br/>
`(*boolean)`

Convert any value to a boolean `true` or `false`. When converting to boolean, the following values are considered as `false`:

- the boolean false itself
- the integer 0 (zero)
- the floats 0.0 and -0.0 (zero)
- the empty string "", and the string "0"
- an array with zero elements
- the unit type NULL (including unset variables)
- Internal objects that overload their casting behavior to bool. For example, SimpleXML objects are created from empty elements without attributes.

::: info FYI!
For more in-depth detail, refer to [the official PHP documentation](https://www.php.net/manual/en/language.types.boolean.php).
:::


#### Example

This policy is designed for a multisite network setup. When there is a need to restrict access to other sites the user does not belong to, you can apply this policy.

If a user is not a member of a site, the access will be denied and handled as defined with the [Access Denied Redirect](/plugin/advanced-access-manager/service/access-deny-redirect) rule (by default “Access Denied” message will be printed).

```json
{
    "Version": "1.0.0",
    "Dependency": {
        "wordpress": ">=5.0.0",
        "advanced-access-manager": ">=6.5.0"
    },
    "Statement": {
        "Effect": "deny",
        "Resource": "Site:${WP_SITE.blog_id}",
        "Condition": {
            "Equals": {
                "(*boolean)${CALLBACK.is_user_member_of_blog}": false
            }
        }
    }
}
```