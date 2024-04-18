import Image from 'next/image';
import styles from './page.module.scss';
import { Htag } from './components/Htag/Htag';

export default function Home() {
    return (
        <main className={styles.main}>
            <Htag tag='h1'>Заголовок</Htag>
        </main>
    );
}
