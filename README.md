xml-to-json
===========

Utility for converting between XML and JSON formats, with the added ability to prettify both XML and JSON strings.

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
