LoadEverything().then(() => {

  Start = async () => {
  };

  Update = async (event) => {
    let data = event.data;

    for (const [t, team] of [
      data.score[window.scoreboardNumber].team["1"],
      data.score[window.scoreboardNumber].team["2"],
    ].entries()) {
      for (const [p, player] of [team.player["1"]].entries()) {
        if (player) {
          // Insert code here
        }
        if (team.color) {
          document
            .querySelector(":root")
            .style.setProperty(`--p${t + 1}-score-bg-color`, team.color);
        }
      }
    }
  };
});
