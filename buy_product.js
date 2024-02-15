var productData = [];
var http = new XMLHttpRequest();
http.open("GET", "guitardata.json", true);
http.send();
http.onreadystatechange = function () {
  if (http.status == 200 && http.readyState == 4) {
    productData = JSON.parse(http.responseText);
    var id = window.localStorage.getItem('guitar_id');
    var result = productData["allProducts"].filter((value, index) => {
        if (index === parseInt(id)) return value;
      });
      var guitar_image = document.getElementById("product_image");
      guitar_image.src = result[0]["image_path"];
        document.getElementById("product-description").innerHTML =
        result[0]["product_description"];
        document.getElementById("shipping-details").innerHTML =
        result[0]["shipping_details"];
        document.getElementById('product-price').innerHTML = result[0]['price'];
   
  }
};
function submit_purchase_form(){
    var full_name = document.getElementById('full_name').value;
    var mobile_no = document.getElementById('mobile_no').value;
    var email_id = document.getElementById('email_id').value;
    var address = document.getElementById('address').value;

    if(full_name == ''){
        toastr.error('Please enter Full name');
    }
    else if(mobile_no == ''){
        toastr.error('Please enter Mobile No.');
    }
    else if(email_id == ''){
        toastr.error('Please enter Email Id');
    }
    else if(address == ''){
        toastr.error('Please enter full address');
    }
    else{
        document.getElementById('view_summary_details').style.display = 'block';
        document.getElementById('view_full_name').innerHTML = full_name;
        document.getElementById('view_mobile_no').innerHTML = mobile_no;
        document.getElementById('view_email_id').innerHTML = email_id;
        document.getElementById('view_address').innerHTML = address;
        document.getElementById("purchase_form").reset();
    }
    
}
function review_purchase_form(){

       document.getElementById('full_name').value =  document.getElementById('view_full_name').innerHTML;
       document.getElementById('mobile_no').value =  document.getElementById('view_mobile_no').innerHTML;
       document.getElementById('email_id').value =  document.getElementById('view_email_id').innerHTML;
       document.getElementById('address').value =  document.getElementById('view_address').innerHTML;
}
function click_to_buy(){

    var purchase_contact_details = {};
    
    purchase_contact_details['full_name'] =  document.getElementById('view_full_name').innerHTML;
    purchase_contact_details['mobile_no'] =  document.getElementById('view_mobile_no').innerHTML;
    purchase_contact_details['email_id'] =  document.getElementById('view_email_id').innerHTML;
    purchase_contact_details['address'] =  document.getElementById('view_address').innerHTML;

    window.localStorage.removeItem('purchase_person_details');
    window.localStorage.setItem('purchase_person_details',JSON.stringify(purchase_contact_details));
    window.open('confirmation.html','_self');
}

