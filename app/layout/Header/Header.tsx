'use client';
import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import Logo from '../logo.svg';
import cn from 'classnames';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { motion, useReducedMotion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { memo, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const Header = memo(function Hedare({ className, ...props }: HeaderProps): JSX.Element {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20,
            },
        },
        closed: {
            opacity: shouldReduceMotion ? 1 : 0,
            x: '100%',
        },
    };

    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo />

            <ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpened(true)} />
            <motion.div
                className={styles.mobileMenu}
                variants={variants}
                initial={'closed'}
                animate={isOpened ? 'opened' : 'closed'}>
                <Sidebar />
                <ButtonIcon
                    className={styles.menuClose}
                    appearance='white'
                    icon='close'
                    onClick={() => setIsOpened(false)}
                />
            </motion.div>
        </header>
    );
});