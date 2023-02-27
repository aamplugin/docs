---
title: Roles
order: 4
---

::: info Note!
All the API endpoints below require a user to have the proper set of capabilities as follows.

- If the [aam_manager](/plugin/advanced-access-manager/capability/aam_manager) custom capability is not registered in the system, the user has to be an _Administrator_.
- If the custom capability [aam_manager](/plugin/advanced-access-manager/capability/aam_manager) is registered, then the user has to have it assigned and an additional one as outlined in the documentation below.

For more detail, refer to the [How to manage access to AAM page for other users?](/question/aam/manage-access-to-aam-for-other-users) Q&A.
:::

## Get roles

`GET /roles`

Get the list of all editable roles. AAM relies on the WordPress core filter [editable_roles](https://developer.wordpress.org/reference/hooks/editable_roles/) to determine the final list of returned roles. The requesting user has to have both [aam_manager](/plugin/advanced-access-manager/capability/aam_manager) and [aam_manage_roles](/plugin/advanced-access-manager/capability/aam_manage_roles) assigned to access this endpoint.

::: code-tabs

@tab curl

```shell:active
curl --request GET \
     --url https://<your-server-domain>/aam/v2/roles?fields=capabilities \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <jwt-token>'
```

@tab js

```js
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://<your-server-domain>/aam/v2/roles', {
    params: {
        fields: 'capabilities'
    },
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer <jwt-token>'
    }
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```

@tab wp-php

```php
<?php

wp_remote_get('https://<your-server-domain>/aam/v2/roles?fields=capabilities', [
    'headers' => [
        'Accept: application/json',
        'Authorization': 'Bearer <jwt-token>'
    ]
]);
```

:::

| Query Params | Description |
| ------------ | ----------- |
| `fields` | _Optional_. Comma-separated list of additional fields to return. The supported values are `capabilities`, `permissions`, `user_count`. To extend the list of supported fields, use [aam_role_field_filter](/advanced/hooks/aam_role_field_filter) filter. By default, only the `slug` and `name` are returned. |

::: details Response Sample
```json
[
    {
        "slug": "administrator",
        "name": "Administrator",
        "capabilities": {
            "switch_themes": true,
            "edit_themes": true,
            "activate_plugins": true,
            "edit_plugins": true,
            "edit_users": true,
            "edit_files": true,
            "manage_options": true,
            "moderate_comments": true,
            "manage_categories": true,
            "manage_links": true,
            "upload_files": true,
            "import": true,
            "unfiltered_html": true,
            "edit_posts": true,
            "edit_others_posts": true,
            "edit_published_posts": true,
            "publish_posts": true,
            "edit_pages": true,
            "read": true,
            "level_10": true,
            "level_9": true,
            "level_8": true,
            "level_7": true,
            "level_6": true,
            "level_5": true,
            "level_4": true,
            "level_3": true,
            "level_2": true,
            "level_1": true,
            "level_0": true,
            "edit_others_pages": true,
            "edit_published_pages": true,
            "publish_pages": true,
            "delete_pages": true,
            "delete_others_pages": true,
            "delete_published_pages": true,
            "delete_posts": true,
            "delete_others_posts": true,
            "delete_published_posts": true,
            "delete_private_posts": true,
            "edit_private_posts": true,
            "read_private_posts": true,
            "delete_private_pages": true,
            "edit_private_pages": true,
            "read_private_pages": true,
            "delete_users": true,
            "create_users": true,
            "unfiltered_upload": true,
            "edit_dashboard": true,
            "update_plugins": true,
            "delete_plugins": true,
            "install_plugins": true,
            "update_themes": true,
            "install_themes": true,
            "update_core": true,
            "list_users": true,
            "remove_users": true,
            "promote_users": true,
            "edit_theme_options": true,
            "delete_themes": true,
            "export": true,
            "aam_manager": true
        },
        "permissions": [
            "allow_manage",
            "allow_edit",
            "allow_clone"
        ],
        "user_count": 1
    },
    {
        "slug": "editor",
        "name": "Editor",
        "capabilities": {
            "moderate_comments": true,
            "manage_categories": true,
            "manage_links": true,
            "upload_files": true,
            "unfiltered_html": true,
            "edit_posts": true,
            "edit_others_posts": true,
            "edit_published_posts": true,
            "publish_posts": true,
            "edit_pages": true,
            "read": true,
            "level_7": true,
            "level_6": true,
            "level_5": true,
            "level_4": true,
            "level_3": true,
            "level_2": true,
            "level_1": true,
            "level_0": true,
            "edit_others_pages": true,
            "edit_published_pages": true,
            "publish_pages": true,
            "delete_pages": true,
            "delete_others_pages": true,
            "delete_published_pages": true,
            "delete_posts": true,
            "delete_others_posts": true,
            "delete_published_posts": true,
            "delete_private_posts": true,
            "edit_private_posts": true,
            "read_private_posts": true,
            "delete_private_pages": true,
            "edit_private_pages": true,
            "read_private_pages": true,
            "aam_manager": true,
            "aam_manage_users": true,
            "aam_manage_admin_menu": false,
            "aam_manage_toolbar": false,
            "aam_manage_metaboxes": false,
            "aam_manage_capabilities": false,
            "aam_manage_content": true,
            "aam_manage_api_routes": false,
            "aam_manage_access_denied_redirect": false,
            "aam_manage_login_redirect": false,
            "aam_manage_logout_redirect": false,
            "aam_manage_404_redirect": false
        },
        "permissions": [
            "allow_manage",
            "allow_edit",
            "allow_clone"
        ],
        "user_count": 1
    },
    {
        "slug": "author",
        "name": "Author",
        "capabilities": {
            "upload_files": true,
            "edit_posts": true,
            "edit_published_posts": true,
            "publish_posts": true,
            "read": true,
            "level_2": true,
            "level_1": true,
            "level_0": true,
            "delete_posts": true,
            "delete_published_posts": true
        },
        "permissions": [
            "allow_manage",
            "allow_edit",
            "allow_slug_update",
            "allow_clone",
            "allow_delete"
        ],
        "user_count": 0
    },
    {
        "slug": "contributor",
        "name": "Contributor",
        "capabilities": {
            "edit_posts": true,
            "read": true,
            "level_1": true,
            "level_0": true,
            "delete_posts": true
        },
        "permissions": [
            "allow_manage",
            "allow_edit",
            "allow_clone"
        ],
        "user_count": 2
    },
    {
        "slug": "subscriber",
        "name": "Subscriber",
        "capabilities": {
            "read": true,
            "level_0": true
        },
        "permissions": [
            "allow_manage",
            "allow_edit",
            "allow_slug_update",
            "allow_clone",
            "allow_delete"
        ],
        "user_count": 0
    }
]
```
:::

| Error Codes | Description |
| ----------- | ----------- |
| 401 | User is unauthorized. Make sure that user has proper permissions assigned. |
| 500 | Unexpected application error. Check your PHP error log for more detail. |

## Get a role

`GET /role/<slug>`

Get a role by slug. The requesting user has to have both [aam_manager](/plugin/advanced-access-manager/capability/aam_manager) and [aam_manage_roles](/plugin/advanced-access-manager/capability/aam_manage_roles) assigned to access this endpoint.

::: code-tabs

@tab curl

```shell:active
curl --request GET \
     --url https://<your-server-domain>/aam/v2/role/subscriber \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <jwt-token>'
```

@tab js

```js
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://<your-server-domain>/aam/v2/role/subscriber', {
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer <jwt-token>'
    }
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```

@tab wp-php

```php
<?php

wp_remote_get('https://<your-server-domain>/aam/v2/role/subscriber', [
    'headers' => [
        'Accept: application/json',
        'Authorization': 'Bearer <jwt-token>'
    ]
]);
```

:::

| Query Params | Description |
| ------------ | ----------- |
| `fields` | _Optional_. Comma-separated list of additional fields to return. The supported values are `capabilities`, `permissions`, `user_count`. To extend the list of supported fields, use [aam_role_field_filter](/advanced/hooks/aam_role_field_filter) filter. |

::: details Response Sample
```json
{
    "slug": "subscriber",
    "name": "Subscriber",
    "capabilities": {
        "read": true,
        "level_0": true
    },
    "permissions": [
        "allow_manage",
        "allow_edit",
        "allow_slug_update",
        "allow_clone",
        "allow_delete"
    ],
    "user_count": 0
}
```
:::

| Error Codes | Description |
| ----------- | ----------- |
| 401 | User is unauthorized. Make sure that user has proper permissions assigned. |
| 404 | Either specified role does not exist or it is not editable by current user. AAM relies on the WordPress core filter [editable_roles](https://developer.wordpress.org/reference/hooks/editable_roles/) to determine if role is editable. |
| 500 | Unexpected application error. Check your PHP error log for more detail. |

## Create new role

`POST /role`

Create new role. The requesting user has to have both [aam_manager](/plugin/advanced-access-manager/capability/aam_manager) and [aam_create_roles](/plugin/advanced-access-manager/capability/aam_create_roles) assigned to access this endpoint.

::: code-tabs
@tab curl

```shell:active
curl --request POST \
     --url https://<your-server-domain>/aam/v2/role \
     --data '{"name":"Custom Role","slug":"custom_role"}'
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <jwt-token>'
```

@tab js

```js
const axios = require('axios');

// Make a request for a user with a given ID
axios.post('https://<your-server-domain>/aam/v2/role', {
    data: {
        name: 'Custom Role',
        slug: 'custom_role',
        capabilities: [
            'cap_a',
            'cap_b'
        ]
    },
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer <jwt-token>'
    }
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```

@tab wp-php

```php
<?php

wp_remote_post('https://<your-server-domain>/aam/v2/role', [
    'headers' => [
        'Accept: application/json',
        'Authorization': 'Bearer <jwt-token>'
    ],
    'body' => [
        'name'         => 'Custom Role',
        'slug'         => 'custom_role',
        'capabilities' => [
            'cap_a',
            'cap_b'
        ]
    ]
]);
```
:::

| Params | Description |
| ------ | ----------- |
| `name` | **Required**. The role's name. Can be any characters or in any language. Best practice is to keep the name short and intuitive. Avoid creating multiple roles with the same or similar names to prevent from human errors.  |
| `slug` | _Optional_. Unique role identifier. If not provided, AAM generates a random string with [uniqid](https://www.php.net/manual/en/function.uniqid) PHP function. If provided, AAM sanitizes it with [sanitize_key](https://developer.wordpress.org/reference/functions/sanitize_key/). |
| `capabilities` | _Optional_. List of capabilities to assign to the new role. All capabilities have to comply with WordPress core requirements for _keys_ - lowercase alphanumeric characters, dashes, and underscores are allowed. The list may contain new capabilities. |
| `parent_role` | _Optional_. Available with the [Premium Complete Package](/premium) only. Specify the parent role for the newly create role. |
| `clone_role` | _Optional_. Existing role's slug to use to clone the list of capabilities from. |
| `clone_role_settings` | _Optional_. Existing role's slug to use to clone all AAM access controls from. |
| `fields` | _Optional_. Comma-separated list of additional fields to return when new role is created. The supported values are `capabilities`, `permissions`, `user_count`. To extend the list of supported fields, use [aam_role_field_filter](/advanced/hooks/aam_role_field_filter) filter. |

::: details Response Sample
```json
{
    "slug": "test_role",
    "name": "Test Role",
    "capabilities": {
        "read": true
    },
    "permissions": [
        "allow_manage",
        "allow_edit",
        "allow_slug_update",
        "allow_clone",
        "allow_delete"
    ],
    "userCount": 0
}
```
:::

| Error Codes | Description |
| ----------- | ----------- |
| 206 | The new role was created successfully, however, failed to clone access settings from the cloning role. |
| 400 | Invalid input. |
| 401 | User is unauthorized. Make sure that user has proper permissions assigned. |
| 404 | The cloning or parent role does not exist or it is not editable by current user. AAM relies on the WordPress core filter [editable_roles](https://developer.wordpress.org/reference/hooks/editable_roles/) to determine if role is editable. |
| 409 | The new role attributes violate WP core rules. For example, overlapping role slug. |
| 500 | Unexpected application error. Check your PHP error log for more detail. |

## Update existing role

`PATCH /role/<slug>`


Update existing role. The requesting user has to have both [aam_manager](/plugin/advanced-access-manager/capability/aam_manager) and [aam_edit_roles](/plugin/advanced-access-manager/capability/aam_edit_roles) assigned to access this endpoint.

::: code-tabs
@tab curl

```shell:active
curl --request PATCH \
     --url https://<your-server-domain>/aam/v2/role/custom_role \
     --data '{"name":"New Name"}'
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <jwt-token>'
```

@tab js

```js
const axios = require('axios');

// Make a request for a user with a given ID
axios.patch('https://<your-server-domain>/aam/v2/role/custom_role', {
    data: {
        name: 'New Name',
        add_capabilities: [
            'cap_c',
            'cap_d'
        ]
    },
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer <jwt-token>'
    }
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```

@tab wp-php

```php
<?php

wp_remote_request('https://<your-server-domain>/aam/v2/role/custom_role', [
    'method' => 'PATCH',
    'headers' => [
        'Accept: application/json',
        'Authorization': 'Bearer <jwt-token>'
    ],
    'body' => [
        'name'             => 'New Name',
        'add_capabilities' => [
            'cap_c',
            'cap_d'
        ]
    ]
]);
```
:::

| Params | Description |
| ------ | ----------- |
| `name` | _Optional_. The role's name. Can be any characters or in any language. Best practice is to keep the name short and intuitive. Avoid creating multiple roles with the same or similar names to prevent from human errors.  |
| `new_slug` | _Optional_. New unique role slug. If provided, AAM sanitizes it with [sanitize_key](https://developer.wordpress.org/reference/functions/sanitize_key/) and validates that it does not overlap with any existing role. The request will be rejected if updating role has at least one user assigned. |
| `add_capabilities` | _Optional_. List of capabilities to assign to the role. All capabilities have to comply with WordPress core requirements for _keys_ - lowercase alphanumeric characters, dashes, and underscores are allowed. The list may contain new capabilities. |
| `remove_capabilities` | _Optional_. List of capabilities to remove from the role. All capabilities have to comply with WordPress core requirements for _keys_ - lowercase alphanumeric characters, dashes, and underscores are allowed. The list may contain new capabilities. |
| `parent_role` | _Optional_. Available with the [Premium Complete Package](/premium) only. Specify the parent role for the newly create role. |
| `fields` | _Optional_. Comma-separated list of additional fields to return when the role is updated. The supported values are `capabilities`, `permissions`, `user_count`. To extend the list of supported fields, use [aam_role_field_filter](/advanced/hooks/aam_role_field_filter) filter. |

::: details Response Sample
```json
{
    "slug": "test_role",
    "name": "Test Role",
    "capabilities": {
        "read": true
    },
    "permissions": [
        "allow_manage",
        "allow_edit",
        "allow_slug_update",
        "allow_clone",
        "allow_delete"
    ],
    "userCount": 0
}
```
:::

| Error Codes | Description |
| ----------- | ----------- |
| 400 | Invalid input. |
| 401 | User is unauthorized. Make sure that user has proper permissions assigned. |
| 404 | The specified role does not exist or is not editable by the current user. AAM relies on the WordPress core filter [editable_roles](https://developer.wordpress.org/reference/hooks/editable_roles/) to determine if role is editable. |
| 409 | The new role attributes violate WP core rules. For example, overlapping role slug |
| 500 | Unexpected application error. Check your PHP error log for more detail. |

## Delete existing role

`DELETE /role/<slug>`

Delete existing role. The requesting user has to have both [aam_manager](/plugin/advanced-access-manager/capability/aam_manager) and [aam_delete_roles](/plugin/advanced-access-manager/capability/aam_delete_roles) assigned to access this endpoint.

::: code-tabs

@tab curl

```shell:active
curl --request DELETE \
     --url https://<your-server-domain>/aam/v2/role/custom_role \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <jwt-token>'
```

@tab js

```js
const axios = require('axios');

// Make a request for a user with a given ID
axios.delete('https://<your-server-domain>/aam/v2/role/custom_role', {
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer <jwt-token>'
    }
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```

@tab wp-php

```php
<?php

wp_remote_request('https://<your-server-domain>/aam/v2/role/custom_role', [
    'method'  => 'DELETE',
    'headers' => [
        'Accept: application/json',
        'Authorization': 'Bearer <jwt-token>'
    ]
]);
```

:::

| Query Params | Description |
| ------------ | ----------- |
| `fields` | _Optional_. Comma-separated list of additional fields to return. The supported values are `capabilities`. To extend the list of supported fields, use [aam_role_field_filter](/advanced/hooks/aam_role_field_filter) filter. |

::: details Response Sample
```json
{
    "slug": "custom_role",
    "name": "Custom Role",
    "capabilities": {
        "read": true,
        "level_0": true
    }
}
```
:::

| Error Codes | Description |
| ----------- | ----------- |
| 401 | User is unauthorized. Make sure that user has proper permissions assigned. |
| 404 | Either specified role does not exist or it is not editable by current user. AAM relies on the WordPress core filter [editable_roles](https://developer.wordpress.org/reference/hooks/editable_roles/) to determine if role is editable. |
| 500 | Unexpected application error. |
| 507 | The input values are correct, however, failed to persist information in the database. |