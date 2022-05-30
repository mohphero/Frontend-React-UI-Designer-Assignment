import Image from 'next/image';
import ea from './../public/images/ea.svg'
import styles from '../styles/CategoryList.module.css';

const CategoryList = () => {
    return(
        <div className={styles.category_list}>
            <div className={styles.categoryList_items}>
                <div className='style.items_image'>
                <Image src={ea} alt=""/>
                </div>
                <div>
                    <p>Electronics Appliances</p>
                </div>
            </div>
            <div className={styles.categoryList_items}>
                <div className='style.items_image'>
                <Image src={ea} alt=""/>
                </div>
                <div>
                    <p>Electronics Appliances</p>
                </div>
            </div>
            <div className={styles.categoryList_items}>
                <div className='style.items_image'>
                <Image src={ea} alt=""/>
                </div>
                <div>
                    <p>Electronics Appliances</p>
                </div>
            </div>
            <div className={styles.categoryList_items}>
                <div className='style.items_image'>
                <Image src={ea} alt=""/>
                </div>
                <div>
                    <p>Electronics Appliances</p>
                </div>
            </div>
            <div className={styles.categoryList_items}>
                <div className='style.items_image'>
                <Image src={ea} alt=""/>
                </div>
                <div>
                    <p>Electronics Appliances</p>
                </div>
            </div>
            <div className={styles.categoryList_items}>
                <div className='style.items_image'>
                <Image src={ea} alt=""/>
                </div>
                <div>
                    <p>Electronics Appliances</p>
                </div>
            </div>
            <div className={styles.categoryList_items}>
                <div className='style.items_image'>
                <Image src={ea} alt=""/>
                </div>
                <div>
                    <p>Electronics Appliances</p>
                </div>
            </div>
            <div className={styles.categoryList_items}>
                <div className='style.items_image'>
                <Image src={ea} alt=""/>
                </div>
                <div>
                    <p>Electronics Appliances</p>
                </div>
            </div>
        </div>
    )
}






export default CategoryList;