import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUp = () => {
  const addMeetupHandler = (enteredMeetUpData) => {
    console.log(enteredMeetUpData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};
export default NewMeetUp;
