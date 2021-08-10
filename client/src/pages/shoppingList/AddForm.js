import { useState } from 'react';

import axiosApiInstance from '../../util/APIInstance';

import Banner from '../../components/banner/Banner';

const AddForm = () => {
    const [itemText, setItemText] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let data = {
            items: itemText,
            priority: selectedPriority
        };

        axiosApiInstance.post('/shopping-list/add-item', data)
        .then(response => {
            if (response) {
                alert('Items have been successfully added to your list!')
                setItemText('');
                setSelectedPriority('');
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
                <h1>Start listing your items & enjoy</h1>
                <div></div>
                <form className="form" onSubmit={e => handleSubmit(e)}>
                    <input value={itemText} onChange={e => setItemText(e.target.value)} className="input" type="text" placeholder="Add an item" required/>
                    <select className="priority btn" value={selectedPriority} onChange={e => setSelectedPriority(e.target.value)} required>
                        <option value="" disabled selected className="option">Priority</option>
                        <option value="1" className="option">1</option>
                        <option value="2" className="option">2</option>
                        <option value="3" className="option">3</option>
                        <option value="4" className="option">4</option>
                        <option value="5" className="option">5</option>
                        <option value="6" className="option">6</option>
                    </select>
                    <button className="btn "><i className="fas fa-plus"></i></button>
                </form>
            </Banner>
        </div>
    )
};


export default AddForm;