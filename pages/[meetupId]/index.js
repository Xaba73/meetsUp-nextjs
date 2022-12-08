import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image='https://peterburg.center/sites/default/files/kazanskii-sobor.jpg'
      title='Встреча возле Казанского'
      adress='набережная канала грибоедова, город Санкт-петербург'
      description='Наш первый митап'
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
};
export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          'https://peterburg.center/sites/default/files/kazanskii-sobor.jpg',
        title: 'Встреча возле Казанского',
        adress: 'набережная канала грибоедова, город Санкт-петербург',
        description: 'Наш первый митап',
        id: meetupId,
      },
    },
  };
};

export default MeetupDetails;
