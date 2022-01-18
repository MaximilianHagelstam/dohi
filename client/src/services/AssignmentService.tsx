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
};

export default AssignmentService;
