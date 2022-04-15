import {Toast} from 'antd-mobile';

export default function handleSuccess({ data, tip }) {
    if (!tip) return;

    // 避免卡顿
    setTimeout(() => {
        Toast.show({
            icon: 'success',
            content: tip,
        });
    });
}
