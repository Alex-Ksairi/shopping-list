import EditForm from './EditForm';
import AddForm from './AddForm';

export default function Form(props) {

    if (props.isEditForm) {
        return <EditForm item={props.item}/>
    }
    else {
        return <AddForm />
    }
};






