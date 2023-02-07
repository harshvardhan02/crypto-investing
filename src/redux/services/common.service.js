import axios from 'axios';

const config = {
  apiUrl: 'http://ec2-18-217-31-46.us-east-2.compute.amazonaws.com:5000/api/v1',
  apiBaseUrl: ''
}

export const commonService = {
  withToken,
  withOutToken,
  getWithOutToken,
  withTokenPut,
  getDataWithToken,
  withTokenAndFormData,
  handleResponse,
  withOutTokenAndBaseUrl,
  getDataWithTokenAndBaseUrl
};

//-- It's common function for using the token
//-- get data
async function getDataWithToken(apiName, userData) {
  let token = JSON.parse(sessionStorage.getItem('token'));
  const response = await axios({
    method: 'GET',
    url: `${config.apiUrl + apiName}`,
    headers: { 'Content-Type': 'application/json', 'access_token': token },
    data: userData
  });
  return handleResponse(response);
}

//-- It's common function for using the token
async function withToken(apiName, data) {
  let tokenObj = JSON.parse(sessionStorage.getItem("token"))
  const handleResponse = await axios({
    method: 'POST',
    url: `${config.apiUrl + apiName}`,
    headers: { 'Content-Type': 'application/json', 'access_token': tokenObj },
    data: data
  });
  return handleResponse;
};

//-- It's common function for using the token with Put method
async function withTokenPut(apiName, data) {
  let tokenObj = JSON.parse(sessionStorage.getItem("token"))
  const handleResponse = await axios({
    method: 'PUT',
    url: `${config.apiUrl + apiName}`,
    headers: { 'Content-Type': 'application/json', 'access_token': tokenObj },
    data: data
  });
  return handleResponse;
};

//-- It's common function for using without token
async function withOutToken(apiName, data) {
  const response = await axios({
    method: 'POST',
    url: `${config.apiUrl + apiName}`,
    data: data
  });
  return handleResponse(response);
};

async function getWithOutToken(apiName, data) {
  const response = await axios({
    method: 'GET',
    url: `${config.apiUrl + apiName}`,
    data: data
  });
  return handleResponse(response);
};

//-- It's common function for using without token
async function withOutTokenAndBaseUrl(apiName, data) {
  const response = await axios({
    method: 'POST',
    url: `${config.apiBaseUrl + apiName}`,
    data: data
  });
  return handleResponse(response);
};

async function getDataWithTokenAndBaseUrl(apiName, data) {
  const response = await axios({
    method: 'GET',
    url: `${config.apiBaseUrl + apiName + '/' + data}`
  });
  return handleResponse(response);
};

//-- It's common function for using with form data
async function withTokenAndFormData(apiName, data) {
  let tokenObj = JSON.parse(sessionStorage.getItem("token"))
  const handleResponse = await axios({
    method: 'POST',
    url: `${config.apiUrl + apiName}`,
    headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${tokenObj}` },
    data: data
  });
  return handleResponse;
};

function handleResponse(response) {
  //console.log('response', response);
  if (response.status === 200 || response.status === 201) {
    return response;
  } else {
    const error = response;
    return Promise.reject(error);
  }
}