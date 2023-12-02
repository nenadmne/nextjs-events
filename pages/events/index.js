import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

export default function Events({ events }) {
  const router = useRouter();

  const searchHandler = (month, year) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={searchHandler} />
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://next-js-events-ceee0-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );

  const responseData = await response.json();

  const events = [];

  for (const key in responseData) {
    events.push({
      id: key,
      title: responseData[key].title,
      description: responseData[key].description,
      location: responseData[key].location,
      date: responseData[key].date,
      image: responseData[key].image,
      isFeatured: responseData[key].isFeatured,
    });
  }
  return {
    props: {
      events: events,
    },
  };
}
