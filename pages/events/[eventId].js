import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";

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

  const event = events.find((item) => item.id === params.eventId);
  return {
    props: {
      event: event,
    },
  };
}

export async function getStaticPaths() {
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

  const eventId = events.map((item) => ({
    params: { eventId: item.id },
  }));

  return {
    paths: eventId,
    fallback: false,
  };
}
