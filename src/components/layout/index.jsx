import PropTypes from 'prop-types';

function Layout(props) {

    return (
        <div>
            {props.children}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.any,
};
Layout.defaultProps = {};

export default Layout;

