import PropTypes from 'prop-types';
import Loading from '../loading';
import c from 'classnames';
import s from './style.module.less';

function PageContent(props) {
    const { className, loading, title, ...others } = props;
    return (
        <div className={c(s.root, className)} {...others}>
            <Loading loading={loading}/>
            {props.children}
        </div>
    );
}

PageContent.propTypes = {
    className: PropTypes.string,
    loading: PropTypes.bool,
    children: PropTypes.any,
};
PageContent.defaultProps = {};

export default PageContent;

