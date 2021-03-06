import {PageContent, TabBar, LoginTipBar} from 'src/components';
import config from 'src/commons/config-hoc';
import s from './style.module.less';

export default config({
    title: '首页',
})(function Index(props) {
    return (
        <PageContent className={s.root}>
            <LoginTipBar/>
            <TabBar/>
        </PageContent>
    );
});
