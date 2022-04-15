import {toLogin} from './index';
import {Toast} from 'antd-mobile';

const ERROR_SERVER = '系统开小差了，请稍后再试或联系管理员！';
const ERROR_NOT_FOUND = '您访问的资源不存在！';
const ERROR_FORBIDDEN = '您无权访问！';

function getErrorTip(error, tip) {
    if (tip && tip !== true) return tip;

    // http 状态码相关
    if (error?.response) {
        const { status } = error.response;

        if (status === 401) return toLogin();

        if (status === 403) return ERROR_FORBIDDEN;

        if (status === 404) return ERROR_NOT_FOUND;

        if (status >= 500) return ERROR_SERVER;
    }

    // 后端自定义信息
    const data = error?.response?.data || error;

    if (data && typeof data === 'string') return data;
    if (data?.message) return data.message;
    if (data?.msg) return data.msg;

    return '未知错误';
}

export default function handleError({ error, tip }) {
    const description = getErrorTip(error, tip);
    if (!description) return;

    // 避免卡顿
    setTimeout(() => {
        Toast.show({
            icon: 'fail',
            content: description,
        });
    });
}
