import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'About',
    link: '/',
    private: false,
  },

  {
    id: nanoid(),
    text: 'PhoneBook',
    link: '/contacts',
    private: true,
  },
];

export default items;
