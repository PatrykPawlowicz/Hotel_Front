function createReservation(){
        var id_user = getCookie('id')
        var token = getCookie('token')
        var get_table_id = "id_room-"+window.currentCounter
        var id_room = document.getElementById(get_table_id).textContent;
        var start_date_value = document.getElementById('start_date').value;
        var end_date_value = document.getElementById('end_date').value;
        console.log(id_room,id_user,start_date_value,end_date_value)
        console.log(typeof end_date_value)
        fetch('https://cloudhotelapi.azurewebsites.net/api/Reservation/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token },
                body: JSON.stringify({
                    id_user: id_user,
                    id_room: id_room,
                    start_date: start_date_value, 
                    end_date: end_date_value
                })
            }).then(response=> console.log('Status Code:', response.status)).catch(error => {
                console.error('Error:', error)
        });

};

function openReservationPopup(counter){
    document.getElementById("reservationForm").style.display="block";
    window.currentCounter = counter;
};

function closeReservationPopup(){
    document.getElementById("reservationForm").style.display="none";
};


function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }