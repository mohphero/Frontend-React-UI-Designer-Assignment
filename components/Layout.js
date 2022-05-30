import styles from '../styles/Layout.module.css';
import Category from './Category';

const Layout = ({children}) => {
    return(
        <div className={styles.container}>
            <div>This is test</div>
            {children}
            <Category></Category>
        </div>
    )
}

export default Layout