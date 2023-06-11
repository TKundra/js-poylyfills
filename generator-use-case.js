const Book_Clubs = [
    {
        name: "The Cool Club",
        clubMembers: [
            {
                name: "John Doe",
                books: [
                    { id: "hs891", title: "The Perfect" },
                    { id: "ey812", title: "A Good Book" },
                ]
            }
        ]
    },
    {
        name: "The Better Club",
        clubMembers: [
            {
                name: "Jane Doe",
                books: [
                    { id: "u8291", title: "A Great Book" },
                    { id: "p9201", title: "A Nice Book" },
                ]
            }
        ]
    },
];

function* iterateBooks(books) {
    for (let i = 0; i < books.length; i++) {
        yield books[i];
    }
}

function* iterateMembers(members) {
    for (let i = 0; i < members.length; i++) {
        const member = members[i];
        yield* iterateBooks(member.books);
    }
}

function* iterateBookClubs(clubs) {
    for (let i = 0; i < clubs.length; i++) {
        const club = clubs[i];
        yield* iterateMembers(club.clubMembers);
    }
}

function findBook(id) {
    const clubs = iterateBookClubs(Book_Clubs);
    let result = clubs.next();
    while (!result.done) {
        if (result.value.id === id) {
            return result.value;
        } else {
            result = clubs.next();
        }
    }
}

// Now, we're looking for a book with the id ey812.
console.log(findBook('ey812'));