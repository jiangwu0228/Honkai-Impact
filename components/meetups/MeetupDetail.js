import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <birthday>{props.birthday}</birthday>
      <p>{props.bio}</p>
    </section>
  );
}

export default MeetupDetail;
