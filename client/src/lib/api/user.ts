import client from './client';

export const registerAPI = async (
  email: string,
  password: string,
  name: string,
) => {
  const body = {
    email,
    password,
    name,
  };

  const response = await client.post('/user/register', body);
  return response.data;
};

export const logoutAPI = async () => {
  const response = await client.post('/user/logout');
  return response.data;
};
