import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './ContactsOperations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchAddContact.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContact.pending, store => {
        store.loading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// // import { nanoid } from 'nanoid';
// import {
//   fetchAddContactError,
//   fetchAddContactLoading,
//   fetchAddContactSuccess,
//   fetchContactsError,
//   fetchContactsLoading,
//   fetchContactsSuccess,
//   fetchDeleteContactError,
//   fetchDeleteContactLoading,
//   fetchDeleteContactSuccess,
// } from './ContactsActions';

// const initialState = {
//   items: [],
//   loading: false,
//   error: null,
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState,
//   extraReducers: {
//     [fetchContactsLoading]: store => {
//       store.loading = true;
//     },
//     [fetchContactsSuccess]: (store, { payload }) => {
//       store.loading = false;
//       store.items = payload;
//     },
//     [fetchContactsError]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [fetchAddContactLoading]: store => {
//       store.loading = true;
//     },
//     [fetchAddContactSuccess]: (store, { payload }) => {
//       store.loading = false;
//       store.items.push(payload);
//     },
//     [fetchAddContactError]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [fetchDeleteContactLoading]: store => {
//       store.loading = true;
//     },
//     [fetchDeleteContactSuccess]: (store, { payload }) => {
//       store.loading = false;
//       const index = store.items.findIndex(item => item.id === payload);
//       store.items.splice(index, 1);
//     },
//     [fetchDeleteContactError]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//   },
// });

// //export const { addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice.reducer;

// // import { createSlice } from '@reduxjs/toolkit';
// // import { nanoid } from 'nanoid';

// // const initialState = [];

// // export const contactsSlice = createSlice({
// //   name: 'contacts',
// //   initialState: initialState,
// //   reducers: {
// //     addContact: {
// //       reducer: (state, { payload }) => {
// //         state.push(payload);

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const initialState = [];

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState,
//   reducers: {
//     addContact: {
//       reducer: (state, { payload }) => {
//         state.push(payload);
//       },

//       prepare: data => {
//         return {
//           payload: {
//             id: nanoid(),
//             ...data,
//           },
//         };
//       },
//     },

//     deleteContact: (state, { payload }) =>
//       state.filter(({ id }) => id !== payload),
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice.reducer;
// //       },

// //       prepare: data => {
// //         return {
// //           payload: {
// //             id: nanoid(),
// //             ...data,
// //           },
// //         };
// //       },
// //     },

// //     deleteContact: (state, { payload }) =>
// //       state.filter(({ id }) => id !== payload),
// //   },
// // });

// // export const { addContact, deleteContact } = contactsSlice.actions;
// // export default contactsSlice.reducer;
