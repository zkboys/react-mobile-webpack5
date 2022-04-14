import PropTypes from 'prop-types';
import c from 'classnames';
import s from './style.module.less';

function PageContent(props) {
    const { className, ...others } = props;
    return (
        <div className={c(s.root, className)} {...others}>
            {props.children}
        </div>
    );
}

PageContent.propTypes = {
    children: PropTypes.any,
};
PageContent.defaultProps = {};

export default PageContent;

