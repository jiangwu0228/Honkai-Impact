import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const birthdayInputRef = useRef();
  const bioInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredBirthday = birthdayInputRef.current.value;
    const enteredBio = bioInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      birthday: enteredBirthday,
      bio: enteredBio,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Valkyrise Name</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Valkyrise Image</label>
          <input type="url" required id="image" ref={imageInputRef} placeholder='Image URL Only'/>
        </div>
        <div className={classes.control}>
          <label htmlFor="birthday">Birthday</label>
          <input type="text" required id="birthday" ref={birthdayInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            required
            rows="5"
            ref={bioInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Valkyrise</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
