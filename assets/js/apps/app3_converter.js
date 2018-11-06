  
        const app3_apoout = document.getElementById("app3_apoout");
        const app3_apooutnum = document.getElementById("app3_apooutnum");
        const app3_seout = document.getElementById("app3_seout");
        const app3_seoutnum = document.getElementById("app3_seoutnum");
        const app3_input_el = document.getElementById("app3_weight_in");
        
        const app3_apo_el = document.getElementById("app3_apo");

        const app3_se_el = document.getElementById("app3_se");


      

        document.getElementById('app3_form').addEventListener('submit', app3_calculateResults);


        function app3_calculateResults(e) {
          var app3_apo_val = app3_apo_el.options[app3_apo_el.selectedIndex].value;
          var app3_apo_text = app3_apo_el.options[app3_apo_el.selectedIndex].text;
          var app3_se_val = app3_se_el.options[app3_se_el.selectedIndex].value;
          var app3_se_text = app3_se_el.options[app3_se_el.selectedIndex].text;
          var app3_input = parseFloat(app3_input_el.value);
          var app3_output ;
          var app3_aposign;
          var app3_sesign;
          
          if (app3_validation()) {

            if ( app3_apo_val == 'kilograms') {
              app3_aposign = 'kg';
              switch (app3_se_val) {
                case 'pounds': 
                console.log('perase stp case')
                app3_seoutnum.innerHTML = app3_input*2.2046226218;
                console.log(app3_seout.innerHTML)
                  break;
                  case 'ounces': 
                  app3_seoutnum.innerHTML = app3_input*35.27;
                  break;
                  case 'grams': 
                  app3_seoutnum.innerHTML = app3_input*1000;
                break;
                case 'stones': 
                app3_seoutnum.innerHTML = app3_input*0.1574;
                break;
                default:
                  break;
              }
              
            }
            if ( app3_apo_val == 'pounds') {
              app3_aposign = 'lb';
              switch (app3_se_val) {
                case 'kilograms': 
                app3_seoutnum.innerHTML = app3_input/2.2046;
                  break;
                  case 'ounces': 
                  app3_seoutnum.innerHTML = app3_input*16;
                  break;
                  case 'grams': 
                  app3_seoutnum.innerHTML = app3_input/0.0022046;
                break;
                case 'stones': 
                app3_seoutnum.innerHTML = app3_input*0.071429;
                break;
                default:
                  break;
              }  
            }
            if ( app3_apo_val == 'ounces') {
              app3_aposign = 'oz';
              switch (app3_se_val) {
                case 'kilograms': 
                app3_seoutnum.innerHTML = app3_input/35.274;
                  break;
                  case 'pounds': 
                  app3_seoutnum.innerHTML = app3_input*0.0625;
                  break;
                  case 'grams': 
                  app3_seoutnum.innerHTML = app3_input/0.035274;
                break;
                case 'stones': 
                app3_seoutnum.innerHTML = app3_input*0.0044643;
                break;
                default:
                  break;
              }
              
            }
            if ( app3_apo_val == 'grams') {
              app3_aposign = 'g';
              switch (app3_se_val) {
                case 'kilograms': 
                app3_seoutnum.innerHTML = app3_input/1000;
                  break;
                  case 'pounds': 
                  app3_seoutnum.innerHTML = app3_input*0.0022046;
                  break;
                  case 'ounces': 
                  app3_seoutnum.innerHTML = app3_input*0.035274;
                break;
                case 'stones': 
                app3_seoutnum.innerHTML = app3_input*0.00015747;
                break;
                default:
                  break;
              }
              
            }
            if ( app3_apo_val == 'stones') {
              app3_aposign = 'st';
              switch (app3_se_val) {
                case 'kilograms': 
                app3_seoutnum.innerHTML = app3_input/0.15747;
                  break;
                  case 'pounds': 
                  app3_seoutnum.innerHTML = app3_input*14;
                  break;
                  case 'grams': 
                  app3_seoutnum.innerHTML = app3_input/0.00015747;
                break;
                case 'ounces': 
                app3_seoutnum.innerHTML = app3_input*224;
                break;
                default:
                  break;
              }
              
            }
            switch (app3_se_val) {
              case 'kilograms':
                app3_sesign = 'kg';
                break;
              case 'grams':
                app3_sesign = 'g';
                break;
              case 'pounds':
                app3_sesign = 'lb';
                break;
              case 'ounces':
                app3_sesign = 'oz';
                break;
              case 'stones':
                app3_sesign = 'st';
                break;          
              default:
                break;
            }
            
            document.querySelector(".results .panel-title").innerHTML = 'Τελικά Αποτελέσματα';
            app3_apoout.innerHTML = app3_apo_text;
            app3_seout.innerHTML = app3_se_text;
            app3_apooutnum.innerHTML = app3_input;
            app3_output = parseFloat(app3_seoutnum.innerHTML);
            app3_seoutnum.innerHTML = app3_output.toFixed(3);
            document.getElementById('app3_aposign').textContent = app3_aposign;
            document.getElementById('app3_sesign').textContent = app3_sesign;
            
            

          }


          e.preventDefault();

        }
      
        function app3_validation() {
          var app3_apo_val = app3_apo_el.options[app3_apo_el.selectedIndex].value;
          var app3_se_val = app3_se_el.options[app3_se_el.selectedIndex].value;
          if (parseFloat(app3_input_el.value) > 0) {
            return true;
          }
          else if (app3_apo_val == app3_se_val){
            showError("Διαλέχτε διαφορετικές μονάδες μέτρησης");
               return false;
          }
          else if (parseFloat(app3_input_el.value) <= 0){
                    showError("Δώστε αριθμό βάρους μεγαλύτερο από το μηδέν");
                   clearForm();
                   return false;
          }else {
            showError("Δώστε αριθμό βάρους");
            clearForm();
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
        
        