import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";
import { getAllEvents } from "../../dummy-data";

export default function SingleEvent({ event }) {
  if (!event) {
    return (
      <ErrorAlert>
        <p> No event found! </p>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const events = await getAllEvents();
  const event = events.find((item) => item.id === params.eventId);

  return {
    props: {
      event: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const eventId = events.map((item) => ({
    params: { eventId: item.id },
  }));

  return {
    paths: eventId,
    fallback: false,
  };
}
