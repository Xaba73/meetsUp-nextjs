import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUp = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetUpData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);

    router.push('/');
  };

  return (
    <Fragment>
      <Head>
        <title>Новый митап</title>
        <meta name='description' content='Создай свой митап, собери людей!' />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};
export default NewMeetUp;
