import React, {ReactElement} from 'react';
import {useStyles} from './styles';
import * as CSS from 'csstype';

export const StartUp: React.FC<Props> = (props: Props) => {
    const classes = useStyles();

    return (
        <p className={`${classes.mediumText}`}
           style={{textAlign: props.textAlign, margin: props.marginValue, marginBottom: props.marginBottom}}>
            {props.text}
        </p>
    );
};

type Props = {
    text: string | ReactElement,
    textAlign?: CSS.Property.TextAlign,
    marginValue?: CSS.Property.Margin,
    marginBottom?: CSS.Property.MarginBottom
}