import rootURL from "components/Action";
function fetchDataUsers() {
    return fetch(`${rootURL}api/users.php`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            return data; // Trả về dữ liệu để có thể sử dụng ở nơi khác
        })
        .catch((error) => {
            console.error('There was a problem with your fetch operation:', error);
        });
}

export default fetchDataUsers;
