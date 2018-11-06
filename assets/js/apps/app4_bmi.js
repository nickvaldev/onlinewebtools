
const app4_weight_el = document.getElementById("app4_weight");
const app4_height_el = document.getElementById("app4_height");
document.getElementById('app4_form').addEventListener('submit', app4_calculateResults);

function app4_calculateResults(e) {
  let app4_weight = app4_weight_el.value;
  let app4_height = app4_height_el.value;
  console.log(app4_weight, app4_height)
  if (app4_validation()){
    let app4_bmi_el = document.getElementById("app4_bmi");
    let app4_comment_el = document.getElementById("app4_comment");
    let app4_bmi;
    let app4_comment;
    document.querySelector(".results .panel-title").innerHTML = 'Τελικά Αποτελέσματα';
    app4_bmi = bmi(app4_weight, app4_height);
    app4_bmi_el.innerHTML = app4_bmi.toFixed(2);
    app4_comment = comment(app4_bmi);
    app4_comment_el.innerHTML = app4_comment;
  }
  e.preventDefault();
}


function app4_validation() {

  if (app4_weight.value==null||app4_weight.value.length==0 || app4_height.value==null||app4_height.value.length==0){
    showError("Συμπληρώστε τα στοιχεία σας");
       return false;
  }

  else if (parseFloat(app4_height.value) <= 0||
           parseFloat(app4_height.value) >=2.3||
           parseFloat(app4_weight.value) <= 0||
           parseFloat(app4_weight.value) >=400){
            showError("Συμπληρώστε σωστά τα στοιχεία σας. To βάρος πρέπει να είναι σε κιλά (πχ 75) και το ύψος σε μέτρα (πχ 1.75)");
           clearForm();
           return false;
  }
  return true;
}

function bmi(weight, height) {

  bmindx=weight/eval(height*height);
  return bmindx;
}

function comment(yourbmi) {

  if (yourbmi >40) {
   app4_comment ="Είστε σοβαρά παχύσαρκο άτομο, Επισκεφτείτε επειγόντως τον γιατρό σας";
  }

  else if (yourbmi >30 && yourbmi <=40) {
     app4_comment ="Είστε παχύσαρκο άτομο, χρειάζεστε συμβουλή γιατρού";
  }

  else if (yourbmi >27 && yourbmi <=30) {
     app4_comment ="Είστε υπέρβαρο άτομο, πρέπει να χάσετε κάποιο βάρος";
  }

  else if (yourbmi >22 && yourbmi <=27) {
     app4_comment ="Είστε πάνω απο το όριο, καλό θα ήταν να χάνατε κάποιο βάρος";
  }

  else if (yourbmi >=21 && yourbmi <=22) {
     app4_comment ="Είστε στο φυσιολογικό βάρος!!Μείνετε όπως είστε!";
  }

  else if (yourbmi >=18 && yourbmi <21) {
     app4_comment ="Είστε κάτω από το όριο, καλό θα ήταν να πέρνατε κάποιο βλαρος";
  }

  else if (yourbmi >=16 && yourbmi <18) {
     app4_comment ="Είστε αρκετά κάτω από το όριο, πρέπει να πάρετε κάποιο βάρος";
  }

  else if (yourbmi <16) {
     app4_comment ="Ίσως βρίσκεστε σε τροχιά συνάντησης με τη νευρική ανορεξία. Θα πρέπει να επισκεφθείτε τον γιατρό σας";
  }

  return app4_comment;
}

function showError(error){
  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError(){
  document.querySelector('.alert').remove();
}

function clearForm(){

  app4_weight_el.value = "";
  app4_height_el.value = "";
}




