const d = new Date();
let h = d.getHours();

if(h>=6 && h<12){
    document.getElementById("greet").textContent="Good Morning";
}

else if(h>=12 && h<16){
    document.getElementById("greet").textContent="Good Afternoon";
}

else if(h>=16 && h<20){
    document.getElementById("greet").textContent="Good Evening";
}

else{
    document.getElementById("greet".textContent="Good Night");
}
function Navbar(){
    return <div className="bg-gray-100 shadow-md rounded-b-md">
        
            <h1 className="text-[30px] p-2 text-black font-bold" id="greet">Hi</h1>

    </div>
}

export default Navbar;