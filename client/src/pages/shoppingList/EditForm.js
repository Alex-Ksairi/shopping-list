import { useState } from 'react';

import axiosApiInstance from '../../util/APIInstance';

import Banner from '../../components/banner/Banner';

const EditForm = (props) => {
    const [editText, setEditText] = useState(props.item.items);
    const [editPriority, setEditPriority] = useState(props.item.priority);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let data = {
            id: props.item._id,
            items: editText,
            priority: editPriority
        };

        axiosApiInstance.put('/shopping-list/edit-item', data)
        .then(response => {
            if (response) {
                // console.log(response.data);
                alert('Items have been successfully edited!')
                setEditText('');
                setEditPriority('');
                window.location.reload(true);
            }
        })
        .catch(error => {
            console.log(error);
        });
            
    };

    return (
        <div>
            <Banner>
                <h1>Edit your items right here</h1>
                <div></div>
                <form className="form" onSubmit={e => handleSubmit(e)}>
                    <input value={editText} onChange={e => setEditText(e.target.value)} className="input" type="text" placeholder="Add an item" required/>
                    <select className="priority btn" value={editPriority} onChange={e => setEditPriority(e.target.value)}>
                        <option value="priority" className="option">priority</option>
                        <option value="1" className="option">1</option>
                        <option value="2" className="option">2</option>
                        <option value="3" className="option">3</option>
                        <option value="4" className="option">4</option>
                        <option value="5" className="option">5</option>
                        <option value="6" className="option">6</option>
                    </select>
                    <button className="btn"><i className="fas fa-plus"></i></button>
                </form>
            </Banner>
        </div>
    )
};


export default EditForm;