---
title: Framework Manager
order: 2
---

The framework manager is a single entry point to the framework. It is a  class `AAM_Framework_Manager` that contains only static methods. These methods return an instance of the service you want to interact. At the moment, we offer only the [Roles](/advanced/api/service/roles) service and we take an iterative approach to convert the majority of the AAM functionality into new services.

```php
class AAM_Framework_Manager {

    public static roles() : AAM_Framework_Service_Roles
    public static urls(AAM_Framework_Model_ServiceContext $runtime_context = null) : AAM_Framework_Service_Urls
    public static api_routes(AAM_Framework_Model_ServiceContext $runtime_context = null) : AAM_Framework_Service_ApiRoutes
    public static jwts(AAM_Framework_Model_ServiceContext $runtime_context = null) : AAM_Framework_Service_Jwts
    public static login_redirect(AAM_Framework_Model_ServiceContext $runtime_context = null) : AAM_Framework_Service_LoginRedirect
    public static backend_menu(AAM_Framework_Model_ServiceContext $runtime_context = null) : AAM_Framework_Service_BackendMenu

}
```

The class automatically loads through PHP autoloader as long as you have the [Advanced Access Manager](/plugin/advanced-access-manager/) plugin active.

::: info FYI!
Nothing stops you from bypassing the framework manager and instantiating an individual service directly. The only issue is that we cannot guarantee any backward compatibilities if we change any service's API in the near future. The framework manager guarantees backward compatibility.
:::