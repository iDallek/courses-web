import axios from 'axios';

const fetchData = async (url) => {
  let response;

  await axios.get(url)
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      console.log('fetchData error: ', err);
    });

  return response;
};

export default fetchData;
