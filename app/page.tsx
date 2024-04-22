import styles from './page.module.scss';
import { Button, Htag, Tag, P, Rating } from '@/components';

export default function Home() {
    return (
        <>
            <Htag tag='h1'>Заголовок</Htag>
            <Button appearance='primary' arrow='right'>
                click
            </Button>
            <P size='l'>hello</P>
            <Tag color='red'>1</Tag>
            <Rating rating={1} isEditable />
        </>
    );
}
