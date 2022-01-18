import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const AssignmentService = {
  add: async (title: string, description: string, className: string) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/assignment`,
        {
          title,
          description,
          className,
        },
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
          },
        }
      );

      return data;
    } catch (err) {
      console.error(err);
    }
  },
  get: async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/assignment`, {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      });

      return data;
    } catch (err) {
      console.error(err);
    }
  },
  delete: async (id: number) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/api/assignment/${id}`, {
        headers: {
          withCredentials: true,
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
        withCredentials: true,
      });

      return data;
    } catch (err) {
      console.error(err);
    }
  },
  update: async (
    id: number,
    title: string,
    description: string,
    className: string
  ) => {
    try {
      const { data } = await axios.put(
        `${BASE_URL}/api/assignment/${id}`,
        {
          title,
          description,
          className,
        },
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
          },
        }
      );

      return data;
    } catch (err) {
      console.error(err);
    }
  },
};

export default AssignmentService;
