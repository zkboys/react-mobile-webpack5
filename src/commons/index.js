import storage from './storage';

/**
 * 是否是登录页面
 */
export function isLoginPage() {
    return window.location.pathname === '/login';
}

/**
 * 设置登录用户
 */
export function setLoginUser(data) {
    storage.session.setItem('loginUser', data);
}

/**
 * 是否是已登录
 * @returns {boolean}
 */
export function isLogin() {
    return !!getLoginUser();
}

/**
 * 获取登录用户
 */
export function getLoginUser() {
    return storage.session.getItem('loginUser');
}

/**
 * 获取token
 */
export function getToken() {
    const token = storage.session.getItem('token');
    const loginUser = getLoginUser();

    return token || loginUser?.token;
}

/**
 * 设置token
 */
export function setToken(token) {
    storage.session.setItem('loginUser', token);
    const loginUser = getLoginUser();
    if (loginUser) loginUser.token = token;
    setLoginUser(loginUser);
}

/**
 * 进入首页
 */
export function toHome() {
    window.location.href = storage.session.getItem('last-href') || '/';
    return false;
}

/**
 * 跳转到登录页面
 */
export function toLogin() {
    storage.session.clear();
    window.sessionStorage.clear();

    storage.session.setItem('last-href', window.location.href);
    window.location.href = '/login';
    return false;
}
