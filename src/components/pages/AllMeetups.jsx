import { useEffect, useState } from "react";
import MeetupList from "../meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch(
      'https://learning-react-66f77-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
    ).then((response) => {
      return response.json();
    }).then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          }

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
    });
  });

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups= {loadedMeetups}/>
    </section>
  )
}

export default AllMeetupsPage;
