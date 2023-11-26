import EventList from "../components/events/event-list";
import EventSearch from "../components/events/event-search";
import { getFeaturedEvents } from "../dummy-data";

export default function Homepage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventSearch />
      <EventList items={featuredEvents} />
    </div>
  );
}
