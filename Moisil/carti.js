// document.getElementById('rezervaBtn').onclick = function() {
//     this.textContent = 'REZERVAT'; 
//     alert('Aceasta carte a fost rezervata');
//     // window.prompt("gayyyyyy");
//     // window.alert=('Rezervarea a fost confirmata');// Changes the text inside the button
//   };

function rezervat(boockId)
{
    document.getElementById(boockId).textContent = 'REZERVAT';
    // console.log('Hello');
    alert('Cartea a fost rezervata');
}