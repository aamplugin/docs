---
title: Capability
---

### Syntax

`Capability:<capability-slug>`

### Definition

AAM treats WordPress capability as a stand-alone resource that can be assigned or deprived of any role or user.

The following policy grants the ability to install, activate and deactivate plugins.

```json
{
    "Statement": [
        {
            "Effect": "allow",
            "Resource": [
                "Capability:install_plugins",
                "Capability:activate_plugins"
            ]
        }
    ]
}
```