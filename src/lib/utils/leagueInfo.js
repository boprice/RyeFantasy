/*   STEP 1   */
export const leagueID = 1049732316240723968n; // your league ID
export const leagueName = "Respect Your Elders"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to RYE Headquarters!</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  { //Bo
    "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "31152355404038144",
    "name": "Bo",
    "location": "Florida", // (optional)
    "bio": "The absolute best team at losing in the Semi-Finals. Nobody does it better.",
    "photo": "/../managers/bo.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Semifinals", // Can be anything (usually your rival's name)
      link: 1, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/semifinals.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1479, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Trade and trade and also trade.",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Chris
    "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "204301500732678144",
    "name": "Chris",
    "location": "KC", // (optional)
    "bio": "Hardest person to hate and takes advantage of it by annoyingly winning back to back championships.",
    "photo": "/../managers/chris.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Colt", // Can be anything (usually your rival's name)
      link: 3, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/colt.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1466, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "KC Chiefs and tight ends forever!",
    "tradingScale": 1, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Colt
    "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "204489680073261056",
    "name": "Colt",
    "location": "Georgia", // (optional)
    "bio": "Created the best trade example to negate all arguments for vetoing trades. Won a championship because of it.",
    "photo": "/../managers/colt.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Chris", // Can be anything (usually your rival's name)
      link: 2, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/chris.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Who even needs 2 championships?",
    "tradingScale": 6, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Kev
    "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "204490274854932480",
    "name": "Kev",
    "location": "Colorado", // (optional)
    "bio": "Fellow Elder that knows how to lineup MVP seasons all at once.",
    "photo": "/../managers/kev.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Yacob", // Can be anything (usually your rival's name)
      link: 5, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/yacob.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4034, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Simply have 3 MVPs, duh.",
    "tradingScale": 9, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Yacob
    "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "204748714156228608",
    "name": "Yacob",
    "location": "Colorado", // (optional)
    "bio": "Fellow Elder who holds the record for most championship losses.",
    "photo": "/../managers/yacob.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "jax", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Kev", // Can be anything (usually your rival's name)
      link: 4, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/kev.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 7523, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Get to the championship game, unsure after that.",
    "tradingScale": 7, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Aaron
    "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "205583362516066304",
    "name": "Aaron",
    "location": "Hometown", // (optional)
    "bio": "The only manager that can have one of the scariest team and consistently fight for the last playoff spot.",
    "photo": "/../managers/aaron.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Chase", // Can be anything (usually your rival's name)
      link: 9, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/chase.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Good team on paper, wait the paper lied.",
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Phone", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Mierr
    "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "206162149335105536",
    "name": "Mierr",
    "location": "Texas...For now...", // (optional)
    "bio": "An OG manager that ran his team into the ground, quit, and then came back to a better team.",
    "photo": "/../managers/mierr.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Commitment", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/commitment.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "When the going gets tough, the tough quit and come back.",
    "tradingScale": 7, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Alex
    "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "301862141642674176",
    "name": "Alex",
    "location": "Georgia", // (optional)
    "bio": "Took Blake Bortles round 1 in the startup draft. That's all you need to know.",
    "photo": "/../managers/alex.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "jax", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: null, // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1979, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "UCF", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Vibes over wins.",
    "tradingScale": 6, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Chase
    "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "444932831391510528",
    "name": "Chase",
    "location": "Hometown", // (optional)
    "bio": "Took over the 2nd worst team and made it the 2nd best team.",
    "photo": "/../managers/chase.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "tb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Aaron", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/aaron.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "One man's trash is another man's siler medals.",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  { //Garrett
    "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID" : "474402098453147648",
    "name": "Garrett",
    "location": "Hometown", // (optional)
    "bio": "Took over Mierr's team when he quit and looks to be catching Mierr's new team in no time.",
    "photo": "/../managers/garrett.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "lac", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Median", // Can be anything (usually your rival's name)
      link: 10, // manager array number within this array, or null to link back to all managers page
      image: "/../managers/median.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "If I score low, the other team scores lower.",
    "tradingScale": 3, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
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
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rage", // Can be anything (usually your rival's name)
      link: 11, // manager array number within this array, or null to link back to all managers page
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
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
