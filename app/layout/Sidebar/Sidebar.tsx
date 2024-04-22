import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';
import { Search } from '@/components';
import { memo } from 'react';
import Link from 'next/link';

export const Sidebar = memo(function Sidebar({ className, ...props }: SidebarProps): JSX.Element {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Link href={'/'}>
                <Logo className={styles.logo} />
            </Link>

            <Search />
            <Menu />
        </div>
    );
});
