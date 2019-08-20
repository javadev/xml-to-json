xmltojson
=========

The utility to convert xml to json an vice versa.

### Usage

```javascript
var json = xmlToJson("<a/>");

// {
//   "a": {
//     "-self-closing": "true"
//   },
//   "#omit-xml-declaration": "yes"
// }

jsonToXml("{}");

// <?xml version="1.0" encoding="UTF-8"?>
// <root></root>
```
