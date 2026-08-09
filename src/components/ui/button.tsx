import { useState, type ReactNode, type MouseEvent } from "react";
import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "outline" | "danger" | "info";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
    label?: string;
    children?: ReactNode;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    disabled?: boolean;
    type?: "submit" | "button" | "reset";
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    withBorder?: boolean;
    labelColor?: string;
    // Toggle / Filter props
    isToggle?: boolean;
    active?: boolean;
    defaultActive?: boolean;
    activeColor?: string;
    onToggle?: (active: boolean) => void;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({
    label,
    children,
    leftIcon,
    rightIcon,
    disabled = false,
    type = "button",
    variant = "primary",
    size = "md",
    fullWidth = false,
    withBorder = true,
    labelColor,
    isToggle = false,
    active: controlledActive,
    defaultActive = false,
    activeColor = "#ec5baa",
    onToggle,
    onClick,
}: ButtonProps) => {
    const [internalActive, setInternalActive] = useState<boolean>(defaultActive);
    const isActive = controlledActive !== undefined ? controlledActive : internalActive;

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        if (isToggle) {
            const nextActive = !isActive;
            if (controlledActive === undefined) {
                setInternalActive(nextActive);
            }
            if (onToggle) {
                onToggle(nextActive);
            }
        }
        if (onClick) {
            onClick(event);
        }
    };

    const effectiveVariant: ButtonVariant = isToggle
        ? (isActive ? (variant === "outline" ? "primary" : variant) : "outline")
        : variant;

    return (
        <ButtonContainer
            type={type}
            $variant={effectiveVariant}
            $size={size}
            $fullWidth={fullWidth}
            $withBorder={withBorder}
            $labelColor={labelColor}
            $isToggle={isToggle}
            $isActive={isActive}
            $activeColor={activeColor}
            disabled={disabled}
            onClick={handleClick}
        >
            {leftIcon && <span className="icon">{leftIcon}</span>}
            {(label || children) && <span className="label">{label || children}</span>}
            {rightIcon && <span className="icon">{rightIcon}</span>}
        </ButtonContainer>
    );
};

interface StyledButtonProps {
    $variant: ButtonVariant;
    $size: ButtonSize;
    $fullWidth: boolean;
    $withBorder: boolean;
    $labelColor?: string;
    $isToggle?: boolean;
    $isActive?: boolean;
    $activeColor?: string;
}

const variantStyles = {
    primary: css`
        background-color: #006486;
        color: #ffffff;
        border: 1px solid #006486;
        &:hover:not(:disabled) {
            background-color: #004d66;
            border-color: #004d66;
        }
    `,
    secondary: css`
        background-color: #4a5568;
        color: #ffffff;
        border: 1px solid #4a5568;
        &:hover:not(:disabled) {
            background-color: #2d3748;
            border-color: #2d3748;
        }
    `,
    outline: css`
        background-color: transparent;
        color: #ffffff;
        border: 1px solid #006486;
        &:hover:not(:disabled) {
            background-color: rgba(0, 100, 134, 0.15);
        }
    `,
    danger: css`
        background-color: #e53e3e;
        color: #ffffff;
        border: 1px solid #e53e3e;
        &:hover:not(:disabled) {
            background-color: #c53030;
            border-color: #c53030;
        }
    `,
    info: css`
        background-color: #3182ce;
        color: #ffffff;
        border: 1px solid #3182ce;
        &:hover:not(:disabled) {
            background-color: #2b6cb0;
            border-color: #2b6cb0;
        }
    `,
};

const sizeStyles = {
    sm: css`
        padding: 6px 12px;
        font-size: 0.875rem;
        gap: 6px;
    `,
    md: css`
        padding: 10px 18px;
        font-size: 1rem;
        gap: 8px;
    `,
    lg: css`
        padding: 14px 24px;
        font-size: 1.125rem;
        gap: 10px;
    `,
};

const ButtonContainer = styled.button<StyledButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "fit-content")};
    white-space: nowrap;
    flex-shrink: 0;
    border-radius: 40px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none;

    ${({ $size }) => sizeStyles[$size] || sizeStyles.md}
    ${({ $variant }) => variantStyles[$variant] || variantStyles.primary}
    
    ${({ $withBorder }) => !$withBorder && css`
        border-color: transparent !important;
    `}
    ${({ $labelColor }) => $labelColor && css`
        color: ${$labelColor} !important;
    `}

    ${({ $isToggle, $isActive, $activeColor }) =>
        $isToggle &&
        ($isActive
            ? css`
                  background-color: ${$activeColor || "#ec5baa"} !important;
                  border-color: ${$activeColor || "#ec5baa"} !important;
                  color: #ffffff !important;
                  box-shadow: 0 0 14px rgba(236, 91, 170, 0.45);

                  &:hover:not(:disabled) {
                      background-color: #d84594 !important;
                      border-color: #d84594 !important;
                  }
              `
            : css`
                  background-color: transparent !important;
                  border: 1px solid rgba(255, 255, 255, 0.2) !important;
                  color: rgba(255, 255, 255, 0.85) !important;

                  &:hover:not(:disabled) {
                      background-color: rgba(236, 91, 170, 0.15) !important;
                      border-color: ${$activeColor || "#ec5baa"} !important;
                      color: #ffffff !important;
                  }
              `)}

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
