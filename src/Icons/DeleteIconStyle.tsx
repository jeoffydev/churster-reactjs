import DeleteIcon from '@mui/icons-material/Delete';
import React  from 'react';

interface IProps {
    iconColour?: string;
    fontSize?: "small" | "inherit" | "large" | "medium" | undefined;
}
const DeleteIconStyle: React.FunctionComponent<IProps> = (props) => {
    const { iconColour, fontSize } = props;
    const newIconColour = iconColour ? iconColour : "#9DA3B9";
    return (
        <>
            <DeleteIcon style={{ backgroundColor: newIconColour }} fontSize={fontSize} /> 
        </>
    );
};

export default DeleteIconStyle;