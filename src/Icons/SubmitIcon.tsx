import React from "react";

interface IProps {
    iconColour?: string;
}

export const SubmitIcon: React.FunctionComponent<IProps> = (props) => {
    const { iconColour } = props;
    const submitIconColour = iconColour ? iconColour : "#C5FEED";
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"  >
         <path d="M16 0L0 6.3984L5.96917 9.09773L14.4004 1.5996L6.90227 10.0308L9.6016 15.996L16 0Z" fill={submitIconColour}/>
        </svg>
    );
};

export default SubmitIcon;