// import styles later on
import styles from '../styles/modules/title.module.scss';

const PageTitle = ({children, ...rest}) => {
  return (
    <div className={styles.title} {...rest}>
        <p>{children}</p>
    </div>
  )
}

export default PageTitle