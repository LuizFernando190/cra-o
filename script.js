const perguntas=[

"1. Qual é o jogo mais vendido da história?",
"2. Em que jogo aparece o personagem Mario?",
"3. Quem criou Minecraft?",
"4. Qual empresa criou PlayStation?",
"5. Qual jogo popularizou o Battle Royale?",
"6. Qual Pokémon é o mascote da franquia?",
"7. Qual jogo possui o personagem Master Chief?",
"8. Qual é o reino de Zelda?",
"9. Qual personagem coleta anéis dourados?",
"10. Qual jogo tem o Creeper?"

];

const quiz=document.getElementById("quiz");

perguntas.forEach((pergunta,i)=>{

let card=document.createElement("div");
card.className="card";

card.innerHTML=`

<div class="cartoon">
🟥😎
</div>

<h2>${pergunta}</h2>

<button class="like" onclick="like(${i})">
👍 Like <span id="l${i}">0</span>
</button>

<button class="dislike" onclick="dislike(${i})">
👎 Dislike <span id="d${i}">0</span>
</button>

<br>

<input id="c${i}" placeholder="Escreva um comentário">

<button onclick="comentar(${i})">
💬 Comentar
</button>

<div id="comentarios${i}"></div>

`;

quiz.appendChild(card);

});

let likes=Array(10).fill(0);
let dislikes=Array(10).fill(0);

function like(i){
likes[i]++;
document.getElementById("l"+i).innerHTML=likes[i];
}

function dislike(i){
dislikes[i]++;
document.getElementById("d"+i).innerHTML=dislikes[i];
}

function comentar(i){

let texto=document.getElementById("c"+i).value;

if(texto=="") return;

let div=document.getElementById("comentarios"+i);

let p=document.createElement("div");

p.className="comment";

p.innerHTML="💬 "+texto;

div.appendChild(p);

document.getElementById("c"+i).value="";

}