---
title: Submitting measures
---

:::tip
A measure is always associated to a _virtual object_. Before submitting measures, ensure that the object is enabled and that a valid token is associated to it.
:::

Submitting measures is done either through an _HTTP POST_ request or through a MQTT publish packet to the output API. The measure is encoded in _JSON_ format in the body of the request or in the publish packet payload. In this page, we show examples in different languages in how to do so. 

## Input API endpoints

The input API has two endpoints to submit measures:

- `POST /input/measures`: submit one measure as a JSON object
- `POST /input/measures/bulk`: submit multiple measures using a JSON array. 

Both endpoints support the following query parameters:

- __ack__: _boolean, default: false_  
Whether or not to wait for the measure to be submitted to Kafka. 
- __simulate__: _boolean, default: false_  
If set to true, the measure will be validated but won't be forwared to the pipeline. This is perfect for testing.

Both endpoints return the input as they have been interpreted by the API. Most of the time, everything except the timestamp (milliseconds added if missing) and the value (converted to string) should be the same.

In case of error, a JSON object with details is returned, for example:

```json
{"exception":"BadTokenException","details":"the pair <objectId, token> is invalid"}
```

## Measure format

Measures are JSON object. 

__Properties__: 

* __objectId__: _required (integer - minimum: 0)_  
The unique id of the object to which this measure refers.
* __token__: _required (string - minLength: 32 - maxLength: 32)_  
A valid token for the object used for security. You can view/generate a token using the output-api `/objects/{id}/tokens` endpoint or via the admin console.
* __timestamp__: _required (string)_  
Datetime in __UTC__ following the format `yyyy-MM-dd'T'hh:mm:ss.SSS`. The granularity of a [saved] measure timestamp is milliseconds.
* __value__: _required (any)_  
The actual value of the measure. It's type (float, int, ...) should match the unit of the virtual object. If the API fails to parse the value according to the unit, the measure might be discarded later in the pipeline.
* __comment__: _(string - maxLength: 1024)_  
An optional comment associated with this measure.


__Example__

Query:
```json 
{
   "objectId": 1,
   "token": "a087dd4e58a3f12523c09ab18d5507de",
   "timestamp": "2017-02-27T09:05:09",
   "value": 10
}
```

Response:
```json 
{
   "objectId": 1,
   "token": "a087dd4e58a3f12523c09ab18d5507de",
   "timestamp": "2017-02-27T09:05:09.000",
   "value": "10"
}


```

## MQTT Endpoint

The MQTT endpoint provides an alternative protocol to submit measures on the bbdata platform. As of now, it is only a way to submit measures which will then be available using the output api, the subscription to topics in not supported yet.

The MQTT endpoint is available using the url `mqtt.daplab.ch` and port `8883`. In order to use the endpoint, it is necessary to provide to following information regarding the MQTT protocol:

- `Topic`: The measure can be sent on any MQTT topic (not starting with $), this does not have any influance on the processing or resulting measure in the ouput api.
- `User and password`: As of now, a default MQTT user is provided, with username `bbdata` and password `bbdata`. The identity verification is done using the token sent in the measure.
- `Client identifier`: The MQTT client identifier has to be prefixed with `bbdata_`, the connection will otherwise be refused.
- `Quality of service`: All three levels of QoS are supported. QoS 0, 1 and 2 guarantee, respectively, at most once, at least once and exactly-once delivery semantics.

It is to be noted that it is necessary to use a TLS connection to connect to the MQTT endpoint, providing the appropriate [certificate](resources/daplabch.pem).

### Measure format using MQTT endpoint

The measure format to be used with the MQTT endpoint is almost identical to the format described previously, with two differences: 

- The comment field is mandatory, which can be an empty string
- An additional owner field set to null is required.

__Example__

publish payload:
```json
{
    "objectId": 1, 
    "token": "a087dd4e58a3f12523c09ab18d5507de",
    "timestamp": "2017-02-27T09:05:09.000",
    "value": "10", 
    "comment": "", 
    "owner": null
}
```

## Submission code examples

### Mosquitto

