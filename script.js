document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById('event');
    var productImage = document.getElementById('product-image');

    selectElement.addEventListener('change', function() {
        var selectedOption = this.value;
        var imagePath;

        switch(selectedOption) {
            case '1':
                imagePath = 'img/yeezy.jpg';
                break;
            case '2':
                imagePath = 'img/gray.jpg';
                break;
            case '3':
                imagePath = 'img/white.jpg';
                break;
            case '4':
                imagePath = 'img/green.jpg';
                break;
            case '5':
                imagePath = 'img/black.jpg';
                break;
            case '6':
                imagePath = 'img/white1.jpg';
                break;
            case '7':
                imagePath = 'img/boost1.jpg';
                break;
            case '8':
                imagePath = 'img/boost2.jpg';
                break;
            case '9':
                imagePath = 'img/boost3.jpg';
                break;
            case '10':
                imagePath = 'img/boost4.jpg';
                break;
            case '11':
                imagePath = 'img/boost5.jpg';
                break;
            case '12':
                imagePath = 'img/boost6.jpg';
                break;
            default:
                imagePath = 'img/default.jpg';
        }
        productImage.src = imagePath;
    });
});