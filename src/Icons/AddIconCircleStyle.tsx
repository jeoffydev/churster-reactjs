import AddCircleIcon from '@mui/icons-material/AddCircle';
import React  from 'react';

interface IProps {
    iconColour?: string;
    fontSize?: "small" | "inherit" | "large" | "medium" | undefined;
}
const AddCircleIconStyle: React.FunctionComponent<IProps> = (props) => {
    const { iconColour, fontSize } = props;
    const newIconColour = iconColour ? iconColour : "#9DA3B9";
    return (
        <>
            <AddCircleIcon style={{ backgroundColor: newIconColour }} fontSize={fontSize} /> 
        </>
    );
};

export default AddCircleIconStyle;