---
title: CONST
---

#### Syntax

`${CONST.<constantName>}`

#### Definition

Get value for any globally defined constant declared with the [define](https://www.php.net/manual/en/function.define.php) PHP core function.

For example, in the following policy we restrict the ability to edit any _terms_ that belong to the “Product Category” taxonomy if a request comes from the RESTful API.

```json
{
    "Statement": [
        {
            "Effect": "deny",
            "Resource": "Taxonomy:product_category:terms",
            "Action": [
                "Edit",
                "Delete"
            ],
            "Condition": {
                "Equals": {
                    "(*bool)${CONST.REST_REQUEST}": true
                }
            }
        }
    ]
}
```