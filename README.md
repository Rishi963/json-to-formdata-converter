# **Json-To-Form-Converter**

This package allows you to convert the _Jsondata_
to _Formdata_.

## Docs!

Import the module and call the convertJSONToFormData function with the parameters.

> Value : Json Data which needs to be converted.
  
Sample Code!
```
const convertfm = require("json-to-formdata")
const jsonData = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
  };
console.log(convertfm(jsonData));

```
Output
```
C:\Users\Desktop\Npm\Conversion>node script.js
FormData {
  [Symbol(state)]: [
    { name: 'key1', value: 'value1' },
    { name: 'key2', value: 'value2' },
    { name: 'key3', value: 'value3' }
  ]
}
```
