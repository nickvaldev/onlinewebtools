// APP2   -    Υπολογισμός Aποπληρωμής Δανείου

document.getElementById('app2_form').addEventListener('submit', app2_calculateResults);
function app2_calculateResults(e) {


    //UI Vars
    const app2_amount = document.getElementById('app2_amount');
    const app2_interest = document.getElementById('app2_interest');
    const app2_years = document.getElementById('app2_years');
    const app2_monthly_payments = document.getElementById('app2_monthly_payments');
    const app2_total_payment = document.getElementById('app2_total_payment');
    const app2_total_interest = document.getElementById('app2_total_interest');

    const principal = parseFloat(app2_amount.value);
    const calculatedInterest = parseFloat(app2_interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(app2_years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    console.log(x, monthly);
    console.log(isFinite(monthly));
    if(isFinite(monthly)) {
      app2_monthly_payments.innerHTML = monthly.toFixed(2);
      app2_total_payment.innerHTML = (monthly * calculatedPayments).toFixed(2);
      app2_total_interest.innerHTML = ((monthly * calculatedPayments)-principal).toFixed(2);
      document.querySelector('.app2_inter_per').innerHTML = app2_interest.value;
      document.querySelector(".results .panel-title").innerHTML = 'Τελικά Αποτελέσματα';
  
      // Show results
      // document.getElementById('app2_results').style.display = 'block';
  
      // // Hide loader
      // document.getElementById('loading').style.display = 'none';
  
    } else {
      showError('Ελέγξτε τους αριθμούς που δώσατε');
    }
    e.preventDefault();
}

// Show Error
function showError(error){
  // Hide results
  // document.getElementById('results').style.display = 'none';
  
  // Hide loader
  // document.getElementById('loading').style.display = 'none';

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