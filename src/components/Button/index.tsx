import React from 'react';
import { View } from 'react-native';

import { Container } from './styles'
import { Props } from './types';

const Button = ({ 
    title,
    onPress,
    disabled,
    icon,
    outlined, 
    color, 
    textType = 'regular', 
    textColor
}: Props) => {
    return (
    <Container 
    onPress={onPress}
    disabled={disabled}
    outlined={outlined || disabled}
    color={color}
>
    {!! icon && (
        <>
        {icon}        
        </>
    ) }
</Container>
    );
};

export default Button;