import { games } from "../src/data/data.js";
const typeCategory = document.getElementById("type-category");
let categories = ["all"];
for (let i= 0 ; i<games.length ;i++){
    if (!categories.includes(games[i].category))
        categories.push(games[i].category)
}
for (let i = 0; i < categories.length; i++) {
   let btn=document.createElement("button")
   btn.innerText=categories[i]
   btn.className="w-full px-6 py-2 bg-gray-100 rounded-full text-gray-700 font-medium whitespace-nowrap hover:bg-orange-400 hover:text-white transition shadow-sm"
   typeCategory.appendChild(btn)
    
}
