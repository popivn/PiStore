import React from 'react';
import { useParams } from 'react-router-dom'; // Thay vì sử dụng useLocation, chúng ta sử dụng useParams để truy cập dynamic segment trong URL
import AddContact from './contact';
import AddPlatforms from './platforms';
import MGameinfor from './ModifyGameInformation';

function ModifyDetails() {
    const { gameID } = useParams(); // Trích xuất gameID từ dynamic segment của URL
    return (
        <div>
            <AddContact gameID={gameID} />
            <AddPlatforms gameID={gameID} />
            <MGameinfor gameID={gameID} />
        </div>
    );
}

export default ModifyDetails;
