import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETSUP = [
  {
    id: 'm1',
    title: 'Встреча возле Казанского',
    image: 'https://peterburg.center/sites/default/files/kazanskii-sobor.jpg',
    address: 'набережная канала грибоедова, город Санкт-петербург',
  },
  {
    id: 'm2',
    title: 'Встреча возле Дворцовой',
    image:
      'https://wpapers.ru/wallpapers/Citys/SPB/7077/1280x720_%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%BF%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3-%D0%B4%D0%B2%D0%BE%D1%80%D1%86%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C.jpg',
    address: 'Дворцовая площадь, город Санкт-петербург',
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};
export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETSUP,
    },
    revalidate: 1,
  };
};

export default HomePage;
