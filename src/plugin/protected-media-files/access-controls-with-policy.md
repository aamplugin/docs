---
title: Manage access with policies
order: 5
---

All the access controls, defined with the AAM UI, can be replicated with the [access policies](/advanced/access-policy/). It is the recommended way to manage your access controls to any website resources. However, if you are not a tech-savvy person, it may appear challenging to grasp. With determination and perseverance, you can learn it, so do not give up if you choose to take this route.

When you need to manage access to the files that are part of the _Media Library_, you can target them with the [Post](/advanced/access-policy/resource-action/post), [PostType](/advanced/access-policy/resource-action/posttype), [Term](/advanced/access-policy/resource-action/term) and [Taxonomy](/advanced/access-policy/resource-action/taxonomy) resources.

If you have to manage access to files' URLs directly, then use the [URI](/advanced/access-policy/resource-action/uri) resource.

Here we provide several examples to define access controls to the files with access policies.

## Use Post resource

The `Post` resource directly targets a media item and is a great option when you need to define access controls to a limited number of items. It also is available with the free AAM.

In the following example, we hide and restrict direct access to a media item.

```json
{
    "Dependency": {
        "wordpress": ">=6.1.1",
        "advanced-access-manager": ">=6.9.5",
        "aam-protected-media-files": ">=1.2.0"
    },
    "Statement": [
        {
            "Effect": "deny",
            "Resource": [
                "Post:attachment:armadillo-large"
            ],
            "Action": [
                "List",
                "Read"
            ]
        }
    ]
}
```
::: info Note!
The resource `Post:attachment:armadillo-large` uses the media item's slug `armadillo-large`. With the same success, you can use its numeric post ID.
:::

## Use PostType resource

You can use the `PostType` resource to set the default access controls to all posts of a given post type. For example, the `PostType:attachment:posts` targets all media items in the library. In the following example, we restrict access to all media items except one.

```json
{
    "Dependency": {
        "wordpress": ">=6.1.1",
        "advanced-access-manager": ">=6.9.5",
        "aam-complete-package": "^6.0.0",
        "aam-protected-media-files": ">=1.2.0"
    },
    "Statement": [
        {
            "Effect": "deny",
            "Resource": [
                "PostType:attachment:posts"
            ],
            "Action": [
                "List",
                "Read"
            ]
        },
        {
            "Effect": "allow",
            "Resource": [
                "Post:attachment:armadillo-large"
            ],
            "Action": [
                "List",
                "Read"
            ]
        }
    ]
}
```

## Use Term resource

The Complete Package add-on introduces a custom taxonomy `media_category` that allows you to group media items into categories. This way you can target a specific category with the [Term](/advanced/access-policy/resource-action/term) resource.

In the following example, we restrict access to all the media items that belong to the "Restricted Documents" category.

```json
{
    "Dependency": {
        "wordpress": ">=6.1.1",
        "advanced-access-manager": ">=6.9.5",
        "aam-complete-package": "^6.0.0",
        "aam-protected-media-files": ">=1.2.0"
    },
    "Statement": [
        {
            "Effect": "deny",
            "Resource": [
                "Term:media_category:restricted-documents:posts"
            ],
            "Action": [
                "List",
                "Read"
            ]
        }
    ]
}
```
::: info FYI!
You can register your own custom taxonomies with the `attachment` post type and define access controls with them. Use WordPress core function [register_taxonomy](https://developer.wordpress.org/reference/functions/register_taxonomy/) or leverage any third-party plugin that allows creating custom taxonomies with UI.
:::

## Use URI resource

Last but not least, the [URI](/advanced/access-policy/resource-action/uri) resource allows defining access controls based on the URL pattern. It is a good option if your files are not part of the _Media Library_.

In the following example, we restrict access to all PDF files disregarding in what sub-directory or `/wp-content/uploads/` they are located.

```json
{
    "Dependency": {
        "wordpress": ">=6.1.1",
        "advanced-access-manager": ">=6.9.5",
        "aam-complete-package": "^6.0.0",
        "aam-protected-media-files": ">=1.2.0"
    },
    "Statement": [
        {
            "Effect": "deny",
            "Resource": [
                "URI:/wp-content/uploads/*.pdf"
            ]
        }
    ]
}
```