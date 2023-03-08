import NewMeetupForm from '../meetups/NewMeetUpForm';

function NewMeetupPage() {
  function addMeetupHandler(meetupData){
    fetch(
      'https://learning-react-66f77-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupPage;
