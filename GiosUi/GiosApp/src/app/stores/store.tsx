import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        ui: uiReducer,
    },
    middleware: (gDM) => gDM().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


/*

import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: { isModalOpen: false },
    reducers: {
        toggleModal: (state) => {
            state.isModalOpen = !state.isModalOpen;
        },
    },
});

export const { toggleModal } = uiSlice.actions;
export default uiSlice.reducer;

----------------------
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice'; // Importujesz reducer ze slice'a

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi', // unikalna nazwa w store
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
  endpoints: (builder) => ({
    // Definiujemy zapytanie "getUsers"
    getUsers: builder.query<any[], void>({
      query: () => 'users',
    }),
  }),
});

// Redux automatycznie wygeneruje hook o nazwie: use + NazwaEndpointu + Query
export const { useGetUsersQuery } = userApi;

----------
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../features/ui/uiSlice'; // Akcja z małej
import { RootState } from '../store'; // Typ z WIELKIEJ

export const Home = () => {

  const { data: users, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <p>Ładowanie...</p>;
  if (error) return <p>Błąd pobierania danych!</p>;

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );};



*/