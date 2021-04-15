import {useRef} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const emailInput = useRef();
  const feedbackInput = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInput.current.value;
    const enteredFeedback = feedbackInput.current.value;

    const reqBody = {email: enteredEmail, text: enteredFeedback}

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
  }
  return (
    <div>
      <h1>The Home Page.</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInput}/>
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInput}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  )
}
