import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/button";

export default function EventItem(props) {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAdress = location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <img src={`/${image}`} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <adress>{formattedAdress}</adress>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={`/events/${id}`}> Explore event </Button>
      </div>
    </li>
  );
}
