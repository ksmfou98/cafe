import client from './client';

export const cafeThumbnailAPI = async (fd: FormData) => {
  const response = await client.post('/cafe/uploadImg', fd);
  return response.data.image;
};

export const cafeCreateAPI = async (
  name: string,
  route: string,
  thumbnail: string,
  manager: string,
) => {
  const body = {
    name,
    route,
    thumbnail,
    manager,
  };
  const response = await client.post('/cafe/create', body);
  return response;
};

export const readMyCafeListAPI = async (userId: string) => {
  const response = await client.get(`/cafe/readMyCafeList/${userId}`);
  return response.data.cafes;
};

export const readAllCafeListAPI = async () => {
  const response = await client.get('/cafe/readAllCafeList');
  return response.data.cafes;
};
