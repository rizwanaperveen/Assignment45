//Task 15
//Date = 20-02-2024
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let Guestlist2 : string[] = ["Asma","Bano","Amber"];

let absent_guest : string = "Amber";

let new_guest : string = "Samra";

Guestlist2[2] = new_guest;

for(let i=0; i<Guestlist2.length; i++){

    console.log("Dear miss." + Guestlist2[i] + ',\n It is my pleasure to invite you in our party.\n Thankyou\n')

}
console.log("Amber is not coming");