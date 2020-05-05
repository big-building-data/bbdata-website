# input-api API documentation
<a href="https://bbdata.daplab.ch/input/" target="blank">https://bbdata.daplab.ch/input/</a>

## Overview
![alt_text](../static/img/bbdata_logo.png 'BBData_Logo')

This document describes the endpoint available to submit new measures to the bbdata pipeline. To query measures, use the <a href="https://bbdata.daplab.ch/api/" target="blank">output API</a>

## Other resources
- <a href="https://bbdata-admin.daplab.ch/auth/" target="blank">bbdata admin interface:</a> a web interface to manage objects, objectgroups, users and permissions.
- <a href="https://bbdata.daplab.ch/api/" target="blank">output api:</a> api used to manage objects, permissions, users and query measures.
- <a href="https://gitlab.forge.hefr.ch/users/sign_in" target="blank">source code</a> bbdata organisation on gitlab.forge (protected)

## Changelog
The whole changelog is available on <a href="https://gitlab.forge.hefr.ch/bbdata/output-api-v2-springboot" target="blank">gitlab.forge</a>.

### v0.3.3 (20.04.2017)
- accept timestamps with a millisecond granularity
- add an endpoint ```/measures/bulk``` to submit an array of measures in one query
- add an endpoint ```/info``` to get the current api version (synchronized with the pom)
- use "flags" for boolean query parameters. Now, it is possible to write ```?ack&simulate```instead of ```?ack=true&simulate=true```
- add a query parameter ```ack``` when submitting measures. If set, the measure will be submitted synchronously to kafka and an exception is returned if the submission fails.

### v0.3.2 (27.02.2017)
- loosen the in the past checking for dates: a timestamp less than 1 hour in the future is still accepted (to prevent errors with non synchronized systems)
- allow ISO dates with milliseconds. Now, the format ```YYYY-MM-ddTHH:mm:ss.SSS``` is also supported.

### v0.3 (12.12.2016)
- date checking: enforce correct measure timestamps. A valid date is:
  - in the format ```yyyy-MM-dd'T'HH:mm[:ss]```
  - after january 2016 and strictly in the past

### v0.2.1 (17.10.2016)
- change root context ```/input```

### v0.2 (07.09.2016)
- use UTC dates: avoid troubles with local times by enforcing UTC time for every measure/query. Date format: ```YYYY-MM-ddTHH:mm[:ss]Z```, for example: 2016-09-07T23:12:01.
