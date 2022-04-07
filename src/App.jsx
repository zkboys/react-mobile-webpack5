import {Suspense, useContext} from 'react';
import {useNavigate, useRoutes} from 'react-router';
import {ConfigProvider} from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import {Logo, Loading, Error404, Layout} from 'src/components';
import routes from 'src/routes';
import menus from 'src/menus';
import {toHome, toLogin} from 'src/commons';
import {AppContext} from './app-context';
import theme from 'src/theme.less';
import {SHOW_PROXY} from 'src/config';
import proxyConfig from 'src/setupProxyConfig.json';

export default function App() {
    // 路由页面注入的数据
    const ejectProps = {};
    const { state } = useContext(AppContext);
    const navigate = useNavigate();
    const error404 = <Error404 {...ejectProps} onToHome={toHome} onGoBack={() => navigate('../')}/>;
    const element = useRoutes([
        ...routes.map(item => {
            const { Component } = item;
            return {
                ...item,
                element: <Component {...ejectProps} />,
            };
        }),
        { path: '*', element: error404 },
    ]);

    return (
        <ConfigProvider locale={zhCN} prefixCls={theme.antPrefix}>
            <Layout
                layout={state.layout}
                menus={menus}
                proxyVisible={SHOW_PROXY}
                Logo={Logo}
                proxyConfig={proxyConfig}
                onLogout={() => {
                    // TODO 退出登录
                    alert('// TODO 退出登录');
                    toLogin();
                }}
            >
                <Suspense fallback={<Loading spin/>}>
                    <div style={{ overflow: 'auto' }}>{element}</div>
                </Suspense>
            </Layout>
        </ConfigProvider>
    );
}
