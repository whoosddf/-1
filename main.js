function summonUnit(type) {
  const unit = unitData[type];
  const playerSide = document.getElementById("player-side");

  const unitDiv = document.createElement("div");
  unitDiv.className = "unit";
  unitDiv.innerText = `${unit.name}（${unit.skill}）`;
  playerSide.appendChild(unitDiv);

  console.log(`${unit.name} が出撃！`);
}

