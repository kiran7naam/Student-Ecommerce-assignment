var productData = [];
var http = new XMLHttpRequest();
http.open("GET", "guitardata.json", true);
http.send();
http.onreadystatechange = function () {
  if (http.status == 200 && http.readyState == 4) {
    productData = JSON.parse(http.responseText);
    var guitar_slider = document.getElementById("guitar_slider");
    if(guitar_slider !== '' && guitar_slider !=  null){
        guitar_slider.src = productData["allProducts"][0]["image_path"];
        document.getElementById("product-description").innerHTML =
        productData["allProducts"][0]["product_description"];
        document.getElementById("shipping-details").innerHTML =
        productData["allProducts"][0]["shipping_details"];
        document.getElementById("customer-reviews").innerHTML =
        productData["allProducts"][0]["customer_reviews"];
        guitar_slider.setAttribute("swiper-range-attr", 0);
    }    
  }
};
function shownextguitar() {
  var id = document
    .getElementById("guitar_slider")
    .getAttribute("swiper-range-attr");
  if (id < (productData["allProducts"].length-1)) {
    id = parseInt(id) + 1;
    var result = productData["allProducts"].filter((value, index) => {
      if (index === parseInt(id)) return value;
    });
    var guitar_slider = document.getElementById("guitar_slider");
    guitar_slider.src = result[0]["image_path"];
    document.getElementById("product-description").innerHTML =
      result[0]["product_description"];
    document.getElementById("shipping-details").innerHTML =
      result[0]["shipping_details"];
    document.getElementById("customer-reviews").innerHTML =
      result[0]["customer_reviews"];
    guitar_slider.setAttribute("swiper-range-attr", id);
  }
}
function showprevguitar() {
  var id = document
    .getElementById("guitar_slider")
    .getAttribute("swiper-range-attr");
  if (id > 0) {
    id = parseInt(id) - 1;
    var result = productData["allProducts"].filter((value, index) => {
      if (index === parseInt(id)) return value;
    });
    console.log(result);
    var guitar_slider = document.getElementById("guitar_slider");
    guitar_slider.src = result[0]["image_path"];
    document.getElementById("product-description").innerHTML =
      result[0]["product_description"];
    document.getElementById("shipping-details").innerHTML =
      result[0]["shipping_details"];
    document.getElementById("customer-reviews").innerHTML =
      result[0]["customer_reviews"];
    guitar_slider.setAttribute("swiper-range-attr", id);
  }
}
function buy_product(){
    var id = document.getElementById("guitar_slider").getAttribute('swiper-range-attr'); 
    window.localStorage.removeItem('guitar_id');
    window.localStorage.setItem('guitar_id',id);
    window.open('buy-product.html','_self');
}
