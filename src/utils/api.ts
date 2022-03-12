import axios from 'axios';

interface IFetchClassDetail {
  id: string;
}

const API_URL = 'https://baee0c5d-15e7-45e2-ae1b-392ba74406a9.mock.pstmn.io';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

const fetchClasses = () => axiosInstance.get('/available-classes');

const fetchClassById = (id: IFetchClassDetail) => axiosInstance.get('/learning-class', {
  params: {
    id,
  },
});

export { fetchClasses, fetchClassById };
