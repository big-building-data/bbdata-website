---
title: Getting data
---

To visualise data in simple graph forms, a web application is available. In case you need access to the raw values, the output api is there for you.

To get data, use the output API `/api/values` endpoint.

:::warning
In this section, we suppose that you know how to add authentication headers to the request, so we won't explicitly write them down. See [output api authentication](access-output-api.md) if you get an _unauthorized exception_ when running one of the codes below. 
:::

## Formats

The `/values` endpoint supports two formats: JSON (default) and CSV. 

### JSON

JSON is the default format for value-related queries. Value endpoints support an optional query parameter, `prettyprint=<true|false>` that can be useful for debug. If set to true, the response body will be properly formatted. But note that formatted output takes more bytes, so the response will be heavier/slower.

### CSV

To request CSV, use the `Content-Type` request header:

    Content-Type: text/plain

Value endpoints support an optional parameter, `headers=<true|false>` (default `false`). If set to true, the CSV headers are included in the response.


## Getting raw values

Raw values are accessed through the `GET /values` endpoint. You need to specify at least the object ids for which you want values as well as a timespan. 

### Query Parameters

* __ids__: _required (string)_  
A comma-separated list of object ids  
Example: `1,344`
* __from__, __to__: _required (string)_  
Datetime in UTC following the format `yyyy-MM-dd'T'hh:mm:ss`. Seconds are optional. `from` should be less or equal to `to`. Both are inclusive.  
Example: `2016-12-31T16:10`
* __withComments__: _(boolean - default: false)_  
Whether or not to return comments for each value.

### Responses

__JSON__: the return type is a json array with one entry for each object. An entry contains the object id, the unit and an array of values. Example:
```json
[
    {
        "objectId": 1,
        "unit": { "name": "volts", "symbol": "V", "type": "float" },
        "values": [
            { "timestamp": "2017-06-30T10:00:00.000", "value": "152" }
        ]
    }
]
```

__CSV__: csv uses comma as field separator. By default, headers are not part of the response (use the parameter `headers=true` to get headers as well). Fields are:
1. object id
2. timestamp
3. value
4. (optional) comments

Example:
```csv
3008,2017-06-02T19:03:09.505,3.79
3008,2017-06-02T19:18:09.452,3.82
3008,2017-06-02T19:33:09.456,3.79
3008,2017-06-02T19:48:09.391,3.87
```

### Example

Getting values for objects 1 and 4889 for the 30 of June 2017 between 10:00 am and 10:01 am:

```bash
curl "https://bbdata.daplab.ch/api/values?ids=1&from=2017-06-30T10:00&to=2017-06-30T10:05"
```

Answer:
```json
[
    {"objectId":1,"unit":{"name":"volts","symbol":"V","type":"float"},
        "values":[{"timestamp":"2017-06-30T10:00:00.000","value":"152"}]
    },
    {"objectId":4889,"unit":{"name":"ampere","symbol":"A","type":"float"},
        "values":[{"timestamp":"2017-06-30T10:00:17.566","value":"0.148"},{"timestamp":"2017-06-30T10:00:47.470","value":"0.14600001"}]
    }
]
```

Same parameters, but in CSV (with headers):
```bash
curl -H "Content-Type: text/plain" \
    "https://bbdata.daplab.ch/api/values?ids=1&from=2017-06-30T10:00&to=2017-06-30T10:05&headers=true"
```

Answer:
```csv
object_id,timestamp,value
1,2017-06-30T10:00:00.000,152
4889,2017-06-30T10:00:17.566,0.148
4889,2017-06-30T10:00:47.470,0.14600001
```


## Getting aggregation values

_Recall_: not all objects have aggregation values (cf. [here](conception.md)) and what statistics are computed depend on the unit of the object.

At the time, aggregations have two granularities:

* `GET /values/quarters`: aggregations on a 15 minutes granularity window
* `GET /values/hours`: aggregations on a 15 minutes granularity window

Query parameters and responses have the same format as the [raw values](#getting-raw-values) endpoint.

### Examples




