document.addEventListener("DOMContentLoaded", function () {
    const zoomButton = document.querySelector('.product-image-zoom-modal-button');
    const zoomCloseButton = document.querySelector('.product-media-modal__toggle');
    const body = document.body;

    if (zoomButton) {
        zoomButton.addEventListener('click', () => {
            const productImageModal = document.querySelector('.product-media-modal.product-image-zoom-modal.media-modal');
            if (productImageModal) {
                body.style.overflow = 'hidden';
                productImageModal.style.visibility = 'unset';
                setTimeout(() => {
                    productImageModal.style.opacity = '1';
                    productImageModal.style.zIndex = '100000';
                }, 200); // Delay of 200ms
            }
        });
    }

    if (zoomCloseButton) {
        zoomCloseButton.addEventListener('click', () => {
            const productImageModal = document.querySelector('.product-media-modal.product-image-zoom-modal.media-modal');
            if (productImageModal) {
                productImageModal.style.opacity = '0';
                setTimeout(() => {
                    productImageModal.style.visibility = '';
                    productImageModal.style.zIndex = '';
                    body.style.overflow = '';
                }, 200); // Delay of 200ms to match opening transition
            }
        });
    }
})