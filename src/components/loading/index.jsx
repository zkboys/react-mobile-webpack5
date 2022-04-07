import PropTypes from 'prop-types';

function Loading(props) {

    return (
        <div>
            {props.children}
        </div>
    );
}

Loading.propTypes = {
    children: PropTypes.any,
};
Loading.defaultProps = {};

export default Loading;

