export async function getAllEvents() {
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

  return events;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const events = await getAllEvents();

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
