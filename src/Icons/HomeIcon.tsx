import React from "react";

interface IProps {
    iconColour?: string;
}

export const HomeIcon: React.FunctionComponent<IProps> = (props) => {
    const { iconColour } = props;
    const homeIconColour = iconColour ? iconColour : "#9DA3B9";
    return (
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none"  >
            <path d="M8.5 0L0.5 6V18H5.5V11H11.5V18H16.5V6L8.5 0Z" fill={homeIconColour}/>
        </svg>

    );
};

export default HomeIcon;