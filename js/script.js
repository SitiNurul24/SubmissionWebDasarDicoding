function handleGetFormData() {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    return {
        name,
        city,
        email,
        zipCode,
        status
    };
}


function isNumber(input) {
    return !isNaN(input);
}


function checkboxIsChecked() {
    return document.getElementById('status').checked;
}


const data = handleGetFormData();
function validateFormData(data){
   if(data!=null && isNumber(data.zipCode)==true && checkboxIsChecked()==true){
       return true
   } else {
       return false
   }
  
}




function submit(){
    const object = handleGetFormData();
    const note = document.getElementById('warning');
    if(validateFormData(object)==false){
        return (note.textContent = "Periksa form anda sekali lagi");
    } else {
        return (note.textContent = "");
    }
}
// Langkah 10
function submit(){

const object = handleGetFormData();

const note = document.getElementById('warning');

if(validateFormData(object)==false){

return (note.textContent = "Periksa form anda sekali lagi");

} else {

return (note.textContent = "");

}



}