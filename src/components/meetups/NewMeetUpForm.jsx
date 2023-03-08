import Card from '../ui/Card';
import classes from './NewMeetup.module.css';

function NewMeetupForm() {
  return <Card>
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='title'>Meetup title</label>
        <input type='text' required id='title' />
      </div>
      <div className={classes.control}>
        <label htmlFor='image'>Meetup Image</label>
        <input type='text' required id='image' />
      </div>
      <div className={classes.control}>
        <label htmlFor='address'>Address</label>
        <input type='text' required id='address' />
      </div>
      <div className={classes.control}>
        <label htmlFor='description'>Description</label>
        <textarea id='description' rows='5'></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  </Card>
};

export default NewMeetupForm;
