import EventList from "../components/event-list";
import { getFeaturedEvents } from "../dummy-data";

export default function Homepage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
