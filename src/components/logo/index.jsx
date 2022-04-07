import {APP_NAME} from 'src/config';
import logo from './logo.png';
import styles from './style.module.less';

export default function Logo(props) {
    const { image, simple } = props;
    if (image) return logo;

    return (
        <div className={styles.root}>
            <img src={logo} alt="logo"/>
            {!simple && <h1>{APP_NAME}</h1>}
        </div>
    );
}
