import React from 'react'
import './Badge.scss'
import cn from 'classnames'



const Badge =({color, onClick, className}) =>
    <i onClick={onClick} className={cn('badge', {[`badge--${color}`]: color}, className )}/>

export default Badge;

