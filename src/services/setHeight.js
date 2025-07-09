function setViewportHeight() {
    const vh = window.innerHeight * 0.01; // Tính 1% chiều cao thực tế
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Gọi hàm khi tải trang
setViewportHeight();

// Cập nhật lại khi thay đổi kích thước màn hình
window.addEventListener('resize', setViewportHeight);