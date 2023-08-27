import { FaPhone } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsLoggedIn } from 'redax/auth/authSelectors';

const HomeGritings = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <section className="homePage">
      <div className="content">
        <div className="phoneIcon">
          <FaPhone className="swing" />
        </div>
        <h1 className="typedText">Phonebook</h1>
        <p className="description">
          A cool application to store your contacts in one place.
          <br />
          {!isLoggedIn ? (
            <span>
              <Link to="/register">Register</Link> if you're new or{' '}
              <Link to="/login">Log in</Link> if you already have an account.
            </span>
          ) : null}
        </p>
      </div>
    </section>
  );
};

export default HomeGritings;
