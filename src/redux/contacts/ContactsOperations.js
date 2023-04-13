import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'shared/servises/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contact/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const result = contacts.items.find(({ name }) => {
        return name.toLowerCase() === normalizedName;
      });
      if (result) {
        toast.success(`${name} 🦄 is already in contacts`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

//id => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchDeleteContactLoading());
//       await deleteContact(id);
//       dispatch(fetchDeleteContactSuccess(id));
//     } catch ({ response }) {
//       dispatch(fetchAddContactError(response.data.message));
//     }
//   };
//   return func;
// };
// export const fetchContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchContactsLoading());
//       const data = await getContacts();
//       //   console.log(data);
//       dispatch(fetchContactsSuccess(data));
//     } catch ({ response }) {
//       dispatch(fetchContactsError(response));
//     }
//     // catch ({ response }) {
//     //   console.log(response);
//     //   dispatch(fetchContactsError(response.data.message));
//     // }
//   };
//   return func;
// };

// const isDublicate = (contacts, { name }) => {
//   const normalizedName = name.toLowerCase();

//   const result = contacts.find(({ name }) => {
//     return name.toLowerCase() === normalizedName;
//   });

//   return Boolean(result);
// };

// export const fetchAddContact = data => {
//   const func = async (dispatch, getState) => {
//     try {
//       const { contacts } = getState();
//       if (isDublicate(data, contacts.items)) {
//         toast.success(`${data.name} 🦄 is already in contacts`);
//         return false;
//       }

//       dispatch(fetchAddContactLoading());
//       const result = await addContact();
//       dispatch(fetchAddContactSuccess(result));
//     } catch ({ response }) {
//       dispatch(fetchAddContactError(response.data.message));
//     }
//   };
//   return func;
// };

// export const fetchDeleteContact = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchDeleteContactLoading());
//       await deleteContact(id);
//       dispatch(fetchDeleteContactSuccess(id));
//     } catch ({ response }) {
//       dispatch(fetchAddContactError(response.data.message));
//     }
//   };
//   return func;
// };
