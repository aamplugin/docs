---
title: Hook
---

### Syntax

`Hook:<filter-or-action-name>`<br/>
`Hook:<filter-or-action-name>:<priority>`

::: info Note!
If `priority` is not specified, it defaults to `10`.
:::

### Definition

Target a [hook](https://developer.wordpress.org/plugins/hooks/) (action or filter) and either deny its execution or hook into the filters chain and modify the response as specified by [Effect](/advanced/access-policy/policy-overview#effect). You can target only actions and filters registered after  [plugins_loaded](https://developer.wordpress.org/reference/hooks/plugins_loaded/) action.

Currently, AAM support two different ways to modify the return value:

- `apply` or `override` replaces the response value completely.
- `merge` assumes that value is an array and merges it with provided array values.

For example, you want to hide all the extra widgets on the edit category page for users rendered by plugins like _Yoast_ or _AAM_. In this case, you should unregister all the callbacks attached to the action  [category_edit_form](https://developer.wordpress.org/reference/hooks/taxonomy_edit_form/) with priority 10.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": [
                "Hook:category_edit_form_fields:*",
                "Hook:category_edit_form:*"
            ]
        }
    ]
}
```

::: info Note!
In the example above, the wildcard `*` (asterisk) works with premium [Complete Package](/premium) add-on. It allows to target all the priorities, which is helpful if you are unsure about the registered callback priority.
:::

In the following example, we attend to override the filters response for the plugin “Funnel Builder”.

```json
{
    "Statement": [
        {
            "Effect": "override",
            "Resource": "Hook:wffn_user_access_capabilities:11",
            "Response": {
                "editor": {
                    "menu": [
                        "read",
                        "write"
                    ],
                    "funnel": [
                        "read",
                        "write"
                    ],
                    "analytics": [
                        "read",
                        "write"
                    ]
                }
            }
        }
    ]
}
```

In the following example, we add additional list of trusted domains:

```json
{
    "Statement": [
        {
            "Effect": "merge",
            "Resource": "Hook:allowed_redirect_hosts",
            "Response": [
                "members.aamportal.com",
                "store.aamportal.com"
            ]
        }
    ]
}
```