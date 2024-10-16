$(document).ready(function(){
    $("#settingAction").click(function(){
      $(this).addClass('d-none');
      $('#editAction').addClass('d-flex');
      $('#editAction').removeClass('d-none');
    });
    $("#cancelAction").click(function(){
      $('#settingAction').removeClass('d-none');
      $('#editAction').addClass('d-none');
    });
    $("#confirmAction").click(function(){
      $('#settingAction').removeClass('d-none');
      $('#editAction').addClass('d-none');
    });
    $("#iconToggleSide").click(function(){
      $('#sidebarHeading').toggleClass('show');
    });

    
    
  });

  function addFavorites(element , className){
    
    element.classList.toggle(className);

}




document.addEventListener('DOMContentLoaded', function() {
    fetch('./assets/js/data.json')
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.data.forEach(user => {
                output += `
                    <div class="card-job">
                        <div class="card-job-head">
                        <div class="heading">
                            <div class="image">

                            <img src="./assets/images/${user.image}" alt="">
                            </div>
                            <div class="heading-body">
                            <h5>${user.jobName}</h5>
                            <p>${user.nameCompany} </p>
                            </div>
                        </div>
                        <div id="favoriteIcon" class="${user.favorite? 'favorite-icon ': 'favorite-icon'}" onclick="addFavorites(this, 'active')">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        </div>
                        <div class="info">
                        <div class="address"><i class="fa-solid fa-map-pin"></i> ${user.address}</div>
                        <div class="address"><i class="fa-regular fa-calendar"></i> ${user.date}</div>
                        </div>
                        <div class="group-badge">
                        
                            <span class="badge text-bg-light">${user.tags[0]}</span>
                            <span class="badge text-bg-light">${user.tags[1]}</span>
                            <span class="badge text-bg-light">${user.tags[2]}</span>

                        </div>
                        <div class="footer-card-job">
                        <p>${user.description}</p>
                        </div>
                    </div>
                `;
            });
            document.getElementById('jobContainer').innerHTML = output;
        })
        .catch(error => console.error('Error fetching the JSON file:', error));
});

