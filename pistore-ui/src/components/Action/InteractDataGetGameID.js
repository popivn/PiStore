import rootURL from './index.js';
async function InteractDataGetGameID() {
    try {
        const response = await fetch(`${rootURL}/api/game/GetGameID.php`); // Đường dẫn API
        if (!response.ok) {
            throw new Error('Failed to fetch game IDs');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
export default InteractDataGetGameID;
