//Why did I do this?
var Number1 = prompt('Choose a whole number in the range of 0 and 20');


if (Number1 == 0) {
  var PlayerClass = prompt('Choose your class: Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rouge, Sorcerer, Warlock, Wizard, Artificer'); 
}


else if (Number1 == 1) {
  var PlayerClass = prompt('Choose your class: Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rouge, Sorcerer, Warlock, Wizard, Artificer');
  var PartyMakeUp = prompt('Choose' + " " + Number1 + " " + 'class: Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rouge, Sorcerer, Warlock, Wizard, Artificer');
}


else if (Number1 < 13) {
  var PlayerClass = prompt('Choose your class: Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rouge, Sorcerer, Warlock, Wizard, Artificer');
  var PartyMakeUp = prompt('Choose' + " " + Number1 + " " + 'classes: Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rouge, Sorcerer, Warlock, Wizard, Artificer');
}


else {
  var PlayerClass = prompt('Choose your class: Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rouge, Sorcerer, Warlock, Wizard, Artificer');
  var PartyMakeUp= prompt('Choose any number of classes: Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rouge, Sorcerer, Warlock, Wizard, Artificer');
}

var Creature1 = prompt('Type any one creature, can even be a mythical creature.');
var Creature2 = prompt('Part 2: Type any one creature, can even be a mythical creature')
var Noun1 = prompt('Type a noun');
var Location1 = prompt('Choose one of these locations: Forest, Dungeon, Labyrinth');
var Encounter1 = prompt('Type true or false.');
var Encounter2 = prompt('Part 2: Type true or false.');
var Success1 = prompt ('Part 3: Type true or false.');

