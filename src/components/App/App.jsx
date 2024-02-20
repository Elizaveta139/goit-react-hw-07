import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { fetchContacts } from '../../redux/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';

import Layout from '../Layout/Layout';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {/* <h2 className={css.title}>Contacts</h2> */}
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
      <Toaster position="top-right" />
    </Layout>
  );
}
