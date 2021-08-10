import { useEffect, useState } from 'react';

import axiosApiInstance from '../../util/APIInstance';

import Hero from '../../components/hero/Hero';
import Form from './Form';

import './ShoppingList.css'

export default function ShoppingList() {
    // get all items
    const [items, setItems] = useState([]);

    // edit an item
    const [editItemSelected, setEditItemSelected] = useState('');
    const [editItemMode, setEditItemMode] = useState(false);

    // get all items
    const getData = () => {
        axiosApiInstance.get('/shopping-list/get-list')
        .then(response => {
            let data = response.data.data.filter(element => element.deleted === false);
            setItems(data);
        })
        .catch(error => {
            console.log(error.message);
        });
    }
    
    // edit an item
    const editData = (item) => {
        setEditItemSelected(item);
        setEditItemMode(true);
    }

    // delete an item
    const deleteData = (item) => {
        axiosApiInstance.put('/shopping-list/delete-item', { id: item._id })
        .then(response => {
            getData();
            alert('Items will be deleted and can\'t be undone.')
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    // delete an item
    const checkItem = (item) => {
        axiosApiInstance.put('/shopping-list/check-item', { id: item._id })
        .then(response => getData())
        .catch(error => {
            console.log(error.message);
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getData();
    }, []);

    return (
        <div>
            <Hero>
                <Form isEditForm={editItemMode} item={editItemSelected}></Form>
                     { items.map(item => (
                        <div className="items-container" key={item._id}>
                            <div className="items">
                                <div className="item">
                                    <div className={item.checked ? "check" : "checked"} onClick={() => checkItem(item)}><i className="fas fa-check"></i></div>
                                    <div className="content">{item.items}</div>
                                </div>
                                <div className="modify-item">
                                    <div onClick={() => editData(item)}>edit</div>
                                    <div onClick={() => deleteData(item)}>delete</div>
                                </div>
                            </div>
                        </div>
                    ))}
            </Hero>
        </div>
    )
}

