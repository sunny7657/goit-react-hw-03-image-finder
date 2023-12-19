import { api } from './api';

export const getAllImages = async () => {
  const { data } = await api(
    '?q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12'
  );
  return data;
};
