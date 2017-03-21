/**
 * Original idea : Kek (zanorg.com)
 * Development : Karalix (github.com/Karalix)
 */

var fillons = ["Fillon l'escroc", "cette racaille de Fillon","Fillon, l'homme aux gros sourcils","Fillon la vermine","François le voleur","Fillon le fion", "François Fillon le voyou", "Fillon l'enfoiré", "cette enflure de François Fillon", "François Fillon (le mec qui finira en prison)", "Fillon le sale voleur", "ce FDP de Fillon", "Fillon le ripou", "François Fillon cette raclure", "ce bandit de Fillon", "ce mafieu de Fillon","François le malhonnête"];

var melenchons = ["Mélenchon le coco", "ce gueulard de Mélenchon","Mélenchon, le bourgeois communiste,","le fantôme du parti communiste Jean-Luc Mélenchon", "la Méluche", "ce vieux râleur de Mélenchon", "ce vieil aigri qu'est Mélenchon", "cette grande gueule de Mélenchon"];

var macrons = ["cet enfoiré de Macron", "Macron le voleur", "Macron le roublard", "Macron l'enfoiré", "ce voleur d'Emmanuel Macron","Macron le brigand", "Macron l'escroc", "Macron la crapule", "Macron l'homme à cougars", "cette enflure de Macron", "Macron le ripou", "ce filou de Macron", "Macron la tête à claques","Macron le cocaïnomane"];

var hamons = ["Benoît Hamon, le mec qui sert à rien","le petit Benoît Hamon", "ce loser de Hamon", "Benoît Hamon, le futur éliminé", "ce consternant Benoît Hamon", "Benoît Hamon le brasseur de vent ", "Hamon le fumeur de spliff", "Hamon le rastafaraï", "Benoît 'Ganja' Hamon", "Hamon, le gars complètement à l'ouest", "Benoît Hamon, qui ne sera pas au second tour", "le malheureux perdant Benoît Hamon"];

var pens = ["Marine la facho", "Le Pen la facho","Marine (la fille du borgne)", "Marine la morue", "Marine la raciste", "Marine la teubé", "la grosse Le Pen", "Marine la blondasse", "Marine, la fille de cet abruti de Jean-Marie", "Marine Le Pen (qui a pas un peu grossi ?)", "cette abrutie de Marine Le Pen", "Marine la chieuse", "Marine le sac à merde","Marine Le Pen la vendeuse de poisson","Marine la blondinette"];

var hollandes = ["le gros Hollande", "Hollande le président moisi", "ce mauvais président qu'était François Hollande", "Hollande le mauvais président", "François Hollande le regrétté (non)","cette feignasse de François Hollande", "Hollande le minable","cette loque de François Hollande","François Hollande ce vieux naze", "Flanby", "cette moule de François Hollande"];

var sarkos = ["Sarko la fripouille", "le petit Nicolas Sarkozy", "cette racaille de Sarkozy","Sarko le ripou","Sarkozy le voleur","cet enfoiré de Sarkozy","cette hyène de Nicolas Sarkozy","Sarko l'enfoiré","Sarko la magouille","cet empaffé de Nicolas Sarkozy", "Sarkozy le bandit", "Sarkozy ce petit escroc", "ce pickpocket de Nicolas Sarkozy", "Sarkozy le gangster"];

var trumps = ["cet imbécile de Trump", "Trump l'abruti","cette enflure de Trump","Donald Trump le crétin","ce gros con de Trump","Donald Trump le misogyne", "Trump ce gros raciste", "Trump le teubé", "Donald le gros porc", "ce FDP de Trump", "cette vieille baltringue de Trump", "Donald Trump le vieux dégueulasse", "ce sac à merde de Trump", "Trump ce gros FDP", "Trump le blondinet"];

var valls = ["Valls la fripouille", "Valls l'ordure", "Manuel Valls le vicieux", "Valls le loser", "ce coquinou de Manuel Valls", "Valls la tête à claque", "ce petit enfoiré de Manuel Valls", "ce perdant de Manuel Valls"];

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
      var fillonReg = /[fF]ran[cç]ois [fF]illon/g;
      var melenchonReg = /[jJ]ean[ -][lL]uc [mM][ée]lenchon/g;
      var macronReg = /[eE]mmanuel [mM]acron/g;
      var hamonReg = /[bB]eno[iî]t [hH]amon/g;
      var penReg = /[mM]arine [lL]e [pP]en/g;
      var hollandeReg = /[fF]ran[cç]ois [hH]ollande/g;
      var trumpReg = /[dD]onald [tT]rump/g;
      var vallsReg = /[mM]anuel [vV]alls/g;
      var sarkoReg = /[nN]icolas [sS]arkozy/g;

      if(node.data.search(fillonReg) >= 0){
        node.data = node.data.replace(fillonReg, replacer(fillons));
        nodeModified = true;
      } else {
          node.data = node.data.replace(/[fF]illon/g, replacer(fillons));
      }

      if(node.data.search(melenchonReg) >= 0){
        node.data = node.data.replace(melenchonReg, replacer(melenchons));
        nodeModified = true;
      } else {
          node.data = node.data.replace(/[mM][ée]lenchon/g, replacer(melenchons));
      }

      if(node.data.search(macronReg) >= 0){
        node.data = node.data.replace(macronReg, replacer(macrons));
        nodeModified = true;
      } else {
          node.data = node.data.replace(/[mM]acron/g, replacer(macrons));
      }

      if(node.data.search(hamonReg) >= 0){
        node.data = node.data.replace(hamonReg, replacer(hamons));
        nodeModified = true;
      } else {
          node.data = node.data.replace(/[hH]amon/g, replacer(hamons));
      }

      if(node.data.search(penReg) >= 0){
        node.data = node.data.replace(penReg, replacer(pens));
        nodeModified = true;
      } else {
          node.data = node.data.replace(/[lL]e [pP]en/g, replacer(pens));
      }

      if(node.data.search(hollandeReg) >= 0){
        node.data = node.data.replace(hollandeReg, replacer(hollandes));
        nodeModified = true;
      } else {
          node.data = node.data.replace(/[hH]ollande/g, replacer(hollandes));
      }
      
      if(node.data.search(trumpReg) >= 0){
        node.data = node.data.replace(trumpReg, replacer(trumps));
        nodeModified = true;
      } else {
          node.data = node.data.replace(/[tT]rump/g, replacer(trumps));
      }

      if(node.data.search(vallsReg) >= 0){
        node.data = node.data.replace(vallsReg, replacer(valls));
        nodeModified = true;
      } else {
          node.data = node.data.replace(/[vV]alls/g, replacer(valls));
      }


      if(node.data.search(sarkoReg) >= 0) {
        node.data = node.data.replace(sarkoReg,replacer(sarkos));
        nodeModified = true;
      } else {
          node.data = node.data.replace(/[sS]arkozy/g, replacer(sarkos));
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