if (Number1 > 0) {
  alert("You, a" + " " + PlayerClass + ", and your party of " + PartyMakeUp + "have taken up a quest as a solo adventure to hunt a diabolical evil, a" + " " + Creature1.toLowerCase() + " " + ". The creature was rumored to resides within a" + " " + Location1.toLowerCase() + ".");
  console.log("You, a" + " " + PlayerClass + ", and your party of " + PartyMakeUp + "have taken up a quest as a solo adventure to hunt a diabolical evil, a" + " " + Creature1.toLowerCase() + " " + ". The creature was rumored to resides within a" + " " + Location1.toLowerCase() + ".");
  
  //Forest Party
  if (Location1.toLowerCase() == "forest") { 
    alert("After taking roughly a 20 minute walk, you find yourself within the forst that holds the " + Creature1 + ".");
    alert("You walked even furthur into the very unoriginal forest and come across a split into the path. The road leads to the left and also continues forward.");
    console.log("After taking roughly a 20 minute walk, you find yourself within the forst that holds the " + Creature1 + ". You walked even furthur into the very unoriginal forest and come across a split into the path. The road leads to the left and also continues forward.");
    
    if (Encounter1.toLowerCase() == "false") {
      alert("Although you had the most determination any person has seen to destroy such a deamon of a creautre, having a choice to follow which path has somehow proven too difficult for you, which you ended up taking neither path by going backwards. You decided to end your adventure here.");
      console.log("Although you had the most determination any person has seen to destroy such a deamon of a creautre, having a choice to follow which path has somehow proven too difficult for you, which you ended up taking neither path by going backwards. You decided to end your adventure here.");
    }
    
    else if (Encounter1.toLowerCase() == "true") {
      var PlayerPath1 = prompt("Will you decide to go left or continue forward? (Type continue or left)");
      
      if (PlayerPath1.toLowerCase() == "left" || "go left" || "continue left") {
        alert("Deciding to go left, you would end up coming across a ruined shrine. Before you even enter it, you sense something lurking within. Weather it is evil or not, you will see.");
        alert("After entering the shrine, you can see statues that crumbled scattered around, and peices of the building itself left to be rubble. As you continue to scan around, you notice a door leading behind the statue.");
        alert("You continue towards it, where stairs lead downwards. Senseing the presence even stronger than before, you continue downwards. After reaching the bottom, you see a door stands in front of you.");
        alert("You opened the door, and find the " + Creature1 + ", waiting for you.");
        alert("It hisses (somehow) with acid dripping form it's mouth, melting the floor below it. It stares directly at you, waiting for your next move.");
        console.log("Deciding to go left, you would end up coming across a ruined shrine. Before you even enter it, you sense something lurking within. Weather it is evil or not, you will see.");
        console.log("After entering the shrine, you can see statues that crumbled scattered around, and peices of the building itself left to be rubble. As you continue to scan around, you notice a door leading behind the statue.");
        console.log("You continue towards it, where stairs lead downwards. Senseing the presence even stronger than before, you continue downwards. After reaching the bottom, you see a door stands in front of you.");
        console.log("You opened the door, and find the " + Creature1 + ", waiting for you.");
        console.log("It hisses (somehow) with acid dripping form it's mouth, melting the floor below it. It stares directly at you, waiting for your next move.");
        
        if (Encounter2.toLowerCase() == "false") {
          alert("The immense size and acidity of the creature enlicted a fear within you, causing you to dash out far from this location. You successfully returned home saftely.");
          console.log("The immense size and acidity of the creature enlicted a fear within you, causing you to dash out far from this location. You successfully returned home saftely.");
        }
        
        else if (Encounter2.toLowerCase() == "true") {
          alert("The courage within you and your party shined, and so you all made the first move. You casted a spell to bind the creature, but it shoots its acid towards you.");
          console.log("The courage within you and your party shined, and so you all made the first move. You casted a spell to bind the creature, but it shoots its acid towards you.");
          
          if (Success1.toLowerCase() == "true") {
            alert("You successfully dodged it, and retaliated with... whatever a " + PlayerClass + " would do and managed to finish the creature off with the single blow. You now won this battle. You took a peice of the creature for proof of reward, and receive your bounty from the person that requested it.");
            console.log("You successfully dodged it, and retaliated with... whatever a " + PlayerClass + " would do and managed to finish the creature off with the single blow. You now won this battle. You took a peice of the creature for proof of reward, and receive your bounty from the person that requested it.");
          }
          
          else if (Success1.toLowerCase() == "false") {
            alert("Unfortunetly, you doged too slowly, and was completly obliterated within the blast of acid.")
            console.log("Unfortunetly, you doged too slowly, and was completly obliterated within the blast of acid.")
          }
        }
      }
      
      else if (PlayerPath1.toLowerCase() == "continue" || "continue forward" || "forward" || "go forward") {
        alert("You decided to continue forward, in which after 23 minutes, you managed to stumble upon a ruined building. Although not sure of it's orgins, or weather the " + Creature1 + " would be there, but you figured it would be worth it to still enter.");
        alert("Upon entering the building, you see nothing but rubble, broken glass, broken wood, and other piles of trash along the floor. You walk around the building finding nothing until you notice a door behind a small amount of rubble.");
        alert("After maneuvering the rubble, you were able to push the door open. Beyond the door, you see a starcase leading upwards.");
        alert("You climb upwards towards the top, occasionally losing footing due to the unstable building. Once you reached the top, another door sits still, ajar. You peeked through the door, and see a mostly empty room. The roof seemed to have caved, the walls were crumbled, and there are not many things left laying around. As you continue to scan the room, you discover a " + Noun1 + ".");
        console.log("You decided to continue forward, in which after 23 minutes, you managed to stumble upon a ruined building. Although not sure of it's orgins, or weather the " + Creature1 + " would be there, but you figured it would be worth it to still enter. Upon entering the building, you see nothing but rubble, broken glass, broken wood, and other piles of trash along the floor. You walk around the building finding nothing until you notice a door behind a small amount of rubble. After maneuvering the rubble, you were able to push the door open. Beyond the door, you see a starcase leading upwards. You climb upwards towards the top, occasionally losing footing due to the unstable building. Once you reached the top, another door sits still, ajar. You peeked through the door, and see a mostly empty room. The roof seemed to have caved, the walls were crumbled, and there are not many things left laying around. As you continue to scan the room, you discover a " + Noun1 + ".");
        var willTakeMaybe= prompt("Will you take the " + Noun1 + "? (Yes or no)");
          
        if (willTakeMaybe.toLowerCase() == "yes") {
          alert("You took the " + Noun1 + ".")
          alert("After you took the " + Noun1 + ", you decided it was much more precious to you than the money you would receive, in which you took it and returned to your home.");
          console.log("You took the " + Noun1 + ". After you took the " + Noun1 + ", you decided it was much more precious to you than the money you would receive, in which you took it and returned to your home.");
        }
          
        else if (willTakeMaybe.toLowerCase() == "no") {
          alert("You did not take the " + Noun1 + ".");
          alert("Deciding to not take it, you would return back towards the other path... Or you thought because you managed to somehow get lost anyway. Eventually you managed to return to your home but it took several hours. You ultimately decided to not bother with this quest.");
          console.log("You did not take the " + Noun1 + ". Deciding to not take it, you would return back towards the other path... Or you thought because you managed to somehow get lost anyway. Eventually you managed to return to your home but it took several hours. You ultimately decided to not bother with this quest.");
        }
      }
    }
  }
    
  //Dungeon Party
  else if (Location1.toLowerCase() == "dungeon") {
    
    alert("As you and your party went through many fields of trees and paths, you eventually find yourself in front of the entrance to the dungeon.");
    console.log("As you and your party went through many fields of trees and paths, you eventually find yourself in front of the entrance to the dungeon.");
    
    if (Encounter1.toLowerCase() == "false") {
      alert("However, the thought of potential traps and creatures that can reside within the dungeon has overwhelmed you, forcing you to return to your hometown alone.");
      console.log("However, the thought of potential traps and creatures that can reside within the dungeon has overwhelmed you, forcing you to return to your hometown alone.");
    }
    
    else if (Encounter1.toLowerCase() == "true") {
      alert("You and the your entered the deep dark down deep dark dungeon. As you strolled through it, you notice doors that are somewhat open.");
      console.log("You and your party entered the deep dark down deep dark dungeon. As you strolled through it, you notice doors that are somewhat open.");
      var PlayerPath1 = prompt("Will you enter the dungeon tra... I mean rooms or ingore them? Type Yes to enter the rooms or no to continue.");
      
      if (PlayerPath1.toLowerCase() == "no") {
        alert("Instead of finding possible extra loot, you decided to ignore the rooms because you worried about the previous prompt.");
        console.log("Instead of finding possible extra loot, you decided to ignore the rooms because you worried about the previous prompt.");
        
        if (Encounter2.toLowerCase() == "true") {
          alert("During the stroll down the hallways, a " + Creature2 + " drop down from the ceiling in front of you.");
          console.log("During the stroll down the hallways, a " + Creature2 + " drop down from the ceiling in front of you.");
          
          if (Success1.toLowerCase() == "true") {
            alert("The battle that commenced with the " + Creature2 + " was done swiftly, causing it flopped to the ground, unmoving. You presume the creature dead, and continue past it.");
            alert("After what feels like hours, you finally stumpled upon a door that was at the end of this dungeon. The door looks as if it was worn, almost off the hinges.");
            alert("You attempt to push it open, but for some odd reason it won't budge.");
            console.log("The battle that commenced with the " + Creature2 + " was done swiftly, causing it flopped to the ground, unmoving. You presume the creature dead, and continue past it.");
            console.log("After what feels like hours, you finally stumpled upon a door that was at the end of this dungeon. The door looks as if it was worn, almost off the hinges.");
            console.log("You attempt to push it open, but for some odd reason it won't budge.");
            var BlastorBreak1 = prompt("Will you blast the door open or will you attempt to break it down? (Type either Break It Down or Blast It Open).");
            
            if (BlastorBreak1.toLowerCase() == "break it down" || "break it" || "break down") {
              alert("With your mighty strength, you successfully broke the door down. Somehow, breaking the door did not disturbe the" + Creature1 + ", as you see it slumber away the time.");
              alert("However, shortly after you and the party entered the dungeon room, the creature started to wake up.");
              alert("Swiftly, you and the party send a barrage of... whatever you all can do.");
              alert("The barrage of attacks have proven to work quite effectively, and managed to completly obliterate it.");
              alert("Finally, the creature has been ended. Now, you returned home with some proof of the hunt, and received partial of the reward from the bounty.");
              console.log("With your mighty strength, you successfully broke the door down. Somehow, breaking the door did not disturbe the" + Creature1 + ", as you see it slumber away the time.");
              console.log("However, shortly after you and the party entered the dungeon room, the creature started to wake up.");
              console.log("Swiftly, you and the party send a barrage of... whatever you all can do.");
              console.log("The barrage of attacks have proven to work quite effectively, and managed to completly obliterate it.");
              console.log("Finally, the creature has been ended. Now, you returned home with some proof of the hunt, and received partial of the reward from the bounty.");
            }
          
            else if (BlastorBreak1.toLowerCase() == "blast it open" || "blast it" || "blast open") {
              alert("With the powers of a " + PlayerClass + ", you blasted the door away, sending it flying towards the other end of the room.");
              alert("However, this decision was probably not the best option to choose. The door slammed into the ground, creating a loud creash. That, along with your explosion from your class, has awoken the evil" + Creature1.toLowerCase() + " from its slumber.");
              alert("As accordinly, a portal opens below you, swallowing you into a completely different dimension, subsequently making your work be for nothing.");
              console.log("With the powers of a " + PlayerClass + ", you blasted the door away, sending it flying towards the other end of the room.");
              console.log("However, this decision was probably not the best option to choose. The door slammed into the ground, creating a loud creash. That, along with your explosion from your class, has awoken the evil" + Creature1.toLowerCase() + " from its slumber.");
              console.log("As accordinly, a portal opens below you, swallowing you into a completely different dimension, subsequently making your work be for nothing.");
            }
          }
          
          if (Success1.toLowerCase() == "false") {
            alert("Although you managed to hold your ground for some time against the creature, you ended up losing the battle to such creature, ending your journey.");
            console.log("Although you managed to hold your ground for some time against the creature, you ended up losing the battle to such creature, ending your journey.");
          }
        }
        
        else if (Encounter2.toLowerCase() == "false") {
          alert("Without any trouble, you reached the end of this dungeon. In front of you is a shoddy door that is closed. You attempt to open the door, but appears to be stuck.");
          console.log("Without any trouble, you reached the end of this dungeon. In front of you is a shoddy door that is closed. You attempt to open the door, but appears to be stuck.");
          var BlastorBreak1 = prompt("Will you blast the door open or will you attempt to break it down? (Type either Break It Down or Blast It Open).");
          
          if (BlastorBreak1.toLowerCase() == "break it down" || "break it" || "break open") {
            alert("With your mighty strength, you successfully broke the door down. Somehow, breaking the door did not disturbe the" + Creature1 + ", as you see it slumber away the time.");
            alert("However, shortly after you entered the dungeon, the creature started to wake up.");
            alert("Swiftly, you send a barrage of... whatever your class would do, along with whatever your party can do and finally beat the creature. One of you took a piece of the creautre to show proof of kill, and all of you received your cut of the bounty.");
            console.log("With your mighty strength, you successfully broke the door down. Somehow, breaking the door did not disturbe the" + Creature1 + ", as you see it slumber away the time.");
            console.log("However, shortly after you entered the dungeon, the creature started to wake up.")
            console.log("Swiftly, you send a barrage of... whatever your class would do, along with whatever your party can do and finally beat the creature. One of you took a piece of the creautre to show proof of kill, and all of you received your cut of the bounty.");
          }
          
          else if (BlastorBreak1.toLowerCase() == "blast it open" || "blast open" || "blast it") {
            alert("With the powers of a " + PlayerClass + ", you blasted the door away, sending it flying towards the other end of the room.");
            alert("However, this decision was probably not the best option to choose. The door slammed into the ground, creating a loud creash. That, along with your explosion from your class, has awoken the evil" + Creature1.toLowerCase() + " from its slumber.");
            alert("As accordinly, a portal opens below you, swallowing you into a completely different dimension, subsequently making your work be for nothing.");
            console.log("With the powers of a " + PlayerClass + ", you blasted the door away, sending it flying towards the other end of the room.");
            console.log("However, this decision was probably not the best option to choose. The door slammed into the ground, creating a loud creash. That, along with your explosion from your class, has awoken the evil" + Creature1.toLowerCase() + " from its slumber.");
            console.log("As accordinly, a portal opens below you, swallowing you into a completely different dimension, subsequently making your work be for nothing.");
          }
        }
      }
      
      else if (PlayerPath1.toLowerCase() == "yes") {
        alert("Well, it seems that you didn't take the hint from the previous prompt, so you promptly fall into a pit trap that you somehow missed.");
        console.log("Well, it seems that you didn't take the hint from the previous prompt, so you promptly fell into a pit trap that you somehow missed.");
      }
    }
  }
  
  //Labyrinth Party
  else if (Location1.toLowerCase() == "labyrinth") {
    alert("You, along with your party, successfully navigated the way to the entrance of the labyrinth, holding the diabolical" + " " + Creature1.toLowerCase() + " " + ". You opened the structure's heavy door and adventure forth.");
    console.log("You, along with your party, successfully navigated the way to the entrance of the labyrinth, holding the diabolical" + " " + Creature1.toLowerCase() + " " + ". You opened the structure's heavy door and adventure forth.");
    
    if (Encounter1.toLowerCase() == "false") {
      alert("Despite believing you were an expert navigator on mazes and even boast to your party on your great intelligence of them, you managed to succesully be kicked from the party as you managed to return the party back into the entrance several times. You returned to your hometown without even seeing the vile" + " " + Creature1.toLowerCase() + ".");
      console.log("Despite believing you were an expert navigator on mazes and even boast to your party on your great intelligence of them, you managed to succesully be kicked from the party as you managed to return the party back into the entrance several times. You returned to your hometown without even seeing the vile" + " " + Creature1.toLowerCase() + ".");
    }
    
    else if (Encounter1.toLowerCase() == "true") {
      alert("You and your party venture the endless hallways of the dark and twisting labyrinth.");
      console.log("You and your party venture the endless hallways of the dark and twisting labyrinth.");
      
      if (Encounter2.toLowerCase() == "true") {
        alert("You were walking down the deep hallways when suddently a wild " + Creature2.toLowerCase() + " appears in front of the party.");
        console.log("Suddently, a wild " + Creature2.toLowerCase() + " appears in front of the party.");
        
        if (Success1.toLowerCase() == "true") {
          alert("Within several minutes of the fight, the " + Creature2.toLowerCase() + " fell to the ground, dead. You and the party managed to defeat it.");
          alert("Without any other trouble, you and the party managed to make it to the end of this long labryinth. You, with your party, are standing in front of a door.");
          alert("You opened the door and find the " + Creature1.toLowerCase() + " laying on the ground, sleeping peacefully. You have found the root of all evils, the most heinous of creatures to exist.");
          console.log("Within several minutes of the fight, the " + Creature2.toLowerCase() + " fell to the ground, dead. You managed to defeat it. Without any trouble, you managed to make it to the end of this long labryinth and is standing in front of a door. You opened the door and find the " + Creature1.toLowerCase() + " laying on the ground, sleeping peacefully. You found the root of all evils, the most heinous of creatures to exist.");
          var FinalDecision1 = prompt("Will you finally end this creatures reign of terror? (Yes or no).");

          if (FinalDecision1.toLowerCase() == "no") {
            var FinalDecision2 = prompt("Are you sure you do not want to destroy this creature? The thing that has decided to wreak havoc across lands, an evil in need to containment.");
            console.log("You actually reconsidered killing the creature.");
            
            if (FinalDecision2.toLowerCase() == "no") {
              alert("As you argued with your party to weather or not you will eliminate this creautre, it woke up. Your arguing had seemingly been just slightly too loud, and consequently, decided to break the time in this reality, causing you and your party to age swiftly and die.");
              console.log("As you argued with your party to weather or not you will eliminate this creautre, it woke up. Your arguing had seemingly been just slightly too loud, and consequently, decided to break the time in this reality, causing you and your party to age swiftly and die.");
            }
          
            else if (FinalDecision2.toLowerCase() == "yes") {
              alert("Although you literally went through a maze that has seemed endless to you, and was tasked to destroy this creature, you inevitably decided to leave this resting creature be, and leave the labyrinth.");
              console.log("Although you literally went through a maze that has seemed endless to you, and was tasked to destroy this creature, you inevitably decided to leave this resting creature be, and leave the labyrinth.");
            }
          }
        
          else if (FinalDecision1.toLowerCase() == "yes") {
            alert("With your skills as a " + PlayerClass.toLowerCase() + ", you managed to finally put this creature in permanent rest, and walked away with a fine amount of money. Although in reality, you never actually fought the creature, as it was just sleeping so honestly, you probably didn't deserve the amount of money you actually got.");
            console.log("With your skills as a " + PlayerClass.toLowerCase() + ", you managed to finally put this creature in permanent rest, and walked away with a fine amount of money. Although in reality, you never actually fought the creature, as it was just sleeping so honestly, you probably didn't deserve the amount of money you actually got.");
          }
        }
        
        else if (Success1.toLowerCase() == "false") {
          alert("Despite your best efforts to defeat the " + Creature2.toLowerCase() + ", you ended up being burnt to a crisp by its stream of fire it breathed onto you.");
          console.log("Despite your best efforts to defeat the " + Creature2.toLowerCase() + ", you ended up being burnt to a crisp by its stream of fire it breathed onto you.");
        }
      }
      
      else if (Encounter2.toLowerCase() == "false") {
        alert("Without any trouble, you managed to make it to the end of this long labryinth and is standing in front of a door. You opened the door and find the " + Creature1.toLowerCase() + " laying on the ground, sleeping peacefully.");
        alert("You found the root of all evils, the most heinous of creatures to exist.");
        console.log("Without any trouble, you managed to make it to the end of this long labryinth and is standing in front of a door. You opened the door and find the " + Creature1.toLowerCase() + " laying on the ground, sleeping peacefully. You found the root of all evils, the most heinous of creatures to exist.");
        var FinalDecision1 = prompt("Will you finally end this creatures reign of terror? (Yes or no).");
        
        if (FinalDecision1.toLowerCase() == "no") {
          var FinalDecision2 = prompt("Are you sure you do not want to destroy this creature? The thing that wreaks havoc across lands, an evil in need to containment?");
          console.log("You reconsidered actually killing the creature.");
          
          if (FinalDecision2.toLowerCase() == "no") {
            alert("As you decided to process weather or not you will eliminate the creautre, it woke up. It sensed your presence and consequently, summon forth a giant crab to crush you, which it did.");
            console.log("As you decided to process weather or not you will eliminate the creautre, it woke up. It sensed your presence and consequently, summon forth a giant crab to crush you, which it did.");
          }
          
          else if (FinalDecision2.toLowerCase() == "yes") {
            alert("Although you literally went through a maze that has seemed endless to you, and even was tasked to destroy this creature, you inevitably decided to leave this resting creature be, and exit the labyrinth.");
            console.log("Although you literally went through a maze that has seemed endless to you, and even was tasked to destroy this creature, you inevitably decided to leave this resting creature be, and exit the labyrinth.");
          }
        }
        
        else if (FinalDecision1.toLowerCase() == "yes") {
          alert("With your skills as a " + PlayerClass.toLowerCase() + " and your party of " + PartyMakeUp.toLowerCase() + ", this creature has been put to permanent rest, and you and your party walked away with a fine amount of money. Although in reality, you never actually fought the creature, as it was just sleeping so honestly, you probably didn't deserve the amount of money you actually got.");
          console.log("With your skills as a " + PlayerClass.toLowerCase() + " and your party of " + PartyMakeUp.toLowerCase() + ", this creature has been put to permanent rest, and you and your party walked away with a fine amount of money. Although in reality, you never actually fought the creature, as it was just sleeping so honestly, you probably didn't deserve the amount of money you actually got.");
        }
      }
    }
  }
}


