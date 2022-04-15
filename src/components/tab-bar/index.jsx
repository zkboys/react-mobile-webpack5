import {useState, useEffect} from 'react';
import {TabBar} from 'antd-mobile';
import {AppOutline} from 'antd-mobile-icons';
import {useNavigate} from 'react-router';
import {isLogin, toLogin} from 'src/commons';
import s from './style.module.less'

export default function MyTabBar(props) {
    const [activeKey, setActiveKey] = useState(window.location.pathname);
    const navigate = useNavigate();

    // 监听 activeKey ，做页面跳转
    useEffect(() => {
        if (isLogin()) {
            navigate(activeKey);
            return;
        }

        if (activeKey !== '/') return toLogin();
    }, [activeKey, navigate]);

    return (
        <div className={s.root}>
            <TabBar activeKey={activeKey} onChange={setActiveKey}>
                <TabBar.Item key="/" icon={<AppOutline/>} title="首页"/>
                <TabBar.Item key="/collection" icon={<AppOutline/>} title="藏宝阁"/>
                <TabBar.Item key="/mine" icon={<AppOutline/>} title="我的"/>
            </TabBar>
        </div>
    );
}

