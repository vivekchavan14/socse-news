import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About Our Newsletter</h2>
          <p> Stay updated with the latest happenings, events, and news from KLE Technological University through our
            newsletter. Get insights, stories, and more right in your inbox.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          <span> KLE Technological University</span>
          <span>Email: newsletter@kletech.ac.in</span>
        </div>
        <div className={classes.col}>
          <h2>KLE Technological University</h2>
          <span>Hubballi, Karnataka, India</span>
         
        </div>
      </div>
    </footer>
  )
}

export default Footer

/*  KLE Technological University,<br />
            Hubballi, Karnataka, India<br />
            Email: newsletter@kletech.ac.in*/