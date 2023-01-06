import React from 'react';

function TweetForm(){
  function stopSubmit(e) {
    e.preventDefault();
    console.log("no submit")
  }
  const placeholderText = "What are you humming about?"
  
  return (
    <section className="newtweet">
    <form onSubmit={stopSubmit} method="post" action="/tweets" className="newtweet__form">
      <textarea className="form__textarea" name="text" placeholder={placeholderText}></textarea>
      <input type="submit" value="Tweet" className="form__input" />
      <span className="form__counter">140</span>
    </form>
  </section>
  );
}

export default TweetForm;