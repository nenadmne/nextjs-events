import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";

export default function Events() {
  const events = getAllEvents();
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
