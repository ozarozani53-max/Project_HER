const text =

`Hi Lilitha...

There's a story I've wanted to tell.

Not because you've forgotten it.

But because some stories
are worth remembering.

This is ours.`;

const target =
document.getElementById("typewriter");

const button =
document.getElementById("beginBtn");

let i = 0;

function typeWriter(){

    if(i < text.length){

        target.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 50);

    }
    else{

        button.style.opacity = "1";
    }
}

window.onload = typeWriter;