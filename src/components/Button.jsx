import {getClasses} from '../utils/getClasses';

const buttonTypes = {
    primary: 'primary',
    secondary: 'secondary'
};

function Button({type, variant = 'primary', children, ...rest}) {
  return (
    <button type={type === 'submit' ? 'submit' : 'button'} {...rest}>{children}</button>
  )
}

export default Button

export function SelectButton({children, id, ...rest}){
    return(
        <select id={id} {...rest}>{children}</select>
    )
}