
    function changeTripType(type) {
      const returnSection = document.getElementById('returnDateSection');
      const multiSection = document.getElementById('multiCitySection');

      // Hide all sections first
      returnSection.style.display = 'none';
      multiSection.style.display = 'none';

      // Show based on type
      if (type === 'round-trip') {
        returnSection.style.display = 'grid';
      } else if (type === 'multi-city') {
        multiSection.style.display = 'grid';
      }
    }
 


     function openMenu() {
      document.getElementById("sidebarMenu").style.width = "250px";
    }

    function closeMenu() {
      document.getElementById("sidebarMenu").style.width = "0";
    }



    function showFlights() {
      document.querySelector(".hero h1").textContent = "Search Results";
      document.querySelector(".hero p").textContent = "Here are your available flight options:";
      document.getElementById("flightsSection").style.display = "block";
      window.scrollTo({
        top: document.getElementById("flightsSection").offsetTop,
        behavior: "smooth",
      });
    }
     

    function checkvalidity(){
      let ToAirport = document.getElementById("toAirport");
    let from = document.getElementById("fromAirport").value;
    let To = document.getElementById("toAirport").value;
      if (from === To && from !== "" && To !== "") {
        ToAirport.value="";
    alert("Departure and Destination airports cannot be the same!");

    return false;

  
  
}
    }
function dat(){
  const d = document.getElementById("departDate").value;
  const departDate = new Date(d).toISOString().split("T")[0];
  document.getElementById("returnDate").min = departDate;
}

    window.addEventListener("load", () => {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("departDate").min = today;
  document.getElementById("returnDate").min = today;
});

    