var contact_details = JSON.parse((window.localStorage.getItem('purchase_person_details')));
document.getElementById('view_full_name').innerHTML = contact_details['full_name'];
document.getElementById('view_mobile_no').innerHTML = contact_details['mobile_no'];
document.getElementById('view_email_id').innerHTML = contact_details['email_id'];
document.getElementById('view_address').innerHTML = contact_details['address'];