import styles from '../styles/Category.module.css';
import CategoryList from './CategoryList';

const Category = ({}) => {
    const categoryTitle = 'Popular Product Categories';

    return(
        <div className={styles.category_area}>
            <div className={styles.category_title}>
                <h3>{categoryTitle}</h3>
            </div>
            <CategoryList></CategoryList>
        </div>
    )
}




export default Category;