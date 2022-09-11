let menuclick = 1;

function menuFun() {
    document.getElementById("menu-item").style.display = menuclick ? 'block' : 'none';
    menuclick = !menuclick;
}


if (window.innerWidth > 600) {
    // document.getElementById("check").innerHTML = "laptop";
    document.getElementById("nav-bar").innerHTML = `
    <table class="nav-bar-table">
        <th>
        <td style="width:40vw;"><h1>Indian Railways</h1></td>
        <td>Train Time Table</td>
        <td>Book Ticket</td>
        <td>Cancel Ticket</td>
        <td>Live Tracking</td>
        </th>
    </table>`;
}
else {
    // document.getElementById("check").innerHTML = "phone";
    document.getElementById("nav-bar").innerHTML = `
    
    <table class="nav-bar-table">
        <tr>
            <td style="width:80vw"><h1>Indian Railways</h1></td> 
            <td style="width:10vw" id='menu' onclick="menuFun()" ><button><h1>&nbsp; = &nbsp;</h1></button></td>
        </tr>
    </table>`;
}