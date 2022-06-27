import React from "react";

interface IProps {
    iconColour?: string;
}

export const PasswordIcon: React.FunctionComponent<IProps> = (props) => {
    const { iconColour } = props;
    const passwordIconColour = iconColour ? iconColour : "#273B69";
    return (
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none"  >
            <path fillRule="evenodd" clipRule="evenodd" d="M4.7688 6.71384H13.2312C15.5886 6.71384 17.5 8.58304 17.5 10.8885V15.8253C17.5 18.1308 15.5886 20 13.2312 20H4.7688C2.41136 20 0.5 18.1308 0.5 15.8253V10.8885C0.5 8.58304 2.41136 6.71384 4.7688 6.71384ZM8.99492 15.3295C9.49283 15.3295 9.88912 14.9419 9.88912 14.455V12.2489C9.88912 11.7719 9.49283 11.3844 8.99492 11.3844C8.50717 11.3844 8.11088 11.7719 8.11088 12.2489V14.455C8.11088 14.9419 8.50717 15.3295 8.99492 15.3295Z" fill={passwordIconColour}/>
            <path d="M14.5228 5.39595V6.86667C14.1672 6.7673 13.7912 6.71761 13.4051 6.71761H12.7446V5.39595C12.7446 3.37868 11.0679 1.73903 9.00518 1.73903C6.94242 1.73903 5.26579 3.36874 5.25563 5.37608V6.71761H4.6053C4.20901 6.71761 3.83304 6.7673 3.47739 6.87661V5.39595C3.48755 2.41476 5.95677 0 8.98486 0C12.0536 0 14.5228 2.41476 14.5228 5.39595Z" fill={passwordIconColour}/>
        </svg>

    );
};

export default PasswordIcon;