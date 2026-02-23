LoadEverything().then(() => {
  
  Start = async () => {
    
  };

  Update = async (event) => {
    const score = event.data.score[window.scoreboardNumber];
    const team1 = score.team["1"];
    const team2 = score.team["2"];
    const teams = [team1, team2];
    
    for (const [t, team] of teams.entries()) {
      
      const player = team.player["1"];
      
      if (player) {
        // TODO: Insert code here
        
        // For team/player info:
        // SetInnerHtml($(`.p${t + 1}`), );
        
        // For tournament info:
        // SetInnerHtml($(""), );
      }
      
      if (team.color) {
        document.querySelector(":root").style.setProperty(`--p${t + 1}-score-bg-color`, team.color);
      }
      
    }
  };
});
