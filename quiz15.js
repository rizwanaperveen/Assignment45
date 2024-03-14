//Task 15
//Date = 20-02-2024
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var Guestlist2 = ["Asma", "Bano", "Amber"];
var absent_guest = "Amber";
var new_guest = "Samra";
Guestlist2[2] = new_guest;
for (var i = 0; i < Guestlist2.length; i++) {
    console.log("Dear miss." + Guestlist2[i] + ',\n It is my pleasure to invite you in our party.\n Thankyou\n');
}
console.log("Amber is not coming");