if (Number1 == 0) {  
  
  alert("You, a" + " " + PlayerClass + ", have taken up a quest as a solo adventure to hunt a diabolical evil, a" + " " + Creature1.toLowerCase() + " " + ". The creature was rumored to resides within a" + " " + Location1.toLowerCase() + ".");
  console.log("You, a" + " " + PlayerClass + ", have taken up a quest as a solo adventure to hunt a diabolical evil, a" + " " + Creature1.toLowerCase() + " " + ". The creature was rumored to resides within a" + " " + Location1.toLowerCase() + ".");
  
  //Forest Solo
  if (Location1.toLowerCase() == "forest") { 
    alert("After taking roughly a 20 minute walk, you find yourself within the forst that holds the " + Creature1 + ".");
    alert("You walked even furthur into the very unoriginal forest and come across a split into the path. The road leads to the left and also continues forward.");
    console.log("You walked even furthur into the very unoriginal forest and come across a split into the path. The road leads to the left and also continues forward.");
    
    if (Encounter1.toLowerCase() == "false") {
      alert("Although you had the most determination any person has seen to destroy such a deamon of a creautre, having a choice to follow which path has somehow proven too difficult for you, which you ended up taking neither path by going back. You decided to end your adventure here.");
      console.log("Although you had the most determination any person has seen to destroy such a deamon of a creautre, having a choice to follow which path has somehow proven too difficult for you, which you ended up taking neither path by going back. You decided to end your adventure here.");
    }
    
    else if (Encounter1.toLowerCase() == "true") {
      var PlayerPath1 = prompt("Will you decide to go left or continue forward? (Type continue or left)");
      
      if (PlayerPath1.toLowerCase() == "left" || "go left" || "continue left") {
        alert("Deciding to go left, you would end up coming across a ruined shrine. Before you even enter it, you sense something lurking within. Weather it is evil or not, you will see.");
        alert("After entering the shrine, you can see statues that crumbled scattered around, and peices of the building itself left to be rubble. As you continue to scan around, you notice a door leading behind the statue.");
        alert("You continue towards it, where stairs lead downwards. Senseing the presence even stronger than before, you continue downwards. After reaching the bottom, you see a door stands in front of you.");
        alert("You opened the door, and find the " + Creature1 + ", waiting for you.");
        alert("It hisses (somehow) with acid dripping form it's mouth, melting the floor below it. It stares directly at you, waiting for your next move.");
        console.log("Deciding to go left, you would end up coming across a ruined shrine. Before you even enter it, you sense something lurking within. Weather it is evil or not, you will see.");
        console.log("After entering the shrine, you can see statues that crumbled scattered around, and peices of the building itself left to be rubble. As you continue to scan around, you notice a door leading behind the statue.");
        console.log("You continue towards it, where stairs lead downwards. Senseing the presence even stronger than before, you continue downwards. After reaching the bottom, you see a door stands in front of you.");
        console.log("You opened the door, and find the " + Creature1 + ", waiting for you.");
        console.log("It hisses (somehow) with acid dripping form it's mouth, melting the floor below it. It stares directly at you, waiting for your next move.");
        
        if (Encounter2.toLowerCase() == "false") {
          alert("The immense size and acidity of the creature enlicted a fear within you, causing you to dash out far from this location. You successfully returned home saftely.");
          console.log("The immense size and acidity of the creature enlicted a fear within you, causing you to dash out far from this location. You successfully returned home saftely.");
        }
        
        else if (Encounter2.toLowerCase() == "true") {
          alert("Your courage flowed through you, and so you made your first move. You casted a spell to bind the creature, but it shoots its acid towards you.");
          console.log("Your courage flowed through you, and so you made your first move. You casted a spell to bind the creature, but it shoots its acid towards you.");
          
          if (Success1.toLowerCase() == "true") {
            alert("You successfully dodged it, and retaliated with... whatever a " + PlayerClass + " would do and managed to finish the creature off with the single blow. You now won this battle. You took a peice of the creature for proof of reward, and receive your bounty from the person that requested it.");
            console.log("You successfully dodged it, and retaliated with... whatever a " + PlayerClass + " would do and managed to finish the creature off with the single blow. You now won this battle. You took a peice of the creature for proof of reward, and receive your bounty from the person that requested it.");
          }
          
          else if (Success1.toLowerCase() == "false") {
            alert("Unfortunetly, you doged too slowly, and was completly obliterated within the blast of acid.")
            console.log("Unfortunetly, you doged too slowly, and was completly obliterated within the blast of acid.")
          }
        }
      }
      
      else if (PlayerPath1.toLowerCase() == "continue" || "continue forward" || "forward" || "go forward") {
        alert("You decided to continue forward, in which after 23 minutes, you managed to stumble upon a ruined building. Although not sure of it's orgins, or weather the " + Creature1 + " would be there, but you figured it would be worth it to still enter.");
        alert("Upon entering the building, you see nothing but rubble, broken glass, broken wood, and other piles of trash along the floor. You walk around the building finding nothing until you notice a door behind a small amount of rubble.");
        alert("After maneuvering the rubble, you were able to push the door open. Beyond the door, you see a starcase leading upwards.");
        alert("You climb upwards towards the top, occasionally losing footing due to the unstable building. Once you reached the top, another door sits still, ajar. You peeked through the door, and see a mostly empty room. The roof seemed to have caved, the walls were crumbled, and there are not many things left laying around. As you continue to scan the room, you discover a " + Noun1 + ".");
        console.log("You decided to continue forward, in which after 23 minutes, you managed to stumble upon a ruined building. Although not sure of it's orgins, or weather the " + Creature1 + " would be there, but you figured it would be worth it to still enter. Upon entering the building, you see nothing but rubble, broken glass, broken wood, and other piles of trash along the floor. You walk around the building finding nothing until you notice a door behind a small amount of rubble. After maneuvering the rubble, you were able to push the door open. Beyond the door, you see a starcase leading upwards. You climb upwards towards the top, occasionally losing footing due to the unstable building. Once you reached the top, another door sits still, ajar. You peeked through the door, and see a mostly empty room. The roof seemed to have caved, the walls were crumbled, and there are not many things left laying around. As you continue to scan the room, you discover a " + Noun1 + ".")
        var willTakeMaybe= prompt("Will you take the " + Noun1 + "? (Yes or no)");
          
        if (willTakeMaybe.toLowerCase() == "yes") {
          alert("You took the " + Noun1 + ".")
          alert("After you took the " + Noun1 + ", you decided it was much more precious to you than the money you would receive, in which you took it and returned to your home.");
          console.log("You took the " + Noun1 + ". After you took the " + Noun1 + ", you decided it was much more precious to you than the money you would receive, in which you took it and returned to your home.");
        }
          
        else if (willTakeMaybe.toLowerCase() == "no") {
          alert("You did not take the " + Noun1 + ".");
          alert("Deciding to not take it, you would return back towards the other path... Or you thought because you managed to somehow get lost anyway. Eventually you managed to return to your home but it took several hours. You ultimately decided to not bother with this quest.");
          console.log("You did not take the " + Noun1 + ". Deciding to not take it, you would return back towards the other path... Or you thought because you managed to somehow get lost anyway. Eventually you managed to return to your home but it took several hours. You ultimately decided to not bother with this quest.");
        }
      }
    }
  }
  
  //Dungeon Solo
  else if (Location1.toLowerCase() == "dungeon") {
    
    alert("As you went through many fields of trees and paths, you eventually find yourself in front of the entrance to the dungeon.");
    console.log("As you went through many fields of trees and paths, you eventually find yourself in front of the entrance to the dungeon.")
    
    if (Encounter1.toLowerCase() == "false") {
      alert("However, the thought of potential traps and creatures that can reside within the dungeon has overwhelmed you, forcing you to return to your hometown.");
      console.log("However, the thought of potential traps and creatures that can reside within the dungeon has overwhelmed you, forcing you to return to your hometown.");
    }
    
    else if (Encounter1.toLowerCase() == "true") {
      alert("You entered the deep dark down deep dark dungeon. As you strolled through it, you notice doors that are somewhat open.");
      console.log("You entered the deep dark down deep dark dungeon. As you strolled through it, you notice doors that are somewhat open.");
      var PlayerPath1 = prompt("Will you enter the dungeon tra... I mean rooms or ingore them? Type Yes to enter the rooms or no to continue.");
      
      if (PlayerPath1.toLowerCase() == "no") {
        alert("Instead of finding possible extra loot, you decided to ignore the rooms because you worried about the previous prompt.");
        console.log("Instead of finding possible extra loot, you decided to ignore the rooms because you worried about the previous prompt.");
        
        if (Encounter2.toLowerCase() == "true") {
          alert("During your stroll down the hallways, a " + Creature2 + " drop down from the ceiling in front of you.");
          console.log("During your stroll down the hallways, a " + Creature2 + " drop down from the ceiling in front of you.");
          
          if (Success1.toLowerCase() == "true") {
            alert("The battle between you and the " + Creature2 + "did take a while, but it eventually flopped to the ground, unmoving. You presume the creature dead, and continue past it.");
            alert("After what feels like hours, you finally stumpled upon a door that was at the end of this dungeon. The door looks as if it was worn, almost off the hinges.");
            alert("You attempt to push it open, but for some odd reason it won't budge.");
            console.log("The battle between you and the " + Creature2 + "did take a while, but it eventually flopped to the ground, unmoving. You presume the creature dead, and continue past it.");
            console.log("After what feels like hours, you finally stumpled upon a door that was at the end of this dungeon. The door looks as if it was worn, almost off the hinges.");
            console.log("You attempt to push it open, but for some odd reason it won't budge.");
            var BlastorBreak1 = prompt("Will you blast the door open or will you attempt to break it down? (Type either Break It Down or Blast It Open).");
            
            if (BlastorBreak1.toLowerCase() == "break it down" || "break it" || "break down") {
              alert("With your mighty strength, you successfully broke the door down. Somehow, breaking the door did not disturbe the" + Creature1 + ", as you see it slumber away the time.");
              alert("However, shortly after you entered the dungeon, the creature started to wake up.");
              alert("Swiftly, you send a barrage of... whatever your class would do.");
              alert("Your barrage of attacks have proven to work quite effectively, and somehow manage to completly obliterate it.");
              alert("Finally, you ended the creature. Now, you returned home with some proof of your kill, and received the reward from the bounty.");
              console.log("With your mighty strength, you successfully broke the door down. Somehow, breaking the door did not disturbe the" + Creature1 + ", as you see it slumber away the time.");
              console.log("However, shortly after you entered the dungeon, the creature started to wake up.");
              console.log("Swiftly, you send a barrage of... whatever your class would do.");
              console.log("Finally, you ended the creature. Now, you returned home with some proof of your kill, and received the reward from the bounty.");
            }
          
            else if (BlastorBreak1.toLowerCase() == "blast it open" || "blast it" || "blast open") {
              alert("With the powers of a " + PlayerClass + ", you blasted the door away, sending it flying towards the other end of the room.");
              alert("However, this decision was probably not the best option to choose. The door slammed into the ground, creating a loud creash. That, along with your explosion from your class, has awoken the evil" + Creature1.toLowerCase() + " from its slumber.");
              alert("As accordinly, a portal opens below you, swallowing you into a completely different dimension, subsequently making your work be for nothing.");
              console.log("With the powers of a " + PlayerClass + ", you blasted the door away, sending it flying towards the other end of the room.");
              console.log("However, this decision was probably not the best option to choose. The door slammed into the ground, creating a loud creash. That, along with your explosion from your class, has awoken the evil" + Creature1.toLowerCase() + " from its slumber.");
              console.log("As accordinly, a portal opens below you, swallowing you into a completely different dimension, subsequently making your work be for nothing.");
            }
          }
          
          if (Success1.toLowerCase() == "false") {
            alert("Although you managed to hold your ground for some time against the creature, you ended up losing the battle to such creature, ending your journey.");
            console.log("Although you managed to hold your ground for some time against the creature, you ended up losing the battle to such creature, ending your journey.");
          }
        }
        
        else if (Encounter2.toLowerCase() == "false") {
          alert("Without any trouble, you reached the end of this dungeon. In front of you is a shoddy door that is closed. You attempt to open the door, but appears to be stuck.");
          console.log("Without any trouble, you reached the end of this dungeon. In front of you is a shoddy door that is closed. You attempt to open the door, but appears to be stuck.");
          var BlastorBreak1 = prompt("Will you blast the door open or will you attempt to break it down? (Type either Break It Down or Blast It Open).");
          
          if (BlastorBreak1.toLowerCase() == "break it down") {
            alert("With your mighty strength, you successfully broke the door down. Somehow, breaking the door did not disturbe the" + Creature1 + ", as you see it slumber away the time.");
            alert("However, shortly after you entered the dungeon, the creature started to wake up.");
            alert('Swiftly, you send a barrage of... whatever your class would do, and successfully defeat it. Now that you did, you took a piece of it and received your bounty for your "really" hard kill.');
            console.log("With your mighty strength, you successfully broke the door down. Somehow, breaking the door did not disturbe the" + Creature1 + ", as you see it slumber away the time.");
            console.log("However, shortly after you entered the dungeon, the creature started to wake up.");
            console.log('Swiftly, you send a barrage of... whatever your class would do, and successfully defeat it. Now that you did, you took a piece of it and received your bounty for your "really" hard kill.');
            
          }
          
          else if (BlastorBreak1.toLowerCase() == "blast it open") {
            alert("With the powers of a " + PlayerClass + ", you blasted the door away, sending it flying towards the other end of the room.");
            alert("However, this decision was probably not the best option to choose. The door slammed into the ground, creating a loud creash. That, along with your explosion from your class, has awoken the evil" + Creature1.toLowerCase() + " from its slumber.");
            alert("As accordinly, a portal opens below you, swallowing you into a completely different dimension, subsequently making your work be for nothing.");
            console.log("With the powers of a " + PlayerClass + ", you blasted the door away, sending it flying towards the other end of the room.");
            console.log("However, this decision was probably not the best option to choose. The door slammed into the ground, creating a loud creash. That, along with your explosion from your class, has awoken the evil" + Creature1.toLowerCase() + " from its slumber.");
            console.log("As accordinly, a portal opens below you, swallowing you into a completely different dimension, subsequently making your work be for nothing.");
          }
        }
      }
      
      else if (PlayerPath1.toLowerCase() == "yes") {
        alert("Well, it seems that you didn't take the hint from the previous prompt, so you promptly fall into a pit trap that you somehow missed.");
        console.log("Well, it seems that you didn't take the hint from the previous prompt, so you promptly fell into a pit trap that you somehow missed.");
      }
    }
  }
  
  //Labyrinth Solo
  else if (Location1.toLowerCase() == "labyrinth") {
    alert("You successfully navigated your way to the entrance of the labyrinth that holds the diabolical" + " " + Creature1 + " " + ". You open the structure's heavy door and adventure forth.");
    console.log("You successfully navigated your way to the entrance of the labyrinth that holds the diabolical" + " " + Creature1 + " " + ". You open the structure's heavy door and adventure forth.");
    
    if (Encounter1.toLowerCase() == "false") {
      alert("Despite believing you were an expert navigator on mazes and even boast to your peers on your great intelligence of them, you managed to succesully return the entrance of the labyrinth several times. Frustrated, you returned to your hometown without even seeing the vile" + " " + Creature1 + ".");
      console.log("Despite believing you were an expert navigator on mazes and even boast to your peers on your great intelligence of them, you managed to succesully return the entrance of the labyrinth several times. Frustrated, you returned to your hometown without even seeing the vile" + " " + Creature1 + ".");
    }
    
    else if (Encounter1.toLowerCase() == "true") {
      alert("You venture the endless hallways of the dark and twisting labyrinth.");
      console.log("You venture the endless hallways of the dark and twisting labyrinth.");
      
      if (Encounter2.toLowerCase() == "true") {
        alert("You were walking down the deep hallways when suddently a wild " + Creature2 + " appears in front of you.");
        console.log("Suddently, a wild " + Creature2 + " appears in front of you.");
        
        if (Success1.toLowerCase() == "true") {
          alert("Within several minutes of the fight, the " + Creature2 + " fell to the ground, dead. You managed to defeat it.");
          alert("Without any other trouble, you managed to make it to the end of this long labryinth and is standing in front of a door. You opened the door and find the " + Creature1.toLowerCase() + " laying on the ground, sleeping peacefully.");
          alert("You found the root of all evils, the most heinous of creatures to exist.");
          console.log("Within several minutes of the fight, the " + Creature2 + " fell to the ground, dead. You managed to defeat it. Without any trouble, you managed to make it to the end of this long labryinth and is standing in front of a door. You opened the door and find the " + Creature1 + " laying on the ground, sleeping peacefully. You found the root of all evils, the most heinous of creatures to exist.");
          var FinalDecision1 = prompt("Will you finally end this creatures reign of terror? (Yes or no).");

          if (FinalDecision1.toLowerCase() == "no") {
            var FinalDecision2 = prompt("Are you sure you do not want to destroy this creature? The thing that has decided to wreak havoc across lands, an evil in need to containment.");
            console.log("You reconsidered actually killing the creature.");
            
            if (FinalDecision2.toLowerCase() == "no") {
              alert("As you decided to process weather or not you will eliminate the creautre, it woke up. It sensed your presence and consequently, summon forth a giant crab to crush you, which it did.");
              console.log("As you decided to process weather or not you will eliminate the creautre, it woke up. It sensed your presence and consequently, summon forth a giant crab to crush you, which it did.");
            }
          
            else if (FinalDecision2.toLowerCase() == "yes") {
              alert("Although you literally went through a maze that has seemed endless to you, and was tasked to destroy this creature, you inevitably decided to leave this resting creature be, and leave the labyrinth.");
              console.log("Although you literally went through a maze that has seemed endless to you, and was tasked to destroy this creature, you inevitably decided to leave this resting creature be, and leave the labyrinth.");
            }
          }
        
          else if (FinalDecision1.toLowerCase() == "yes") {
            alert("With your skills as a " + PlayerClass.toLowerCase() + ", you managed to finally put this creature in permanent rest, and walked away with a fine amount of money. Although in reality, you never actually fought the creature, as it was just sleeping so honestly, you probably didn't deserve the amount of money you actually got.");
            console.log("With your skills as a " + PlayerClass.toLowerCase() + ", you managed to finally put this creature in permanent rest, and walked away with a fine amount of money. Although in reality, you never actually fought the creature, as it was just sleeping so honestly, you probably didn't deserve the amount of money you actually got.");
          }
        }
        
        else if (Success1.toLowerCase() == "false") {
          alert("Despite your best efforts to defeat the " + Creature2 + ", you ended up being burnt to a crisp by its stream of fire it breathed onto you.");
          console.log("Despite your best efforts to defeat the " + Creature2 + ", you ended up being burnt to a crisp by its stream of fire it breathed onto you.");
        }
      }
      
      else if (Encounter2.toLowerCase() == "false") {
        alert("Without any trouble, you managed to make it to the end of this long labryinth and is standing in front of a door. You opened the door and find the " + Creature1 + " laying on the ground, sleeping peacefully.");
        alert("You found the root of all evils, the most heinous of creatures to exist.");
        console.log("Without any trouble, you managed to make it to the end of this long labryinth and is standing in front of a door. You opened the door and find the " + Creature1 + " laying on the ground, sleeping peacefully. You found the root of all evils, the most heinous of creatures to exist.");
        var FinalDecision1 = prompt("Will you finally end this creatures reign of terror? (Yes or no).");
        
        if (FinalDecision1.toLowerCase() == "no") {
          var FinalDecision2 = prompt("Are you sure you do not want to destroy this creature? The thing that wreaks havoc across lands, an evil in need to containment?");
          console.log("You reconsidered actually killing the creature.");
          
          if (FinalDecision2.toLowerCase() == "no") {
            alert("As you decided to process weather or not you will eliminate the creautre, it woke up. It sensed your presence and consequently, summon forth a giant crab to crush you, which it did.");
            console.log("As you decided to process weather or not you will eliminate the creautre, it woke up. It sensed your presence and consequently, summon forth a giant crab to crush you, which it did.");
          }
          
          else if (FinalDecision2.toLowerCase() == "yes") {
            alert("Although you literally went through a maze that has seemed endless to you, and even was tasked to destroy this creature, you inevitably decided to leave this resting creature be, and exit the labyrinth.");
            console.log("Although you literally went through a maze that has seemed endless to you, and even was tasked to destroy this creature, you inevitably decided to leave this resting creature be, and exit the labyrinth.");
          }
        }
        
        else if (FinalDecision1.toLowerCase() == "yes") {
          alert("With your skills as a " + PlayerClass.toLowerCase() + ", you managed to finally put this creature in permanent rest, and walked away with a fine amount of money. Although in reality, you never actually fought the creature, as it was just sleeping so honestly, you probably didn't deserve the amount of money you actually got.");
          console.log("With your skills as a " + PlayerClass.toLowerCase() + ", you managed to finally put this creature in permanent rest, and walked away with a fine amount of money. Although in reality, you never actually fought the creature, as it was just sleeping so honestly, you probably didn't deserve the amount of money you actually got.");
        }
      }
    }       
  }
}