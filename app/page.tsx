import Image from 'next/image';
import styles from './page.module.scss';
import { Button, Htag } from '@/components';
import { P } from '@/components';

export default function Home() {
    return (
        <main className={styles.main}>
            <Htag tag='h1'>Заголовок</Htag>
            <Button appearance='primary' arrow='right'>
                click
            </Button>
            <P size='l'>hello</P>
        </main>
    );
}
