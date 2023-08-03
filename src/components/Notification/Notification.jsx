import PropTypes from 'prop-types';

//import css from './Notification.module.css';
/*export const Notification = ({ message }) => {
    return (
        <div>
            <p className={css.message}>{message}</p>
        </div>
    );
};*/

export const Notification = ({ message }) => {
    return (
        <>
            {message !== "" && (
                <span style={{ fontSize: "18px", fontWeight: "500"}}>{message}</span>
            )}
        </>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};