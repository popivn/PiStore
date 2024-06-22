import Swal from 'sweetalert2';

// Hàm kiểm tra validation của RoleID
export const isValidRoleID = (roleID) => {
    if (typeof roleID !== 'string' || roleID.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid Role ID.',
        });
        return false;
    }
    return true;
};

// Hàm kiểm tra validation của Birthday
export const isValidBirthday = (birthday) => {
    if (typeof birthday !== 'string' || birthday.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid Birthday.',
        });
        return false;
    }
    return true;
};

// Hàm kiểm tra validation của Money
export const isValidMoney = (money) => {
    if (typeof money !== 'string' || money.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid Money.',
        });
        return false;
    }
    return true;
};

// Hàm kiểm tra validation của Username
export const isValidUsername = (username) => {
    if (typeof username !== 'string' || username.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid Username.',
        });
        return false;
    }
    return true;
};

// Hàm kiểm tra validation của Password
export const isValidPassword = (password) => {
    if (typeof password !== 'string' || password.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid Password.',
        });
        return false;
    }
    return true;
};

// Hàm kiểm tra validation của Email
export const isValidEmail = (email) => {
    if (typeof email !== 'string' || email.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid Email.',
        });
        return false;
    }
    return true;
};

// Hàm kiểm tra validation của FirstName
export const isValidFirstName = (firstName) => {
    if (typeof firstName !== 'string' || firstName.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid First Name.',
        });
        return false;
    }
    return true;
};

// Hàm kiểm tra validation của LastName
export const isValidLastName = (lastName) => {
    if (typeof lastName !== 'string' || lastName.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid Last Name.',
        });
        return false;
    }
    return true;
};

// Hàm kiểm tra validation của Image
export const isValidImage = (image) => {
    if (typeof image !== 'string' || image.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid Image.',
        });
        return false;
    }
    return true;
};

// Hàm tổng hợp kiểm tra validation của userData
export const isValidUserData = (userData) => {
    return (
        isValidRoleID(userData.RoleID) &&
        isValidBirthday(userData.Birthday) &&
        isValidMoney(userData.Money) &&
        isValidUsername(userData.Username) &&
        isValidPassword(userData.Password) &&
        isValidEmail(userData.Email) &&
        isValidFirstName(userData.FirstName) &&
        isValidLastName(userData.LastName) &&
        isValidImage(userData.Image)
    );
};
