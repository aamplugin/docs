---
title: Role
---

### Syntax

`Role:<role-slug>`

### Definition

AAM treats all WordPress roles (including custom-made) as a resource you can apply to any user or role. The `Role` resource works the same way as if you would go and assign any WordPress role or [multiple roles](/plugin/advanced-access-manager/setting/multi-role-support) to a user on the _Profile Edit_ page.

For example, the following statement assigns the _Editor_ role.

```json
{
    "Statement": {
        "Effect": "allow",
        "Resource": [
            "Role:editor"
        ]
    }
}
```

The `Role` resource expects a valid role ID (aka `slug`) that you can find on the AAM ["Users & Roles widget"](/plugin/advanced-access-manager/ui-overview#access-page).