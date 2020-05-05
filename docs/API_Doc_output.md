# BBData Output API API documentation
<a href="https://bbdata.daplab.ch/api/" target="blank">https://bbdata.daplab.ch/api/</a>

## Overview
![alt_text](../static/img/bbdata_logo.png 'BBData_Logo')

This document describes the different endpoints available through the bbdata output api endpoint, a json REST api to let you manage, view, and consult objects and values.

## Other resources
- <a href="https://bbdata-admin.daplab.ch/auth/" target="blank">bbdata admin interface:</a> a web interface to manage objects, objectgroups, users and permissions.
- <a href="https://bbdata.daplab.ch/input/" target="blank">input api:</a> api used to manage objects, permissions, users and query measures.
- <a href="https://gitlab.forge.hefr.ch/users/sign_in" target="blank">source code</a> bbdata organisation on gitlab.forge (protected)

## Changelog
### v0.4
- add endpoints ```/values/quarters``` and ```/values/hours``` to query aggregations
- support CSV media-type for all endpoints under ```/values```. Now, you can also get values in a CSV format by specifying ```Content-Type: text/plain``` in the header!
- support for optional header and prettyprint: for all endpoints under ```/values```, use the query param ```headers=true``` to get headers (CSV) and ```prettyprint=true```to have your json response in a readable and formatted way (more overhead, though).
- **WARNING:** values (endpoint ```/values```) are not automatically cast to int or float anymore, but **always returned as strings**

### v0.3.2
- move ```/objects/{id}/values``` endpoints to ```/objects/values```
- create a ```/value``` subresource and add a ```/values/latest``` endpoint
- add more query parameters to ```/objects``` endpoint: search, pagination

### v0.3
- add ```/objects/{id}/enabled``` and ```/objects/{id}/disabled``` endpoints
- add ```/comments``` subresource
- more coherent status codes

### v0.2
- add ```/userGroups/{id}/users/new``` endpoint to allow user creation
- add POST ```/units``` to allow units creation
