import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AdressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./event-item.module.css";

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
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AdressIcon />
            <adress>{formattedAdress}</adress>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore event</span>{" "}
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
