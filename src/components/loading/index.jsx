import PropTypes from 'prop-types';
import {DotLoading} from 'antd-mobile';
import s from './style.module.less';

function Loading(props) {
    const { loading } = props;
    if (!loading) return null;

    return (
        <div className={s.root}>
            <DotLoading/>
        </div>
    );
}

Loading.propTypes = {
    loading: PropTypes.bool,
};
Loading.defaultProps = {};

export default Loading;

