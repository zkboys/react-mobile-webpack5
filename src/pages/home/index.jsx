import {PageContent} from 'src/components';
import {Button} from 'antd-mobile';
import config from 'src/commons/config-hoc';
import s from './style.module.less';

export default config({})(function Index(props) {
    return (
        <PageContent className={s.root}>
            <h1>首页</h1>
            <Button color="primary">123</Button>
        </PageContent>
    );
});
