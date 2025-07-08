document.addEventListener('DOMContentLoaded', function () {

    setInterval(() => {

        const ele = document.querySelector('#rebuy-cart__progress-bar-meter-label');

        if (ele) {
            let content = ele.textContent;
            if (content.includes(".00")) {
                let newContent = content.replace(".00", "");
                content = newContent
                ele.textContent = content;
            }

        }

    }, 2000)
});