[Mosquitto_pub](https://mosquitto.org/man/mosquitto_pub-1.html) is a cli tool which can be used to send mqtt publish packets.

```bash
mosquitto_pub \
-h mqtt.daplab.ch \
-p 8883 \
-t bbdata_topic \
-I bbdata_ \
-u bbdata -P bbdata \
-l -d \
--cafile daplabch.pem \
```

This command will read messages from the standard input, with one message per line, so simply type the measure in the json format (updating the values accordingly) to send it.

It is necessary to provide the pem-encoded ssl [certificate](resources/daplabch.pem) in order to be able to connect to the endpoint. 

### Paho-mqtt
[Paho-mqtt](https://pypi.python.org/pypi/paho-mqtt) is a library which provides a simple MQTT client interface that can be used to connect to a broker and subscribe to topics or publish message.

```python
import paho.mqtt.client as mqtt
import json
from datetime import datetime

def build_measure(objectId, token, value, comment):
    return json.dumps({
    'objectId': objectId,
    'token': token,
    'timestamp': datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3],
    'value': value,
    'comment': comment,
    'owner': None
    })

def connect_handler(client, userdata, flag, rc):
    if rc == 0:
        print("Sending publish measure...")
        client.publish(
            topic="bbdata_mqtttopic", 
            qos=2, 
            payload=build_measure(
                1, 
                "a087dd4e58a3f12523c09ab18d5507de",
                "10",
                ""
            )
        )
    else:
        print("Error connecting to the mqtt broker...")

def publish_handler(client, userdata, mid):
        print("Message sent...")
        client.disconnect()

def disconnect_handler(client, userdata, rc):
    if rc != 0:
        print("Error while disconnecting")
    else:
        print("Disconnected")

# Instanciate the mqtt client with an appropriate client id
mqttc = mqtt.Client(client_id="bbdata_cid")

#Setup the tls connection using the provided certificate. 
#A call to tls_set without parameters should work in most systems.
#Use the ca_certs parameter if it is not the case
mqttc.tls_set(ca_certs="daplabch.pem")

#Provide the necessary mqtt user and password
mqttc.username_pw_set(username="bbdata", password="bbdata")

#Set handler functions
mqttc.on_connect = connect_handler
mqttc.on_publish = publish_handler
mqttc.on_disconnect = disconnect_handler

#Connect to the broker and wait for a disconnect before exiting
print("Connecting to the broker...")
mqttc.connect(host="mqtt.daplab.ch", port=8883, bind_address="0.0.0.0")
mqttc.loop_forever()
```

### Curl

Curl is a powerful command line tool, perfect for testing. 

One line example:
```bash
curl -H 'Content-Type: application/json' -X POST -d '{
   "objectId": 1,
   "token": "a087dd4e58a3f12523c09ab18d5507de",
   "timestamp": "2017-02-27T09:05:09",
   "value": 10
}' https://bbdata.daplab.ch/input/measures
```

The JSON body can also be read from a file. For example, say the JSON measure is in the file `measure.json` in the current directory:
```bash
curl -H 'Content-Type: application/json' -X POST -d @measure.json https://bbdata.daplab.ch/input/measures
```

For testing, you might want to generate the timestamp dynamically. One way to go is to define the following function either in the current shell session or in your `.bashrc` (so it is always available):

```bash
now_ms(){
    # print UTC time in ISO format with millis
    python -c "from datetime import datetime; print datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3]"
}
```

You can now use it like this:
```bash
bbcurl -X POST -d '{
    "objectId": 1, 
    "timestamp": "'$(now_ms)'", 
    "value": "2", 
    "token": "9087dd4e58a3f12523c09ab18d5507de"
    }' https://bbdata.daplab.ch/input/measures
```

### Python

A good library for HTTP in python is [requests](http://docs.python-requests.org/en/master/). Here is a full working example:

```python
import requests
from datetime import datetime

BASE_URL = "https://bbdata.daplab.ch"
DT_FORMAT = "%Y-%m-%dT%H:%M:%S" # to format time 

# virtual object information
token = "9087dd4e58a3f12523c09ab18d5507de"
objectId = 1

# create the measure
measure = {
        "objectId": objectId, 
        "timestamp": datetime.utcnow().strftime(DT_FORMAT), 
        "value": 3.14, 
        "token": token 
    }

# send the measure using requests and print the response
r = requests.post(BASE_URL + '/input/measures',json = measure)
print("status: %d, body: %s" % (r.status_code, r.text))
```

### Java

There are many ways to make HTTP requests using Java. For this example, we used _Apache HttpClient_ ([maven](https://mvnrepository.com/artifact/org.apache.httpcomponents/httpclient)). To deal with JSON, we recommend GSON, a powerful and easy-to-use library ([maven](https://mvnrepository.com/artifact/com.google.code.gson/gson)).

:::tip
If you are gonna use dates extensively, we strongly recommend the [jodaTime](http://www.joda.org/joda-time/) library.
:::

Here is a simple example:
```java
public class HttpExample {
    static final String BASE_URL = "https://bbdata.daplab.ch";
    static final DateTimeFormatter DTF = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss"); // to format dates

    static final String TOKEN = "9087dd4e58a3f12523c09ab18d5507de";
    static final Integer OBJECT_ID = 1;

    public static void main(String[] args) {
        ZonedDateTime now = ZonedDateTime.now(ZoneOffset.UTC);

        // create the measure 
        Map<String, Object> measure = new TreeMap<>();
        measure.put("objectId", OBJECT_ID);
        measure.put("token", TOKEN);
        measure.put("value", 3.14);
        measure.put("timestamp", DTF.format(now));

        // encode the measure as JSON
        Gson gson = new GsonBuilder().create();
        String body = gson.toJson(measure);
        System.out.println("body: " + body);

        try (CloseableHttpClient httpClient = HttpClientBuilder.create().build()) {
            // do the POST
            HttpPost request = new HttpPost(BASE_URL + "/input/measures");
            StringEntity params = new StringEntity(body);
            request.addHeader("content-type", "application/json");
            request.setEntity(params);
            HttpResponse result = httpClient.execute(request);
            // print the response
            String response = EntityUtils.toString(result.getEntity(), "UTF-8");
            System.out.println(response);

        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
```

Note that we use Java 8 utilities to deal with dates. In Java 7 and earlier, you can use:

``` java
SimpleDateFormat fmt = new SimpleDateFormat("YYYY-MM-dd'T'HH:mm:ss");
fmt.setTimeZone(TimeZone.getTimeZone( "UTC" ));
String timestamp = fmt.format(new Date());
```

Gson also let you encode POJO into JSON. For the sake of simplicity, we used a simple `TreeMap`, but a `Measure` class would be cleaner for a real-life program.

### Golang

Here is a full working example in Golang using only the built-in libraries:

```go
package main

import (
    "time"
    "bytes"
    "net/http"
    "encoding/json"
    "os"
    "fmt"
    "io/ioutil"
)

const (
    dateFormat = "2006-01-02T15:04:05"
    baseUrl = "https://bbdata.daplab.ch"
    token = "9087dd4e58a3f12523c09ab18d5507de"
    objectId = 1
)

// measure structure
type Measure struct {
    ObjectId  int         `json:"objectId"`
    Token     string      `json:"token"`
    Timestamp string      `json:"timestamp"`
    Value     interface{} `json:"value"`
    Comment   string      `json:"comment"`
}

func main() {
    now := time.Now().UTC()

    // create measure
    measure := Measure{
        objectId, 
        token, 
        now.Format(dateFormat), 
        3.14,
        "",
    }

    // marshall measure to JSON
    body, err := json.Marshal(measure)
    if err != nil {
        fmt.Printf("error parsing measure: %s\n", string(body))
        os.Exit(1)
    }
    fmt.Printf("body: %s\n", string(body))
    
    // send POST
    response, err := http.Post(baseUrl + "/input/measures", "application/json", bytes.NewBuffer(body))
    if err != nil {
        fmt.Printf("error sending measure: %s\n", err)
        os.Exit(1)
    }

    // print response
    fmt.Println("response:")
    fmt.Printf("  status: %d\n", response.StatusCode)
    if contents, err := ioutil.ReadAll(response.Body); err == nil {
        fmt.Printf("  body: %s\n", string(contents))
    }
}
```

### NodeJS

This example uses only one package, _request_. You can easily download it using npm: 

```bash 
npm install request --save-deps
```

```javascript
var request = require('request');

var dateFormat = "2006-01-02T15:04:05";
var baseUrl = "https://bbdata.daplab.ch";
var token = "9087dd4e58a3f12523c09ab18d5507de";
var objectId = 1;

measure = {
    "objectId": objectId, 
    "timestamp": new Date().toISOString().replace(/Z/, ""),
    "value": 3.14, 
    "token": token 
};

request.post(
    baseUrl + '/input/measures',
    { json: measure },
    function (error, response, body) {
        console.log("status:", response.status, "body:", body);
    }
);
```
