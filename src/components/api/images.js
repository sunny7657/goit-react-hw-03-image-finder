import { api } from './api';

export const getAllImages = async (query, page, perPage) => {
  const { data } = await api(`?q=${query}&page=${page}`);
  return data;
};
