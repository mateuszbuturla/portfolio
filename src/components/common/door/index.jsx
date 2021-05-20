import React from 'react';
import {StyledDoor} from './styledDoor'
import doorImg from '../../../assets/door.png';

function Door ({left, right}) {
    return (<StyledDoor src={doorImg} left={left} right={right}/>)
}

export default Door