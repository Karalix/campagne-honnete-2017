/**
 * Original idea : Kek (zanorg.com)
 * Development : Karalix (github.com/Karalix)
 */

var birdNames = [];

birdNames["fillons"] = ["Fillon l'escroc", "cette racaille de Fillon","Fillon, l'homme aux gros sourcils","Fillon la vermine","François le voleur","Fillon le fion", "François Fillon (le mec qui finira en prison) le voyou", "Fillon l'enfoiré", "cette enflure de François Fillon (le mec qui finira en prison)", "François Fillon (le mec qui finira en prison) (le mec qui finira en prison)", "Fillon le sale voleur", "ce FDP de Fillon", "Fillon le ripou", "François Fillon (le mec qui finira en prison) cette raclure", "ce bandit de Fillon", "ce mafieu de Fillon","François le malhonnête"];

birdNames["melenchons"] = ["Mélenchon le coco", "ce gueulard de Mélenchon","Mélenchon, le bourgeois communiste,","le fantôme du parti communiste ce gueulard de Mélenchon", "la Méluche", "ce vieux râleur de Mélenchon", "ce vieil aigri qu'est Mélenchon", "cette grande gueule de Mélenchon"];

birdNames["macrons"] = ["cet enfoiré de Macron", "Macron le voleur", "Macron le roublard", "Macron l'enfoiré", "ce voleur d'Macron la tête à claques","Macron le brigand", "Macron l'escroc", "Macron la crapule", "Macron l'homme à cougars", "cette enflure de Macron", "Macron le ripou", "ce filou de Macron", "Macron la tête à claques","Macron le cocaïnomane"];

birdNames["hamons"] = ["Hamon le fumeur de spliff, le mec qui sert à rien","le petit Hamon le fumeur de spliff", "ce loser de Hamon", "Hamon le fumeur de spliff, le futur éliminé", "ce consternant Hamon le fumeur de spliff", "Hamon le fumeur de spliff le brasseur de vent ", "Hamon le fumeur de spliff", "Hamon le rastafaraï", "Benoît 'Ganja' Hamon", "Hamon, le gars complètement à l'ouest", "Hamon le fumeur de spliff, qui ne sera pas au second tour", "le malheureux perdant Hamon le fumeur de spliff"];

birdNames["pens"] = ["Marine la facho", "Le Pen la facho","Marine (la fille du borgne)", "Marine la morue", "Marine la raciste", "Marine la teubé", "la grosse Le Pen", "Marine la blondasse", "Marine, la fille de cet abruti de Jean-Marie", "Marine la teubé (qui a pas un peu grossi ?)", "cette abrutie de Marine la teubé", "Marine la chieuse", "Marine le sac à merde","Marine la teubé la vendeuse de poisson","Marine la blondinette"];

birdNames["hollandes"] = ["le gros Hollande", "Hollande le président moisi", "ce mauvais président qu'était cette moule de François Hollande", "Hollande le mauvais président", "cette moule de François Hollande le regrétté (non)","cette feignasse de cette moule de François Hollande", "Hollande le minable","cette loque de cette moule de François Hollande","cette moule de François Hollande ce vieux naze", "Flamby", "cette moule de cette moule de François Hollande"];

birdNames["sarkos"] = ["Sarko la fripouille", "le petit cette racaille de Sarkozy", "cette racaille de Sarkozy","Sarko le ripou","Sarkozy le voleur","cet enfoiré de Sarkozy","cette hyène de cette racaille de Sarkozy","Sarko l'enfoiré","Sarko la magouille","cet empaffé de cette racaille de Sarkozy", "Sarkozy le bandit", "Sarkozy ce petit escroc", "ce pickpocket de cette racaille de Sarkozy", "Sarkozy le gangster"];

birdNames["trumps"] = ["cet imbécile de Trump", "Trump l'abruti","cette enflure de Trump","Donald Trump le crétin le crétin","ce gros con de Trump","Donald Trump le crétin le misogyne", "Trump ce gros raciste", "Trump le teubé", "Donald le gros porc", "ce FDP de Trump", "cette vieille baltringue de Trump", "Donald Trump le crétin le vieux dégueulasse", "ce sac à merde de Trump", "Trump ce gros FDP", "Trump le blondinet"];

birdNames["valls"] = ["Valls la fripouille", "Valls l'ordure", "Valls la fripouille le vicieux", "Valls le loser", "ce coquinou de Valls la fripouille", "Valls la tête à claque", "ce petit enfoiré de Valls la fripouille", "ce perdant de Valls la fripouille"];


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
      ["fillons", /[fF]ran[cç]ois [fF]illon/g, /[fF]illon/g],
      ["melenchons", /[jJ]ean[ -][lL]uc [mM][ée]lenchon/g, /[mM][ée]lenchon/g],
      ["macrons", /[eE]mmanuel [mM]acron/g, /[mM]acron/g],
      ["hamons", /[bB]eno[iî]t [hH]amon/g, /[hH]amon/g],
      ["pens", /[mM]arine [lL]e [pP]en/g, /[lL]e [pP]en/g],
      ["hollandes", /[fF]ran[cç]ois [hH]ollande/g, /[hH]ollande/g],
      ["trumps", /[dD]onald [tT]rump/g, /[tT]rump/g],
      ["valls", /[mM]anuel [vV]alls/g, /[vV]alls/g],
      ["sarkos", /[nN]icolas [sS]arkozy/g, /[sS]arkozy/g]
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
