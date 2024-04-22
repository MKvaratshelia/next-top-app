'use client';
import styles from './ButtonIcon.module.scss';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import cn from 'classnames';
import { memo } from 'react';

export const ButtonIcon = memo(function ButtonIcon({
    appearance,
    icon,
    className,
    ...props
}: ButtonIconProps): JSX.Element {
    const IconComp = icons[icon];
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.white]: appearance == 'white',
            })}
            {...props}>
            <IconComp />
        </button>
    );
});
