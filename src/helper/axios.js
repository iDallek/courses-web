import axios from 'axios';

const fetchData = async (url) => {
  let response;

  await axios.get(url)
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('fetchData error: ', err);
    });

  return response;
};

const fetchDataWithParams = async (url, params) => {
  let response;

  await axios.get(`${url}/${params}`)
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('fetchDataWithParams error: ', err);
    });

  return response;
};

const postData = async (url, data) => {
  let response;

  await axios.post(url, data)
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('postData error: ', err);
    });

  return response;
};

// eslint-disable-next-line import/prefer-default-export
export { fetchData, fetchDataWithParams, postData };
