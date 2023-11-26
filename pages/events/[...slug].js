import { Fragment } from "react";
import { useRouter } from "next/router";

import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import ErrorAlert from "../../components/error-alert/error-alert";
import { getFilteredEvents } from "../../dummy-data";
import Button from "../../components/ui/button";

export default function FilteredEvents() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> Loading... </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events"> Show all events! </Button>
        </div>
      </Fragment>
    );
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
    return (
      <Fragment>
        <ErrorAlert>
          <p> Invalid filtered data </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events"> Show all events! </Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: year,
    month: month,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> No events found </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events"> Show all events! </Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(year, month - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
