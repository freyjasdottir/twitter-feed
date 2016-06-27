import React from 'react';
import Tweet from './Tweet.js';

const TwitterFeed = props => {
  let tweets = props.data.map(tweet => {
    return(
      <Tweet
        key = {tweet.id_str}
        text = {tweet.text}
        user = {tweet.user}
        retweetCount = {tweet.retweet_count}
        favoriteCount = {tweet.favorite_count}
        entities = {tweet.entities}
        favorited = {tweet.favorited}
        retweeted = {tweet.retweeted}
        timestamp = {tweet.timestamp_ms}
      />
    );
  });

  return(
    <div className = "feed">
      {tweets}
    </div>
  );
}

export default TwitterFeed;
