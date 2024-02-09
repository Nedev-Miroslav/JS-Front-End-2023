function attachEvents() {

    const baseURL = 'http://localhost:3030/jsonstore/blog/';

    const loadPostsButton = document.getElementById("btnLoadPosts");
    const viewButton = document.getElementById("btnViewPost");
    const postSelect = document.getElementById("posts");
    const postTitle = document.getElementById("post-title");
    const postBody = document.getElementById("post-body");
    const postComments = document.getElementById("post-comments");

    let allPost = {};


    loadPostsButton.addEventListener("click", async () => {

        postSelect.innerHTML = "";

        const response = await fetch(baseURL + "posts");
        allPost = await response.json();

        for (const [postId, postObj] of Object.entries(allPost)) {
            const option = document.createElement("option");

            option.value = postId;
            option.textContent = postObj.title;
            postSelect.appendChild(option)

        }

    });


    viewButton.addEventListener("click", async () => {

        postBody.innerHTML = "";
        postComments.innerHTML = "";

        const postId = postSelect.value;

        postBody.textContent = allPost[postId].body;
        postTitle.textContent = allPost[postId].title;


        const response = await fetch(baseURL + "comments");
        const commentsInfo = await response.json(); 

        const filteredComments = Object.values(commentsInfo).filter(e => e.postId === postId);
        filteredComments.forEach(comment => {

            const li = document.createElement("li");
            li.id = comment.id;
            li.textContent = comment.text;
            postComments.appendChild(li);


        });

    });
}


 








// Друго решение
// function attachEvents() {
//     const loadPostElements = document.getElementById("btnLoadPosts");
//     let selectElement = document.getElementById("posts");
//     let bodyPostElement = document.getElementById("post-body");
//     let postTitleElement = document.getElementById("post-title");

//     let commentElement = document.getElementById("post-comments");

//     const viewPostElement = document.getElementById("btnViewPost");

//     let countClic = 0;
//     let currentPostId = "";

//     loadPostElements.addEventListener("click", loadPosts);
//     viewPostElement.addEventListener("click", viewPost);

//     function loadPosts(e) {
//         fetch("http://localhost:3030/jsonstore/blog/posts")
//             .then((res) => res.json())
//             .then((result) => {
//                 let obj = Object.entries(result);
//                 if (countClic === 0) {
//                     for (const post of obj) {
//                         let createnOption = document.createElement("option");
//                         let title = post[1].title;
//                         createnOption.textContent = title;
//                         selectElement.appendChild(createnOption);
//                         countClic += 1;

//                     }

//                 }

//                 let currentPostTitle = document.getElementById("posts").value;
//                 for (const post of obj) {

//                     let title = post[1].title;


//                     if (title === currentPostTitle) {
//                         bodyPostElement.textContent = "";
//                         postTitleElement.textContent = "";
//                         let body = post[1].body;

//                         let createP = document.createElement("p");
//                         let createh1 = document.createElement("h1");
//                         createh1.textContent = title;
//                         createP.textContent = body;

//                         postTitleElement.appendChild(createh1);
//                         bodyPostElement.appendChild(createP);
//                         currentPostId = post[1].id;

//                     }

//                 }

//             });

//     }

//     function viewPost(e) {
//         fetch("http://localhost:3030/jsonstore/blog/comments")
//             .then((res) => res.json())
//             .then((result) => {
//                 let obj = Object.entries(result);

//                 for (const post of obj) {
//                     let comentsWithPostId = post[1].postId;
//                     let commentText = post[1].text;

//                     if (currentPostId === comentsWithPostId) {
//                         commentElement.textContent = "";
//                         let createLi = document.createElement("li");
//                         createLi.textContent = commentText;
//                         commentElement.appendChild(createLi);


//                     }


//                 }

//                 let currentComment = document.getElementById("posts").value;
//                 for (const post of obj) {

//                     let title = post[1].title;



//                 }
//             });

//     }
// }

attachEvents();