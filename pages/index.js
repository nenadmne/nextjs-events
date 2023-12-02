import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

export default function Homepage({ featuredEvents }) {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: featuredEvents,
    },
  };
}
