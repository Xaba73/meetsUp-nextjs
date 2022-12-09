import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import { Fragment } from 'react';

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>МИТАПЫ</title>
        <meta name='description' content='Ваши митапы для всех!' />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://yaroslav:yar12345@meetup-nextjs.v4higmb.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
