function attachEvents() {

    document.getElementById("btnLoad").addEventListener("click", getAllphones);
    document.getElementById("btnCreate").addEventListener("click", createContact);


    async function getAllphones() {

        const phonesInfo = await (await fetch("http://localhost:3030/jsonstore/phonebook")).json();

        const phoneBook = document.getElementById("phonebook");

        Object.values(phonesInfo).forEach((contact) => {

            const li = document.createElement("li");

            const delButton = document.createElement("button");
            delButton.textContent = "Delete";

            li.textContent = `${contact.person}: ${contact.phone}`;
            li.appendChild(delButton);

            phoneBook.appendChild(li);


            delButton.addEventListener(`click`, deleteContact);

            function deleteContact() {

                const id = contact._id;

                fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
                    method: "DELETE",
                });
                li.remove();
            }

        });


    }
    function createContact(params) {

        const person = document.getElementById("person").value;
        const phone = document.getElementById("phone").value;

        fetch("http://localhost:3030/jsonstore/phonebook", {
            method: "POST",
            body: JSON.stringify(
                {
                    person,
                    phone
                }
            )


        })
            .then((res) => res.json())
            .then(() => {
                document.getElementById("person").value = "";
                document.getElementById("phone").value = "";
                getAllphones();
            })
    }


}

attachEvents();