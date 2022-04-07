import PropTypes from 'prop-types';

function PageContent(props) {

    return (
        <div>
            {props.children}
        </div>
    );
}

PageContent.propTypes = {
    children: PropTypes.any,
};
PageContent.defaultProps = {};

export default PageContent;

