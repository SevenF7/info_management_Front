// import "./comp1.scss" // 全局引入

// 模块化引入
import styles from "./comp1.module.scss"

function Comp() {
    return (
        <div className={styles.box}>
            <p>Comp1你好</p>
        </div>
    )
}

export default Comp