import {Suspense} from 'react';
import {useNavigate, useRoutes} from 'react-router';
import {ConfigProvider} from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import {Loading, Error404} from 'src/components';
import routes from 'src/routes';
import {toHome} from 'src/commons';

export default function App() {
    // 路由页面注入的数据
    const ejectProps = {};
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
        <ConfigProvider locale={zhCN}>
            <Suspense fallback={<Loading loading/>}>
                <div style={{ overflow: 'auto' }}>{element}</div>
            </Suspense>
        </ConfigProvider>
    );
}
