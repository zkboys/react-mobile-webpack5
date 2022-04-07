export default function handleSuccess({ data, tip }) {
    if (!tip) return;

    // 避免卡顿
    setTimeout(() => {
        // TODO 提示
        alert(tip);
    });
}
