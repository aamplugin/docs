---
title: Metabox
---

### Syntax

`Metabox:<metabox-internal-id>`

### Definition

_Metaboxes_ are small functional blocks that typically render on the post-edit screen and identifies by the unique internal ID. Similar to the way [BackendMenu](/advanced/access-policy/resource-action/backendmenu) or [Toolbar](/advanced/access-policy/resource-action/toolbar) resources work.

To ensure the uniqueness of the _metabox_ ID, AAM compiles it by combining the screen name and ID assigned to _metabox_ during registration (for more info, refer to the [add_meta_box](https://developer.wordpress.org/reference/functions/add_meta_box/) WordPress core function). With AAM UI you can easily get the _metabox_ ID on the [Metaboxes & Widgets](/plugin/advanced-access-manager/service/metabox-widget) tab.

![Metabox Widget ID](./assets/metabox-more-details.png)

::: info Note!
AAM only removes metaboxes from the UI. It does not take into consideration the functionality that facilitates those metaboxes. This means that the end-users may reverse engineer the way your website is set up and submit data that hidden metaboxes capture.
:::

Below is an example of the statement that removes the _Excerpt_ metabox on the backend side when a user comes from a specific IP range.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Metabox:post|postexcerpt",
            "Condition": {
                "Between": {
                    "(*ip)${USER.ip}": [
                        "(*ip)10.0.0.0",
                        "(*ip)10.255.255.255"
                    ]
                }
            }
        }
    ]
}
```

The premium [Complete Package](/premium) also adds the ability to use the wildcard `*` denotation to target all _metaboxes_. For example in the statement below, we restrict access to all the _metaboxes_ on all post-edit screens except the "Publish".

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Metabox:*"
        },
        {
            "Effect": "allow",
            "Resource": "Metabox:post|submitdiv"
        }
    ]
}
```