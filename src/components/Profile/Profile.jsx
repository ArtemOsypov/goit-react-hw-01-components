// { username, tag, location, avatar, stats: { followers, views, likes } }

import PropTypes from 'prop-types';
// import user from 'user.json';
// const user = { username, tag, location, avatar, stats: { followers, views, likes } }
export const Profile = ({ username, tag, location, avatar, stats }) => {

  // console.log(username);
  // console.log(stats.followers);
  // console.log(card.stats.followers);
  return (
 <div class="profile">
      <div class="description">
        <img
          src={avatar}
          alt={username}
          class="avatar"
        />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
       <p class="location">S{location}</p>
       
      </div> 
      <ul class="stats">
        <li>
          <span class="label">Followers</span>
         <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
         <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
         <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>,

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
  }),
}

    
  )
  

}