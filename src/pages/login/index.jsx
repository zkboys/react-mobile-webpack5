import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router';
import {Button, Form, Input} from 'antd-mobile';
import {PageContent} from 'src/components';
import {useFunction} from '@ra-lib/hooks';
import config from 'src/commons/config-hoc';
import s from './style.module.less';
import {setLoginUser, toHome} from 'src/commons';
import {IS_DEV} from 'src/config';

export default config({
    title: '欢迎登录',
})(function Index(props) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const handleSubmit = useFunction(async (values) => {
        // TODO 接口对接
        // const res = await props.ajax.post('/login', values, { setLoading });
        console.log(props.ajax, setLoading);
        const res = { id: 123, name: 123, token: 123 };
        setLoginUser({
            id: res.id,
            name: res.name,
            token: res.token,
        });
        toHome();
    });

    // 开发测试时，表单填充
    useEffect(() => {
        IS_DEV && form.setFieldsValue({
            account: '123',
            password: '123',
        });
    }, [form]);
    return (
        <PageContent className={s.root} loading={loading}>
            <div className={s.rootInner}>
                <div className={s.title}>
                    <img
                        className={s.avatar}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        alt="头像"
                    />
                    <div className={s.tip}>
                        <h1>欢迎登录NFT</h1>
                        <span>精选海量数字藏品等你挑选</span>
                    </div>
                </div>
                <Form
                    className={s.loginForm}
                    form={form}
                    name="login"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        name="account"
                        label="账号"
                        rules={[{ required: true }]}
                    >
                        <Input placeholder="请输入邮箱/用户名/手机号"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[{ required: true }]}
                    >
                        <Input placeholder="请输入密码" type="password"/>
                    </Form.Item>
                    <Button
                        className={s.loginButton}
                        block
                        color="primary"
                        shape="rounded"
                        type="submit"
                    >
                        登录
                    </Button>
                </Form>
                <div className={s.tools}>
                    <span onClick={() => navigate('/forget_password')}>忘记密码</span>
                    <span onClick={() => navigate('/message_login')}>短信验证码登录</span>
                    <span onClick={() => navigate('/register')}>注册账号</span>
                </div>
            </div>
        </PageContent>
    );
});
