import { Fragment } from "react";

import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import ErrorAlert from "../../components/error-alert/error-alert";
import { getAllEvents, getFilteredEvents } from "../../dummy-data";
import Button from "../../components/ui/button";

export default function FilteredEvents({ hasError, filteredEvents, date }) {
  if (hasError) {
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

  if (!filteredEvents) {
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

  if (filteredEvents.length === 0) {
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

  const newDate = new Date(date.year, date.month - 1);
  return (
    <Fragment>
      <ResultsTitle date={newDate} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;

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
    return {
      props: { hasError: true },
    };
  }

  const events = await getFilteredEvents({ year: year, month: month });
  return {
    props: {
      filteredEvents: events,
      date: {
        year: year,
        month: month,
      },
    },
  };
}
