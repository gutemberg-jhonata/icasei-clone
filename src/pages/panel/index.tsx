import { GetServerSideProps } from "next";
import { GiftForm } from "../../components/GiftForm";
import styles from "./panel.module.css";

export default function Panel() {
    return (
        <div className={styles.panelContainer}>
            <header className={styles.title}>Adicionar novo presente</header>
            <GiftForm />
        </div>
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
