// ---Task 14 -Guest List -- //
var name_of_friend : string[] = ["Aena","Erum","Afia","Samiya","Sk","Laraib","Komal"];
var message: string ="I hope this message finds you well. I would like to invite you to join me for a delightful dinner gathering at my place. It's a wonderful opportunity for us to catch up, share stories, and enjoy a delicious meal together.";
for (const guest of name_of_friend) {
    var full_message = `${guest}, ${message}`
    console.log(full_message);
}