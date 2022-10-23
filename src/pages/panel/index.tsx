import { GetServerSideProps } from "next";
import styles from "./panel.module.css";

export default function Panel() {
    return (
        <>
            <header className={styles.title}>Lista de presentes</header>
            <div className="divider">
                <svg width="56" height="2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="2" rx="1" fill="#C5AE82"></rect></svg>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        /*redirect: {
            destination: '/login'
        },*/
        props: {},
    }
}
