xml-to-json
===========

The utility to convert xml to json and vice versa.
It also can prettify xml and json strings.

### Usage

```javascript
var json = xmlToJson("<a/>");

// {
//   "a": {
//     "-self-closing": "true"
//   },
//   "#omit-xml-declaration": "yes"
// }

var prettyXml = formatXml("<a><b/></a>");

// <a>
//   <b/>
// </a>

var xml = jsonToXml("{}");

// <?xml version="1.0" encoding="UTF-8"?>
// <root></root>

var xml = jsonToXml("{}", "myroot");

// <?xml version="1.0" encoding="UTF-8"?>
// <myroot></myroot>

var prettyJson = formatJson('{"a":{"b":true}}');

// {
//    "a": {
//       "b": true
//    }
// }
```
