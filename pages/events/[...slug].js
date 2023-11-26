import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

export default function FilteredEvents() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center"> Loading... </p>;
  }

  const month = +filterData[0];
  const year = +filterData[1];

  if (
    isNaN(month) ||
    isNaN(year) ||
    year > 2025 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ){
    return <p> Invalid filtered data </p>
  }

  const filteredEvents = getFilteredEvents()
    return (
      <div>
        <h1> Filtered Events</h1>
      </div>
    );
}
