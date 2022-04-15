import {useCallback, useState, useEffect} from 'react';
import {Button} from 'antd-mobile';
import {BellOutline, AppOutline} from 'antd-mobile-icons';
import config from 'src/commons/config-hoc';
import c from 'classnames';
import s from './style.module.less';

const BUTTON_TEXT = {
    '01': '立即购买',
};

export default config()(function DetailFooter(props) {
    const { onClick } = props;
    const [status, setStatus] = useState('');
    const [tipActive, setTipActive] = useState(false);

    // 提醒
    const handleTip = useCallback(() => {
        // 已经设置了提醒，不做任何操作了
        if (tipActive) return;
        // TODO
    }, [tipActive]);

    // 分享
    const handleShare = useCallback(() => {
        // TODO 生成分享图片
    }, []);

    // 获取状态
    useEffect(() => {
        (async () => {
            // TODO 获取各种状态：售卖、提醒等
            setStatus('01');
            setTipActive(true);
        })();
    }, []);

    return (
        <div className={s.root}>
            <div className={s.rootInner}>
                <div className={s.tools}>
                    <BellOutline className={c(s.icon, tipActive && s.active)} onClick={handleTip}/>
                    <AppOutline className={s.icon} onClick={handleShare}/>
                </div>
                <Button
                    className={s.btn}
                    color="primary"
                    onClick={onClick}
                >
                    {BUTTON_TEXT[status]}
                </Button>
            </div>
        </div>
    );
});

