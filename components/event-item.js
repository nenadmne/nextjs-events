import Link from "next/link";

export default function EventItem(props) {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAdress = location.replace(", ", "\n");

  return (
    <li>
      <img src={`/${image}`} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <adress>{formattedAdress}</adress>
          </div>
        </div>
      </div>
      <div>
        <Link href={`/events/${id}`}> Explore event</Link>
      </div>
    </li>
  );
}
