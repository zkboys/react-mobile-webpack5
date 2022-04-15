import {PageContent, DetailFooter} from 'src/components';
import config from 'src/commons/config-hoc';
import s from './style.module.less';

export default config({})(function Index(props) {
    return (
        <PageContent className={s.root}>
            <DetailFooter/>
        </PageContent>
    );
});
