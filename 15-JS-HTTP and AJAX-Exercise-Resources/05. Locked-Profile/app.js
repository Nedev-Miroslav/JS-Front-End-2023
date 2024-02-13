const issueURL = "http://localhost:3030/jsonstore/advanced/profiles";
const profilesContainer = document.querySelector("#main");
let usersCount = 0;

async function lockedProfile() {
    profilesContainer.innerHTML = "";
    let profilesInfo = await ((await fetch(issueURL)).json());

    Object.values(profilesInfo).forEach(profileObj =>{
        usersCount++;
        profilesContainer.appendChild(createProfileDiv(profileObj));
    });
}

function createProfileDiv(obj){
    const div = document.createElement("div");
    div.classList.add("profile")
    div.innerHTML = 
    `<img src="./iconProfile2.png" class="userIcon" />
    <label>Lock</label>
    <input type="radio" name="user${usersCount}Locked" value="lock" checked>
    <label>Unlock</label>
    <input type="radio" name="user${usersCount}Locked" value="unlock"><br>
    <hr>
    <label>Username</label>
    <input type="text" name="user${usersCount}Username" value="${obj.username}" disabled readonly />`;

    div.appendChild(createExtraInfoDiv(obj));
    div.appendChild(createButton());

    return div;
}

function createExtraInfoDiv(obj){
    const div = document.createElement("div");
    div.style.display = "none";
    div.classList.add(`user${usersCount}Username`);
    div.innerHTML = 
    `<hr>
    <label>Email:</label>
    <input type="email" name="user${usersCount}Email" value="${obj.email}" disabled readonly />
    <label>Age:</label>
    <input type="email" name="user${usersCount}Age" value="${obj.age}" disabled readonly />`;

    return div;
}

function createButton(){
    let button = document.createElement("button");
    button.textContent = "Show more";
    button.addEventListener("click", toggleInfo);

    return button;
}

function toggleInfo(e){
    const button = e.target;
    const hiddenFields = button.parentElement.querySelector("div");
    const lockInput = button.parentElement.querySelector("input[value=lock]");

    let isLocked = lockInput.checked ? true : false;
    const isHidden = button.textContent === "Show more";

    if (!isLocked) {
        button.textContent = isHidden ? "Hide it" : "Show more";
        hiddenFields.style.display = isHidden ? "block" : "none";
    };

}







// function lockedProfile() {
//     const baseURL = "http://localhost:3030/jsonstore/advanced/profiles";


//     const mainElement = document.querySelector("#main");

    
//     mainElement.innerHTML = "";
 

//     addEventListener("load", showMore);

//     function showMore() {

      

//         fetch(baseURL)
//             .then((res) => res.json())
//             .then((result) => {
//                 Object.values(result).forEach((profil) => {
                

//                     const prof = document.createElement("div");

//                     prof.innerHTML = `
                
//         			<div class="profile">
// 				<img src="./iconProfile2.png" class="userIcon" />
// 				<label>Lock</label>
// 				<input type="radio" name="user1Locked" value="lock" checked>
// 				<label>Unlock</label>
// 				<input type="radio" name="user1Locked" value="unlock"><br>
// 				<hr>
// 				<label>Username</label>
// 				<input type="text" name="user1Username" value="${profil.username}" disabled readonly />
// 				<div class="user1Username">
// 					<hr>
// 					<label>Email:</label>
// 					<input type="email" name="user1Email" value="${profil.email}" disabled readonly />
// 					<label>Age:</label>
// 					<input type="text" name="user1Age" value="${profil.age}" disabled readonly />
// 				</div>
				
// 				<button>Show more</button>
// 			</div>
                
//                 `;

//                     mainElement.appendChild(prof);

//                     const additionalInfo = document.querySelectorAll(".user1Username");

//                         for (const curInfo of additionalInfo) {
//                             curInfo.style.display = "none";
//                         }



//                 });

//                 let buttons = Array.from(document.getElementsByTagName("button"));
//                 buttons.forEach((button) => {
//                     button.addEventListener("click", showMoreInfo)
//                 });

                
//                 function showMoreInfo(e) {
                 
//                     let btn = e.target;
//                     let profile = btn.parentElement;
                    
//                     let children = Array.from(profile.children);
//                     let lock = children[2];
                    
                    
//                     let unlocked = children[4];
//                     let additionaleInfo = children[9];

//                     if (!unlocked.checked ) {
//                         return;
//                     }
                    
        

//                     if (btn.textContent === "Show more") {
//                         additionaleInfo.style.display = "block";
//                         btn.textContent = "Hide it";
                        
                       
//                     } else if (btn.textContent === "Hide it" ) {
//                         additionaleInfo.style.display = "none";
//                         btn.textContent = "Show more";
                       
//                     }

//                     const additionalInfo = document.querySelectorAll(".user1Username");

//                     for (const curInfo of additionalInfo) {
//                         let profile = curInfo.parentElement;
                    
//                     let children = Array.from(profile.children);
//                     let lock = children[2];
                    
                    
//                     let unlocked = children[4];
//                         if(!unlocked.checked && !lock.checked){
//                         curInfo.style.display = "none";
//                         }
//                     }


//                 }

//             });



//     }





// }