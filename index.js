

let userName = prompt("Who are you?").toLowerCase();

console.log(userName)

function greet(userName) {
    if (userName === "paige")
    alert ("spooky")
    else if (userName === "kaden")
    alert ("bobos")
    else if (userName === "cole" || userName === "chicken")
    alert ("hi coley!! dave is cheating in our minecraft game. he's in creative mode")
    else if (userName === "mom" || userName === "rose")
    alert ("hi momma i am learning coding!")
    else if (userName === "dad" || userName === "chris")
    alert ("hi dad! how is florida?")
    else if (userName === "mint" || userName === "vanilla" || userName === "subi")
    alert ("meowmeow")
    else
    alert ("huh?")
}

console.log(greet(userName))