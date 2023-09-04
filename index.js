function convertJSONToFormData(jsonData) {
    const formData = new FormData();
    for (const key in jsonData) {
      formData.append(key, jsonData[key]);
    }
    return formData;
  }
module.exports = convertJSONToFormData;
