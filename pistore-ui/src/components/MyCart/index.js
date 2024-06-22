import React, { useEffect, useState } from 'react';
import InteractionDataGetCartItems from 'components/Action/InteractDataGetCartItems';
import interactDataUser from 'components/Action/InteractDataUser';
import './index.css';
import rootURL from 'components/Action';
import interactData from 'components/InteractData/interactData';

function MyCart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); // Tổng giá trị

    useEffect(() => {
        const email = localStorage.getItem('loggedInEmail');
        if (email) {
            interactDataUser(email, (userData) => {
                if (userData) {
                    getCartItem(userData.UserID); // Khi lấy được userId, gọi hàm getCartItem một lần
                } else {
                    console.error('Failed to fetch user data');
                }
            });
        } else {
            window.location.href = '/login';
        }
    }, []);

    const removeCartItem = async (cartItemID) => {
        console.log(cartItemID);
        try {
            console.log(cartItemID);
            const URL = `${rootURL}/api/Mycart/removecartitem.php`;
            const Method = 'POST';
            await interactData(URL, { cartItemID: cartItemID }, Method);
            // Sau khi xóa thành công, cập nhật lại danh sách giỏ hàng
            const updatedCartItems = cartItems.filter((item) => item.cartItemID !== cartItemID);
            setCartItems(updatedCartItems);
            updateTotalPrice(updatedCartItems);
        } catch (error) {
            console.error('Failed to remove cart item:', error);
        }
    };

    const getCartItem = async (userId) => {
        try {
            InteractionDataGetCartItems(userId, (cartItemsData) => {
                if (cartItemsData) {
                    setCartItems(cartItemsData);
                    updateTotalPrice(cartItemsData);
                } else {
                    console.error('Failed to fetch cart items data');
                }
            });
        } catch (error) {
            console.error('Failed to Get cart item:', error);
        }
    };

    const updateTotalPrice = (items) => {
        let total = 0;
        items.forEach((item) => {
            total += parseFloat(item.Price);
        });
        setTotalPrice(total);
    };

    return (
        <div className="containerBody container">
            <div className="row">
                <div className="col-lg-10">
                    <h1 className="styleH1 mx-0">My Cart</h1>
                </div>
                <div className="col-lg-2">
                    <h4 className="styleH4" style={{ marginTop: '17px' }}>
                        Total: {totalPrice}$ {/* Hiển thị tổng giá trị */}
                    </h4>
                </div>
            </div>
            <table className="table cartTable">
                <thead className="text-center">
                    <tr>
                        <th>Game Name</th>
                        <th>Price</th>
                        <th>DataTimeAdded</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.GameName}</td>
                            <td>{item.Price}$</td>
                            <td>{item.DateTime}</td>
                            <td>{item.status}</td>
                            {/* Nút X để xoá cartItem */}
                            <td>
                                <button onClick={() => removeCartItem(item.cartItemID)} className="Xicon">
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MyCart;
