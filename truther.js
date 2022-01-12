/**
 * Original idea : Kek (zanorg.com)
 * Development : Karalix (krlx.fr)
 */

var birdNames = [];

birdNames["poutous"] = ["Philippe Bisou", "Philippe Toumou","Poutou la gauchiasse", "ce sale Anarchiste de Poutou", "cet islamo-gauchiste de Poutou","Pouton le punk à chien","Pouton le zadiste", "Poutou le fan de Zaz", "Philippe Staline","Poutou le buveur de 8.6", "cette raclure de Poutou","ce loser de Poutou"];

birdNames["melenchons"] = ["Mélenchon le coco", "ce gueulard de Mélenchon","Mélenchon, le bourgeois communiste,","le fantôme du parti communiste ce gueulard de Mélenchon", "la Méluche", "ce vieux râleur de Mélenchon", "ce vieil aigri qu'est Mélenchon", "cette grande gueule de Mélenchon", "Mélenchon le mégalo","le schtroumpf Grognon", "Jean-Luc Mussolini", "Jean-Luc Staline", "Vladimir Mélenchon", "Mélenchion","cette raclure de Mélenchon","ce loser de Mélenchon"];

birdNames["macrons"] = ["cet enfoiré de Macron", "Macron le voleur", "Macron le roublard", "Macron l'enfoiré", "Macron le brigand", "Macron l'escroc", "Macron la crapule", "cette enflure de Macron", "Macron le ripou", "ce filou de Macron", "Macron la tête à claques","Macron le cocaïnomane", "Monsieur Perlimpinpin", "Manu le pourri", "Macron le banquier", "ce voyou de Macron","ce mauvais président qu'est Macron","cette raclure de Macron"];

birdNames["montebourgs"] = ["ce grand dadet de Montebourg", "Prout-Prout", "Monte-Bourges", "cet imbécile de Montebourg", "Montebourg le mec qui sert à rien","Arnaud le loser","cette raclure de Montebourg","ce loser de Montebourg"];

birdNames["pens"] = ["Marine la facho", "Le Pen la facho","Marine (la fille du borgne)", "Marine la raciste", "Marine la teubé", "Marine la blondasse", "Marine, la fille de ce connard de Jean-Marie", "cette abrutie de Marine la teubé", "Marine la chieuse", "Marine le sac à merde","Marine la blondinette","Marine la folle à chats","cette raclure de Le Pen"];

birdNames["jadots"] = ["Jadot le fumeur de bédos", "Jadot l'écolo en carton", "Jadot l'écolo Wish", "Jadot l'écolo en plastoc", "Jadot le bobo", "ce gros drogué de Jadot", "cette raclure de Jadot", "Yannick 'Ganja' Jadot", "ce gros Loser de Yannick Jadot"];

birdNames["hidalgos"] = ["Annie Dingo","cette gauchiasse d'Hidalgo", "Hidalgo l'islamogauchiste", "Madame flop", "Hidalgo l'incompétente", "Hidalgo la bobo", "notre drame de Paris", "cette raclure d'Hidalgo"];

birdNames["pecresses"] = ["Pécresse la blondasse","Pécresse la traîtresse", "Pécresse la femme de ménage","Valoche", "la reine du quatre-quart", "Pécresse l'homophobe","cette vieille peau de Pécresse","cette conne de Pécresse","cette vieille bourge de Pécresse","cette raclure de Pécresse","Pécresse la lobbyiste","Pécresse, la Thatcher à 2 balles"];

birdNames["zemmours"] = ["Gargamel","M. Burns","Zemmour le facho","Éric la crotte","cette enflure de Zemmour","cette petite merde de Zemmour", "ce vieux crouton de Zemmour", "cette saloperie de Zemmour","ce connard de misogyne de Zemmour","Zemmour la racaille", "ce gros nazi de Zemmour", "Adolf Zemmour", "ce sale pétainiste de Zemmour", "Zemmour ce putain d'aigri", "la pute à Bolloré", "la pute à clic de Bolloré","ce serpent de Zemmour","ce geyser de chiasse de Zemmour","Islamophobix","cette raclure de Zemmour"];

birdNames["dupontaignans"] = ["ce gros con de Dupont-Aignan", "ce sale complotiste de Dupont-Aignan", "Dupont-Aignan le platiste","cette ordure de Dupont-Aignan", "Ducon-Gnangnan", "ce gogole de Dupont-Aignan", "ce gros teubé de Dupont-Aignan", "cet escroc de Dupont-Aignan","ce loser de Dupont-Aignan","cette raclure de Dupont-Aignan","Nico le ripou"];


var nodeModified = false;

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capLastOfThreeLetter(match) {
    return match.substring(0,2) + match.charAt(2).toUpperCase();
}

function capNodeData(data){
    data = data.replace(/\. [a-z]/g, capLastOfThreeLetter);
    data = capFirstLetter(data);
    return data;
}

function replacer(list){
    didReplace = true;
    return list[randomIntFromInterval(0,list.length-1)];
}


function walkText(node) {
  if (node.nodeType == 3) {

      var regs = [
      ["poutous", /[pP]hilippe [pP]outou/g, /[pP]outou/g],
      ["melenchons", /[jJ]ean[ -][lL]uc [mM][ée]lenchon/g, /[mM][ée]lenchon/g],
      ["macrons", /[eE]mmanuel [mM]acron/g, /[mM]acron/g],
      ["montebourgs", /[aA]rnaud [mM]ontebourg/g, /[mM]ontebourg/g],
      ["pens", /[mM]arine [lL]e [pP]en/g, /\b[lL]e [pP]en\b/g],
      ["jadots", /[yY]annick [jJ]adot/g, /[jJ]adot/g],
      ["hidalgos", /[aA]nne [hH]idalgo/g, /[hH]idalgo/g],
      ["pecresses", /[vV]al[ée]rie [pP][ée]cresse/g, /[pP][ée]cresse/g],
      ["zemmours", /[eEéÉ]ric [zZ]emmour/g, /[zZ]emmour/g],
      ["dupontaignans", /[nN]icolas [dD]upont[- ][aA]ignan/g, /[dD]upont[- ][aA]ignan/g],
      ];

      for (var i = 0; i < regs.length; i++)
      {
          var birdName = birdNames[regs[i][0]];

          if(node.data.search(regs[i][1]) >= 0){
            node.data = node.data.replace(regs[i][1], replacer(birdName));
            nodeModified = true;
          } else {
              node.data = node.data.replace(regs[i][2], replacer(birdName));
          }
      }

      if(nodeModified){
        node.data = capNodeData(node.data);
        nodeModified = false;
      }

  }

  if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
        for (var i = 0; i < node.childNodes.length; i++) {
        walkText(node.childNodes[i]);
        }
    }
}

walkText(document.body);
