import React, { useState, useEffect, useMemo } from 'react';
import './index.css';
import interactDataGetAllContacts from 'components/Action/interactDataGetAllContacts';
import interactDataAddContact from 'components/Action/InteractDataAddContacts';
import Swal from 'sweetalert2';

function AddContact({ gameID }) {
    const [contacts, setContacts] = useState([]);
    const [contactUrl, setContactUrl] = useState('');
    const [addedContacts, setAddedContacts] = useState([]);
    const [contactName, setContactName] = useState('Facebook');

    useEffect(() => {
        interactDataGetAllContacts(setContacts);
    }, []);

    const memoizedContacts = useMemo(() => {
        if (!contacts) return null; // Add null check
        return contacts.map((contact) => (
            <option key={contact.Contact_id} value={contact.Name}>
                {contact.Name}
            </option>
        ));
    }, [contacts]);

    const handleInputChange = (event) => {
        setContactUrl(event.target.value);
    };

    const handleSaveContact = () => {
        if (addedContacts.length === 0) {
            alert('Please add at least one contact before saving.');
            return;
        }

        try {
            interactDataAddContact(addedContacts);
            Swal.fire({
                title: 'Great!',
                text: 'Your Contact was Added!',
                icon: 'success',
                customClass: {
                    backdrop: 'custom-swal-bg',
                    popup: 'custom-swal-bg',
                    confirmButton: 'custom-swal-button',
                },
            });
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to add contact',
                icon: 'error',
                customClass: {
                    backdrop: 'custom-swal-bg',
                    popup: 'custom-swal-bg',
                    confirmButton: 'custom-swal-button',
                },
            });
        }
    };

    const handleAddContact = () => {
        const selectedContact = contacts.find((contact) => contact.Name === contactName);

        if (!selectedContact) {
            console.error('Contact not found:', contactName);
            return;
        }

        if (addedContacts.some((contact) => contact.contactID === selectedContact.Contact_id)) {
            alert('Contact already exists!');
            return;
        }

        const newContact = {
            gameID: gameID,
            contactID: selectedContact.Contact_id,
            contactUrl: contactUrl.trim(),
        };

        setAddedContacts((prevContacts) => [...prevContacts, newContact]);
    };

    const handleRemoveContact = (index) => {
        setAddedContacts((prevContacts) => {
            const updatedContacts = [...prevContacts];
            updatedContacts.splice(index, 1);
            return updatedContacts;
        });
    };

    return (
        <div className="row mb-3">
            <h3 className="styleH2 rounded rounded-0">Add Contact</h3>
            <div className="col-lg-5">
                <select className="select-style" value={contactName} onChange={(e) => setContactName(e.target.value)}>
                    {memoizedContacts}
                </select>
                <input
                    type="text"
                    placeholder="Enter contact URL"
                    value={contactUrl}
                    onChange={handleInputChange}
                    className="input-style-admin"
                />
                <button onClick={handleAddContact} className="styleP-Add-Admin">
                    Add
                </button>
                <button onClick={handleSaveContact} className="styleP-Save-Admin">
                    Save
                </button>
            </div>
            <div className="col-lg-7">
                <table className="contact-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact URL</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addedContacts.map((contact, index) => (
                            <tr key={index}>
                                <td>{contacts.find((c) => c.Contact_id === contact.contactID)?.Name}</td>
                                <td>{contact.contactUrl}</td>
                                <td>
                                    <button onClick={() => handleRemoveContact(index)}>X</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AddContact;
