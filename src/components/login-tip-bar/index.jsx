import {Button} from 'antd-mobile';
import {isLogin, toLogin} from 'src/commons';
import s from './style.module.less';

export default function LoginTipBar(props) {
    const { marginBottom = 60 } = props;

    // 已经是登录状态，返回null
    if (isLogin()) return null;

    return (
        <div className={s.rootWrapper}>
            <div className={s.root} style={{ marginBottom }}>
                <span className={s.tip}>未登录不可购买数字藏品</span>
                <Button
                    className={s.btn}
                    shape="rounded"
                    color="primary"
                    onClick={toLogin}
                >
                    去登录
                </Button>
            </div>
        </div>
    );
}

