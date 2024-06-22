import React, { useState, useEffect } from 'react';
import InteractDataGetContactNameandUrl from 'components/Action/InteractDataGetContactandUrl';
import ContactIcon from 'components/ContactIcon';

function RenderFollowUs({ gameID }) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        // Gọi hàm InteractDataGetContactNameandUrl để lấy dữ liệu về contacts
        InteractDataGetContactNameandUrl(gameID, (contactData) => {
            if (contactData) {
                setContacts(contactData);
            } else {
                console.error('Failed to fetch contact data');
            }
        });
    }, [gameID]);

    return (
        <div>
            <h4 className="styleH4 mt-5">Follow Us</h4>
            <div className="div-FollowUs text-center">
                <div className="d-flex justify-content-center">
                    {contacts.map((contact, index) => (
                        <div key={index} className="mx-2 followusIcon agilin-text-center">
                            <a href={contact.ContactURL} target="_blank" rel="noopener noreferrer">
                                <ContactIcon contactName={contact.ContactName} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RenderFollowUs;
