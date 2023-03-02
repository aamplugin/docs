---
title: Typecasting
---

### Syntax

`(*<type>)`

### Definition

Type casting is the way to convert a value to a chosen type by writing the asterisk `*` and a type within parentheses before the value to convert. It is a helpful utility to ensure the correct values for critical parts of a policy like [conditions](/advanced/access-policy/condition/).

AAM access policy comes with several predefined types like [ip](/advanced/access-policy/typecast/ip), [float](/advanced/access-policy/typecast/float), and [array](/advanced/access-policy/typecast/array). However, you can introduce custom typecasts with the [aam_marker_typecast_filter](/advanced/hooks/aam_marker_typecast_filter) filter.