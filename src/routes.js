import pageConfig, {conventionalRoutes} from 'src/pages/page-configs';

// 约定路由
export default conventionalRoutes.map(item => {
    const config = pageConfig.find(it => it.filePath === item.absComponent);
    return {
        ...item,
        keepAlive: config?.keepAlive,
    };
});
