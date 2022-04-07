import React, {Component, useContext, useEffect} from 'react';
import {ajaxHoc} from 'src/commons/ajax';
import {getLoginUser, getQuery, toLogin} from 'src/commons';
import {AppContext} from 'src/app-context';

// 公共高阶组件，注入一些常用数据，比如 query loginUser等
function commonHoc(options) {
    const {
        query = true,
        loginUser = true,
        layout = true,
        auth = false,
    } = options;

    return (WrappedComponent) => {
        const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

        const WithEjectProps = (props) => {
            // modalFunction 组件，AppContext是无法获取到的。
            const { setLayout } = useContext(AppContext) || {};
            // 是否显示布局
            useEffect(() => setLayout && setLayout(layout), [setLayout]);

            // 需要登录并且是未登录状态，跳转到登录页面
            if (auth && !getLoginUser()) return toLogin();

            // 默认添加属性到props中的属性
            const _ejectProps = {};
            if (query) _ejectProps.query = getQuery();
            if (loginUser) _ejectProps.loginUser = getLoginUser();

            return <WrappedComponent {..._ejectProps} {...props} />;
        };

        WithEjectProps.displayName = `WithCommon(${componentName})`;

        return WithEjectProps;
    };
}

export default function configHoc(options = {}) {
    // config 所有可用参数，以及默认值
    const {
        // 路由地址
        path,
        // 是否需要登录
        auth,
        // 是否需要框架布局
        layout,
        // 是否显示顶部
        title,
        // props是否注入ajax
        ajax = true,
        ...others
    } = options;

    const hoc = [];

    hoc.push(commonHoc(options));
    if (ajax) hoc.push(ajaxHoc());

    return createConfigHoc({
        hoc,
        onConstructor: () => void 0,
        onDidMount: () => void 0,
        onUnmount: () => void 0,
    })({ ...options, ...others });
};

/**
 * 页面配置高阶组件，整合了多个高阶组件
 * @param createOptions
 */
function createConfigHoc(createOptions) {
    const {
        hoc = [], // 需要额外添加的高阶组件
        onConstructor = () => undefined,// 返回值作为 extendProps
        onDidMount = () => undefined, // 返回值作为 extendProps
        onUnmount = () => undefined,
    } = createOptions;

    // 所有的高阶组件
    const higherOrderComponents = compose(hoc);

    return (options = {}) => {
        return WrappedComponent => {
            const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

            @higherOrderComponents
            class WithConfig extends Component {
                static displayName = `WithConfig(${componentName})`;

                constructor(props) {
                    super(props);
                    this.state.extendProps = onConstructor(options, this.props) || {};
                }

                state = {
                    extendProps: {},
                };

                componentDidMount() {
                    const { extendProps } = this.state;
                    const props = onDidMount(options, this.props);

                    if (props) {
                        this.setState({ extendProps: { ...extendProps, ...props } });
                    }
                }

                componentWillUnmount() {
                    onUnmount(options, this.props);
                }

                render() {
                    const { extendProps } = this.state;

                    // this.props 优先级 高于 extendProps
                    return (
                        <WrappedComponent {...extendProps} {...this.props}/>
                    );
                }
            }

            return WithConfig;
        };
    };
}


function compose(functions) {
    if (functions.length === 0) {
        return arg => arg;
    }

    if (functions.length === 1) {
        return functions[0];
    }

    return functions.reduce((a, b) => (...args) => a(b(...args)));
}
