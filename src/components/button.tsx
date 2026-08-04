import { StyledButton } from "../styles"

type ButtonProps = {
    label: string,
    type?: "submit" | "button" | "reset",
    variants?: "success" | "info" | "danger"|"outline";
    action?: () => void
}
export const Button = ({ type = "button", variants = "info", ...props }: ButtonProps) => {
    return <StyledButton
        varaints={variants}
        width={100}
        type={type}
        onClick={props.action}
    >{props.label}</StyledButton>
}


// button must have 1, label, action, classname 
