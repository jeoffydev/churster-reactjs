 
import {useNavigate} from 'react-router-dom';

const CreateEventComponent = () => {
    const navigate = useNavigate()
    return (
        <div>
            Create Event soon...
            <p> <button onClick={()=>{navigate("/dashboard")}}>Dashboard</button></p> 
        </div>
    )
}

export default CreateEventComponent