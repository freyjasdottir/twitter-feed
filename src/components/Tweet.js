import React from 'react';

function removeUrl(text, url){
  if(text.indexOf(url) != -1){
    var newText = text.replace(url, "");
    return newText;
  }else{
    return text;
  }
}

const Tweet = props => {


  let tweetDate = new Date(parseInt(props.timestamp));
  let dateString = tweetDate.toString().split(" ");
  let month = dateString[1];
  let day = dateString[2];

  let reply = event => alert("reply");
  let retweet = event => alert("retweet");
  let like = event => alert("like");
  let favorite = event => alert("favorite");

  let retweetCount = parseInt(props.retweetCount)
  let faveCount = parseInt(props.favoriteCount)

  if(props.favorited){
    var likeButton = <button className="fa fa-heart liked" aria-hidden="true" onClick={like}></button>
    var likeCount = <span className="fave_count liked">{faveCount}</span>
    //make like icon red
  }else{
    var likeButton = <button className="fa fa-heart" aria-hidden="true" onClick={like}></button>
    var likeCount = <span className="fave_count">{faveCount}</span>
    //leave like icon as is
  }
  if(props.retweeted){
    var retweetButton = <button className="fa fa-retweet retweeted" aria-hidden="true" onClick={retweet}></button>
    var rtCount =
    <span className="retweet_count retweeted">{retweetCount}</span>
  }else{
    var retweetButton = <button className="fa fa-retweet" aria-hidden="true" onClick={retweet}></button>
    var rtCount = <span className="retweet_count">{retweetCount}</span>
  }

  if(props.entities.media){
      //remove display_url from text and show image
    var url = props.entities.media[0].media_url;
    var displayUrl = props.entities.media[0].display_url;
    var media =
    <div className="media">
      <img className="media_image" src={url}></img>
    </div>
    var displayText = removeUrl(props.text, displayUrl);
  }else{
    var displayText = props.text;
  }

  return(
    <div className = "tweet">
      <span className = "profile_image">
        <img src={props.user.profile_image_url}></img>
      </span>
      <div className ="content">
        <div className ="tweet_header">
          <span className = "name">{props.user.name}</span>
          <span className = "usrname">@{props.user.screen_name}</span>
          <span className = "timestamp">&#8226; {month} {day}</span>
        </div>
        <span className = "text">{displayText}</span>
        {media}
        <div className="tweet_footer">
          <span className="reply_button_container">
            <button className="fa fa-reply" onClick={reply}></button>
          </span>
          <span className="retweet_button_container">
            {retweetButton} {rtCount}
          </span>
          <span className ="like_button_container">
            {likeButton} {likeCount}
          </span>
          <span className="more_button_container">
            <button className="fa fa-ellipsis-h" onClick={favorite}></button>
          </span>
        </div>
      </div>
    </div>
  )

};
export default Tweet;
