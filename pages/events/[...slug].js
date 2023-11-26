import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";

export default function FilteredEvents() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center"> Loading... </p>;
  }

  const year = +filterData[0];
  const month = +filterData[1];
 
  if (
    isNaN(month) ||
    isNaN(year) ||
    year > 2025 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return <p className="center"> Invalid filtered data </p>;
  }

  const filteredEvents = getFilteredEvents({
    year: year,
    month: month,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center"> No events found </p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}
