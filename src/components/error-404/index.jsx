import PropTypes from 'prop-types';

function Error404(props) {

    return (
        <div>
            404
        </div>
    );
}

Error404.propTypes = {
    children: PropTypes.any,
};
Error404.defaultProps = {};

export default Error404;

