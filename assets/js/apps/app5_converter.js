  
const app5_apo_el = document.getElementById("app5_apo");
const app5_se_el = document.getElementById("app5_se");

const app5_apoout = document.getElementById("app5_apoout");
const app5_apooutnum = document.getElementById("app5_apooutnum");
const app5_seout = document.getElementById("app5_seout");
const app5_seoutnum = document.getElementById("app5_seoutnum");

const app5_input_el = document.getElementById("app5_temp_in");
        



      

        document.getElementById('app5_form').addEventListener('submit', app5_calculateResults);


        function app5_calculateResults(e) {
          var app5_apo_val = app5_apo_el.options[app5_apo_el.selectedIndex].value;
          var app5_apo_text = app5_apo_el.options[app5_apo_el.selectedIndex].text;
          var app5_se_val = app5_se_el.options[app5_se_el.selectedIndex].value;
          var app5_se_text = app5_se_el.options[app5_se_el.selectedIndex].text;
          var app5_input = parseFloat(app5_input_el.value);
          var app5_output ;
          var app5_aposign;
          var app5_sesign;
          
          if (app5_validation()) {

            if ( app5_apo_val == 'celsius') {
              app5_aposign = '&deg;C';
              switch (app5_se_val) {
                case 'fahrenheit':           
                app5_seoutnum.innerHTML = app5_input*1.8000 + 32.00;
                  break;
                  case 'kelvin': 
                  app5_seoutnum.innerHTML = app5_input + 273.15;
                  break;                 
                default:
                  break;
              }
              
            }
            if ( app5_apo_val == 'fahrenheit') {
              app5_aposign = '&#8457;';
              switch (app5_se_val) {
                case 'celsius': 
                app5_seoutnum.innerHTML = (app5_input-32)/1.8;
                  break;
                  case 'kelvin': 
                  app5_seoutnum.innerHTML = (app5_input-32)/1.8 + 273.15;
                  break;                  
                default:
                  break;
              }  
            }
            if ( app5_apo_val == 'kelvin') {
              app5_aposign = '&deg;K';
              switch (app5_se_val) {
                case 'fahrenheit': 
                app5_seoutnum.innerHTML = (app5_input-273.15) + 32;
                  break;
                  case 'celsius': 
                  app5_seoutnum.innerHTML = app5_input-273.15;
                  break;                 
                default:
                  break;
              }
              
            }


            switch (app5_se_val) {
              case 'celsius':
                app5_sesign = '&deg;C';
                break;
              case 'fahrenheit':
                app5_sesign = '&#8457;';
                break;
              case 'kelvin':
                app5_sesign = '&deg;K';
                break;                    
              default:
                break;
            }
            
            document.querySelector(".results .panel-title").innerHTML = 'Τελικά Αποτελέσματα';
            app5_apoout.innerHTML = app5_apo_text;
            app5_seout.innerHTML = app5_se_text;
            app5_apooutnum.innerHTML = app5_input;
            app5_output = parseFloat(app5_seoutnum.innerHTML);
            app5_seoutnum.innerHTML = app5_output.toFixed(1);
            document.getElementById('app5_aposign').innerHTML = app5_aposign;
            document.getElementById('app5_sesign').innerHTML = app5_sesign;
            
            

          }


          e.preventDefault();

        }
      
        function app5_validation() {
          var app5_apo_val = app5_apo_el.options[app5_apo_el.selectedIndex].value;
          var app5_se_val = app5_se_el.options[app5_se_el.selectedIndex].value;
          if (app5_input_el.value == '') {
            showError("Δώστε αριθμό θερμοκρασίας");
            return false;
          }
          else if (app5_apo_val == app5_se_val){
            showError("Διαλέχτε διαφορετικές μονάδες μέτρησης");
               return false;
          } else {
            return true;
          }
          
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

        }
        
        