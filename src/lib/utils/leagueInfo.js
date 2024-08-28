export const leagueID = 1049732316240723968n; // your league ID
export const leagueName = "Respect Your Elders"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

export const homepageText = `
  <p></p>
`;

export const managers = [
  { //Bo
    "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "31152355404038144",
    "name": "Bo",
    "location": "Florida (Eastern)", // (optional)
    "bio": "A third of the world famous Respect Your Elders! Thinks that the whole point is to trade as many times as possible. Proud owner of the curse to lose in the semi-finals every year. Fun fact: he didn't lose in the semi-finals one time after utilyzing elder magic (now banned), one week later a man died during the championship game... Bo lost in the semi-finals the following year.",
    "photo": "/../managers/bo.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Semifinals", // Can be anything (usually your rival's name)
      link: 0, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/semifinals.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4988, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Trade and trade and also trade.",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Kev
    "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "204490274854932480",
    "name": "Kev",
    "location": "Colorado (Mountain)", // (optional)
    "bio": "Fellow Elder that knows how to line up triple MVP seasons, now having done it twice. Shockingly, he won a championship both of those years. All of those MVP candidates were picked in the original draft all the way back in 2018, so nobody else has had a chance at that kind of fun.",
    "photo": "/../managers/kev.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Yacob", // Can be anything (usually your rival's name)
      link: 2, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/yacob.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4034, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Just have 3 MVPs, this isn't that hard.",
    "tradingScale": 9, // 1 - 10
    "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Yacob
    "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "204748714156228608",
    "name": "Yacob",
    "location": "Colorado (Mountain)", // (optional)
    "bio": "The third Elder and who holds the record for most championship losses! He's been to the championship 4 times, having 3 losses and 1 tie (due to the man dying after Bo used banned magic). He is also the best advertiser in the league, having made countless commercials for the Elders, all being instant classics.",
    "photo": "/../managers/yacob.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "jax", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Kev", // Can be anything (usually your rival's name)
      link: 1, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/kev.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 7523, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Step 1: Make it to the championship. Step 2: (TBD).",
    "tradingScale": 7, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Chris
    "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "204301500732678144",
    "name": "Chris",
    "location": "Kansas City (Central)", // (optional)
    "bio": "The nicest person a person can be, and the only back to back championship in the league. This is super annoying to everyone, because you can't even be angry at a guy this nice. Famous for his double tight end strategy that Colt (the guy who is 0-10 vs him) has tried to get removed from the league. 1 of only 3 managers who have made the playoffs all 6 years.",
    "photo": "/../managers/chris.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Colt", // Can be anything (usually your rival's name)
      link: 4, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/colt.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4046, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "KC Chiefs and tight ends forever!",
    "tradingScale": 1, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Colt
    "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "204489680073261056",
    "name": "Colt",
    "location": "Georgia (Eastern)", // (optional)
    "bio": "The creator of the hit series, 'Get Grilled!', due to being voted to finish 9th in the 2023 season. He proved everyone WRONG after actually finishing 8th! He was also a part of the best trade example to negate all arguments for vetoing trades, and won the first championship because of it! (vs the guy he traded... it was Yacob).",
    "photo": "/../managers/colt.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "hou", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Chris", // Can be anything (usually your rival's name)
      link: 3, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/chris.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 3198, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Championships are old news, I'm all about the grill.",
    "tradingScale": 6, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Aaron
    "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "205583362516066304",
    "name": "Aaron",
    "location": "Hometown (Central)", // (optional)
    "bio": "Looking at his team you would consider him a lock for the playoffs, but he likes to keep it interesting by fighting for one of the last spots every year (a real Showman). Once in the playoffs, he is the owner of the super fun curse to lose in round 1 of the playoffs every time.  Needs to secure that round 1 bye so he can try out another round of playoffs.",
    "photo": "/../managers/aaron.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Chase", // Can be anything (usually your rival's name)
      link: 8, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/chase.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 5846, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Good team on paper, wait the paper lied.",
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Alex
    "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "301862141642674176",
    "name": "Alex",
    "location": "Georgia (Eastern)", // (optional)
    "bio": "Alex has yet to make the playoffs, but he's one of the scariest teams to face. Proud creator of the Alexpocalypse, a storm that WILL hit at some point in the season at an unkown time vs an unfortunate soul. If he were to make the playoffs, nobody would want to be on that side of the bracket.",
    "photo": "/../managers/alex.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "jax", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Alex", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/alex.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 293, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "UCF", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Vibes over wins.",
    "tradingScale": 6, // 1 - 10
    "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Mierr
    "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "206162149335105536",
    "name": "Mierr",
    "location": "Texas (Central)...For now...", // (optional)
    "bio": "An OG manager that ran his team into the ground, quit, and then came back to a better team. His wins coincide directly with Josh Allen's good games (Unfortunately for the rest of the league, that's a lot of games). Makes some questionable decisions, but does so confidently!",
    "photo": "/../managers/mierr.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Commitment", // Can be anything (usually your rival's name)
      link: 7, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/commitment.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "When the going gets tough, the tough quit and come back later.",
    "tradingScale": 7, // 1 - 10
    "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Chase
    "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "444932831391510528",
    "name": "Chase",
    "location": "Hometown (Central)", // (optional)
    "bio": "Took over the 2nd worst team in year 2, and made it the 2nd best team. After taking 2 years to rebuild the garbage left to him, he has come in 2nd in 2 out of 3 years. (Is this dude obsessed with the number 2 or something?) He is also the only manager, other than Yacob, to lose in a championship game! Thanks for keeping that between the <b><u>2</u></b> of you!",
    "photo": "/../managers/chase.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "tb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Aaron", // Can be anything (usually your rival's name)
      link: 5, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/aaron.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 2216, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "One man's trash is another man's silver medals.",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Garrett
    "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "474402098453147648",
    "name": "Garrett",
    "location": "Hometown (Central)", // (optional)
    "bio": "Took over Mierr's team when he quit and is following Chase's blueprint to get his team to the top. He's already created a juggernaut of a defense where other teams can't seem to score anything when they play him. Chase, Yacob, Aaron, and Alex all have their lowest average scores against Garrett. He looks forward to embarrassing Mierr with the team Mierr destroyed.",
    "photo": "/../managers/garrett.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "lac", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Median", // Can be anything (usually your rival's name)
      link: 9, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/median.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "I was told defenses would win championships.",
    "tradingScale": 4, // 1 - 10
    "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Ethan
    "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "203716054180958208",
    "name": "Ethan",
    "location": null, // (optional)
    "bio": "Joined the league year 1, then had a falling out with Rainbow Six Seige and quit everything.",
    "photo": "/../managers/ethan.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rage", // Can be anything (usually your rival's name)
      link: 10, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/rage.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 988, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Alt+F4.",
    "tradingScale": 2, // 1 - 10
    "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  ]