import PropTypes from 'prop-types';
import css from './Profile.module.css'

// Dodanie '.' po liczbach tys.
function formatNumberWithDots(number) {
  const numberString = number.toString();
  if (numberString.length > 3) {
    const firstDigit = numberString.slice(0, 1);
    const remainingDigits = numberString.slice(1);
    return `${firstDigit}.${remainingDigits}`;
  }
  return numberString;
}

export const Profile = ({ username, tag, location, avatar, stats }) => {
  
  // Dodanie '.' po liczbach tys.
  const formattedFollowers = formatNumberWithDots(stats.followers);
  const formattedViews = formatNumberWithDots(stats.views);
  const formattedLikes = formatNumberWithDots(stats.likes);
  
  return (
    <div className={css.profile}>
      {/* Użytkownik: {username} */}
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} title="See profile pic"/>
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{formattedFollowers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{formattedViews}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{formattedLikes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.any,
  stats: PropTypes.shape ({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

