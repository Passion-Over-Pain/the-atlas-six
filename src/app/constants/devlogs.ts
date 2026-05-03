export interface DevLog {
  id: string;
  title: string;
  description: string;
  tags: string[];
  codeSnippet?: string;
  source?: string;
}

export const DEVLOGS: DevLog[] = [
  {
    id: "architecture",
    title: "Electron.js Desktop App",
    description:
      "A native desktop app built for every platform. I handled the file systems, window styling, and rendering logic from the ground up.",
    tags: ["ELECTRON", "NODE.JS", "IPC"],
    source: "main.js",
    codeSnippet: `function createWindow() {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    }
  });
  mainWindow.loadFile("src/index.html");
}`,
  },
  {
    id: "narrative",
    title: "Recursive JSON Story Engine",
    description:
      "A custom story engine using JSON trees for dialogue and quests. It handles all the branching paths and game choices using raw JavaScript.",
    tags: ["JSON", "RECURSION", "EVENT FLAGS"],
    source: "story.json",
    codeSnippet: `{
  "branchId": "branch319",
  "text": "You move toward the hall, but a shout stops you."
},
{
  "branchId": "branch320",
  "speaker": "???",
  "text": "Stop right there! Nobody breaks the law!"
},`,
  },
  {
    id: "persistence",
    title: "Modular Save System",
    source: "storage.js",
    description:
      "Smart save slots that track your progress. It records your choices, items, and character stats across hundreds of different variables.",
    tags: ["JSON.STRINGIFY", "FS.WRITEFILE", "STATE DIFF"],
    codeSnippet: `function saveGameToFile(slotIndex, saveData) {
  const savePath = path.join(app.getPath("userData"), "saves/save.json");
  
  if (!fs.existsSync(saveDir)) fs.mkdirSync(saveDir);

  fs.writeFileSync(savePath, JSON.stringify(saveData, null, 2));
  return savePath;
}`,
  },
  {
    id: "combat",
    title: "Turn based battle System",
    source: "battle.js",
    description:
      "A custom turn-based system with AP and card mechanics. Cards are defined in JSON and drawn to the screen using a state machine.",
    tags: ["STATE MACHINE", "CANVAS API", "QUEUES"],
    codeSnippet: `async function finalizeAction(user, action, card, targets) {
  const performed = action.perform(user, targets);
  cardHand.resumePlayCycle(card, performed);
  
  if (performed) {
    await sleep(3000);
    endPlayerTurn();
  }
}`,
  },
  {
    id: "events",
    title: "Event Architecture",
    description:
      "An event system that lets different parts of the game talk to each other. It keeps the code clean and makes every feature easy to test.",
    tags: ["EVENTEMITTER", "PUB/SUB", "DECOUPLED"],
    source: "function.js",
    codeSnippet: `switch (branch.event) {
  case "autosave": gameAutoSave(); break;
  case "addToInventory": addToInventory(branch); break;
  case "setFlag": setFlags(branch); break;
  case "displayModal": handleDisplayModal(branch); break;
}`,
  },
  {
    id: "rendering",
    title: "HTML/CSS Game UI",
    description:
      "Every menu, inventory screen, and dialogue box is built with HTML and CSS. Yup, I know - good life decisions.",
    tags: ["HTML5", "CSS ANIMATIONS", "VANILLA JS"],
    source: "skills.cs",
    codeSnippet: `.skills {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}`,
  },
];
