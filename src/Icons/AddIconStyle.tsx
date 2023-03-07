import AddIcon from '@mui/icons-material/Add';
import React  from 'react';

interface IProps {
    iconColour?: string;
    fontSize?: "small" | "inherit" | "large" | "medium" | undefined;
}
const AddIconStyle: React.FunctionComponent<IProps> = (props) => {
    const { iconColour, fontSize } = props;
    const newIconColour = iconColour ? iconColour : "#9DA3B9";
    return (
        <>
            <AddIcon style={{ backgroundColor: newIconColour }} fontSize={fontSize} /> 
        </>
    );
};

export default AddIconStyle;