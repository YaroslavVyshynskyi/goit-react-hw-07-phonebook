import axios from 'axios';
const API_URL = 'https://630b8866ed18e82516550e82.mockapi.io/contacts';

export const getContacts = async () => {
  const result = await axios.get(API_URL);
  return result;
};

export const createContact = async contact => {
  const result = await axios.post(API_URL, contact);
  return result;
};

export const deleteContact = async id => {
  const result = await axios.delete(`${API_URL}/${id}`);
  return result;
};
