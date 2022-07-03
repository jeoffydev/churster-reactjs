import React from "react";

interface IProps {
    iconColour?: string;
}

export const AboutIcon: React.FunctionComponent<IProps> = (props) => {
    const { iconColour } = props;
    const aboutIconColour = iconColour ? iconColour : "#9DA3B9";
    return (
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none"  >
            <path d="M6.20748 0.866716C5.00325 0.291764 3.32006 0.0101211 1.06658 0.000121962C0.854053 -0.00276543 0.645697 0.0592066 0.469296 0.177774C0.324504 0.275642 0.20598 0.40759 0.124148 0.562013C0.0423158 0.716436 -0.000316094 0.888602 1.76447e-06 1.06337V10.5992C1.76447e-06 11.2438 0.45863 11.7301 1.06658 11.7301C3.43538 11.7301 5.81152 11.9515 7.23473 13.2967C7.2542 13.3152 7.27867 13.3275 7.30511 13.3322C7.33154 13.3369 7.35877 13.3337 7.38341 13.3231C7.40806 13.3124 7.42903 13.2948 7.44372 13.2723C7.45841 13.2498 7.46617 13.2235 7.46604 13.1967V1.96062C7.4661 1.88482 7.44989 1.80988 7.41849 1.74088C7.38709 1.67188 7.34125 1.61042 7.28406 1.56066C6.95806 1.28196 6.59593 1.04854 6.20748 0.866716V0.866716ZM15.5294 0.176774C15.3529 0.0585017 15.1445 -0.00312429 14.9321 0.000121962C12.6786 0.0101211 10.9954 0.290431 9.79118 0.866716C9.40276 1.04821 9.04053 1.28117 8.71427 1.55932C8.65721 1.60917 8.61148 1.67065 8.58014 1.73964C8.54881 1.80863 8.53261 1.88352 8.53262 1.95929V13.196C8.53261 13.2218 8.54021 13.247 8.55448 13.2685C8.56874 13.29 8.58904 13.3068 8.61282 13.3168C8.6366 13.3268 8.66281 13.3296 8.68815 13.3248C8.71349 13.3199 8.73684 13.3077 8.75527 13.2897C9.61087 12.4397 11.1124 11.7291 14.9334 11.7295C15.2163 11.7295 15.4876 11.6171 15.6876 11.4171C15.8876 11.2171 16 10.9458 16 10.6629V1.0637C16.0004 0.888589 15.9577 0.716077 15.8756 0.561394C15.7935 0.406711 15.6746 0.274616 15.5294 0.176774V0.176774Z" fill={aboutIconColour}/>
        </svg> 
    );
};

export default AboutIcon;