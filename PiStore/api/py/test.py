def dem_so_luong_gia_tri():
    # Nhập dãy số từ bàn phím
    day_so = input("Nhập dãy số, cách nhau bởi dấu cách: ")

    # Tách các số trong dãy bằng dấu cách và chuyển thành danh sách các chuỗi số
    cac_so = day_so.split()

    # Đếm số lượng giá trị trong danh sách
    so_luong_gia_tri = len(cac_so)

    # In số lượng giá trị
    print("Số lượng giá trị là:", so_luong_gia_tri)

# Gọi hàm để thực thi chương trình
dem_so_luong_gia_tri()
