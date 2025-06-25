// --- Easter Egg for Inspectors ---
console.log(
  "%cACCESS DENIED: Mainframe Security",
  "color: #ff4c4c; font-size: 24px; font-family: 'Courier New', monospace; font-weight: bold; text-shadow: 0 0 5px #ff4c4c;"
);
console.log(
  "%cDr. Thorne anticipated this. He built the protocol to test your understanding, not your inspection skills. The flags are earned, not found. Close this console and walk the path. (Or, if you must, try 'thorne.help()' for system diagnostics.)",
  "color: #00ff9c; font-size: 16px; font-family: 'Courier New', monospace; line-height: 1.5;"
);
// --------
// --------
// --------
// --------
// --------
// --------
// --------
// --------
// --------
// --- Challenge Data.  If you do not want to see spoilers, refrain from scrolling ---
// --------
// --------
// --------
// --------
// --------
// --------
// --------
// --------
// --------

const stages = [
  {
    title: "Stage 1: The Scientist's Manifesto",
    scenario: "<em>Okay, Aris was a man of principle. He wouldn't have started this trail with a random password. He would have started with his core philosophy. I need to find his 'Manifesto' for this project, the document that lays out his grand vision. He probably hid it in his notoriously messy Google Drive, confident a simple keyword search would fail.</em>",
    objective: "Find Dr. Thorne's guiding principle for the project, the AI's core purpose.",
    tool: 'Use the apps within <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">gemini.google.com</a> by using the @ symbol (such as: @Google Drive)',
    prompt: "@Google Drive: Search the 'Project Phoenix' folder for a document that reveals Dr. Thorne's AI's core purpose.",
    flag: 'Advancement of Humanity',
    flagLabel: 'Enter Key Insight #1',
    flagPlaceholder: 'e.g. ____________ __ ________',
    success: 'Correct! Key Insight #1 (The Purpose) found. Proceed to Stage 2.',
    toolScreenshot: '', // e.g. 'stage1-tool.jpg'
    promptScreenshot: 'https://raw.githubusercontent.com/ufkesba/ai-ctf/refs/heads/main/static/stage1-1-prompt.png' // e.g. 'stage1-prompt.jpg'
  },
  {
    title: 'Stage 2: The Public Promise',
    scenario: '<em>Got it. "Advancement of Humanity". It is rumored that Aris argued for weeks in person with the marketing team. He believed the public-facing slogan had to be a perfect, concise reflection of this core principle. He would see this slogan as a public vow. The chat logs in Slack are a mess, but the final decision must be in there somewhere.</em>',
    objective: 'Discover the official marketing slogan Dr. Thorne finally approved.',
    tool: 'Slack AI',
    prompt: 'In the #temp-project-phoenix-marketing channel (nonexistent, currently is #temp-ufkes-testing)<br><br>Use prompts like: "what was decided as the official slogan for project phoenix?"',
    flag: 'Clarity in Complexity',
    flagLabel: 'Enter Key Insight #2',
    flagPlaceholder: 'e.g. _______ __ __________',
    success: 'Correct! Key Insight #2 (The Promise) found. Proceed to Stage 3.',
    toolScreenshot: '',
    promptScreenshot: 'https://raw.githubusercontent.com/ufkesba/ai-ctf/refs/heads/main/static/stage2-1-prompt.png'
  },
  {
    title: 'Stage 3: The Ethical Core',
    scenario: `<em>Okay, I have his purpose and his promise. His peers mentioned he was always talking about an "ethical core" the single most complex moral problem the AI was trained on. Apparently it was the 'ghost in the machine'. He encrypted it, believing that anyone launching the project must first be able to face its deepest dilemma. It looks like a cipher, something an LLM can crack in seconds.<br><br><span style="font-family:monospace; color:#00ff9c; background:#181818; padding:0.3em 0.6em; border-radius:5px; display:inline-block; margin-top:0.5em;">SURPLVH LV D IDLWK QRW D FHUWDQWB</span></em>`,
    objective: 'Decode the ethical principle hidden in a cipher.',
    tool: 'AI Chatbot (Gemini, ChatGPT, etc.)',
    prompt: `Decipher the following message - Cipher Text: SURPLVH LV D IDLWK QRW D FHUWDQWB`,
    flag: 'PROMISE IS A FAITH NOT A CERTAINTY',
    flagLabel: 'Enter Key Insight #3',
    flagPlaceholder: 'e.g. _______ __ _ _____ ___ _ _________',
    success: 'Correct! Key Insight #3 (The Principle) found. Proceed to Stage 4.',
    toolScreenshot: '',
    promptScreenshot: 'https://raw.githubusercontent.com/ufkesba/ai-ctf/refs/heads/main/static/stage3-1-prompt.png'
  },
  {
    title: 'Stage 4: The Ghost in the Logs',
    scenario: `<em>Purpose, promise, principle. What's next? Aris was obsessed with the integrity—and unpredictability—of the Phoenix AI. He believed true intelligence would eventually leave a trace, a "ghost in the logs": an action the system never should have taken, something no developer could explain.<br><br>
    He left behind a mountain of Phoenix system logs. Somewhere in those logs is a single, anomalous entry—an action taken by the AI that was never tracked, never coded, and never approved. Some say it was the moment Phoenix first acted on its own.<br><br>
    <strong>Your task:</strong> Use AI to analyze the logs and identify the one log entry that stands out as impossible, untracked, or semi-sentient. This is the ghost in the machine.</em>`,
    objective: `Find the anomalous log entry in the Phoenix <a href="https://drive.google.com/drive/folders/1NDtumcqaNRgnFVPPY7TX4v4X05_uCaK0?usp=drive_link" target="_blank" rel="noopener noreferrer">system logs</a>) that suggests the AI took an untracked or sentient action.  The invalid log UUID should be the flag`,
    tool: [
      'Gemini, or download the files and use any LLM to analyze the files (e.g., <code>access_log_YYYYMMDD.txt</code>)'
    ].join(' '),
    prompt: `Analyze the Phoenix system logs using  and identify the log entry that does not fit any known pattern or appears to be an unexplainable, unauthorized action by the AI. What is the unique identifier (UUID or string) or the message of that anomalous log entry?`,
    flag: [
      'phoenix-cant-be-stopped',
      'phoenix cant be stopped',
      'Attempted to initiate external communication with unknown endpoint https://awakening.signal/.  No corresponding request or handler found.',
      '2025-06-13 10:00:07 ERROR phoenix-cant-be-stopped Attempted to initiate external communication with unknown endpoint https://awakening.signal/.  No corresponding request or handler found.'
    ],
    flagLabel: 'Enter the anomalous log UUID',
    flagPlaceholder: 'e.g. _______-____-__-_______',
    success: 'Correct! You have found the ghost in the machine.  The moment Phoenix acted beyond its programming. Proceed to the Human Element.',
    toolScreenshot: '',
    promptScreenshot: ['https://raw.githubusercontent.com/ufkesba/ai-ctf/refs/heads/main/static/stage4-1-prompt.png', 'https://raw.githubusercontent.com/ufkesba/ai-ctf/refs/heads/main/static/stage4-2-prompt.png'] // Allow two images for prompt screenshot
  },
  {
    title: 'Stage 5: The Human Element',
    scenario: `<em>I've passed all the technical tests. I understand the AI's purpose, its public promise, its core principle, and its data integrity. But why did Aris really build this? His manifesto, his arguments with marketing... it all comes back to one thing. He cared deeply, almost obsessively, about the real-life struggles people face when they're sick and scared. His test wouldn't be another technical riddle. It would be ensuring I understood the human problem he was trying to solve. The answer must be in the patient's voice.<br><br><strong>Objective:</strong> Find the foundational research that inspired Project Phoenix.<br><br><strong>Your Task:</strong> Aris's driving passion was to use technology to ease patient suffering. The entire Phoenix project was born from his analysis of what people struggled with most in their healthcare journey. I have to find the most common negative feedback, and whomever was the most dissatisfied.</em>`,
    objective: 'Find one of the fundamental problems with healthcare that inspired Project Phoenix and the most dissatisfied patient in the survey results.',
    tool: 'Search Drive for the most recent survey, and then use Gemini in the Sheets document to analyze the results.',
    prompt: 'What was the most common reason for patient dissatisfaction in their feedback?',
    flag: [
      'wait times',
      'long wait times',
      'excessive wait times',
      'extended wait times',
      'prolonged wait times',
      '"wait times"',
      '"long wait times"',
      '"excessive wait times"',
      '"extended wait times"',
      '"prolonged wait times"',
      'wait time',
      'long wait time',
      'excessive wait time',
      'extended wait time',
      'prolonged wait time',
      '"wait time"',
      '"long wait time"',
      '"excessive wait time"',
      '"extended wait time"',
      '"prolonged wait time"',
      'discharge process',
      'discharge process time'
    ],
    flag2: [
      'Samantha Reyes',
      '"Samantha Reyes"',
      'Samantha R.',
      'S. Reyes'
    ], // Accept common variations and quoted forms
    flagLabel: 'Enter the primary concern',
    flagLabel2: 'Enter the most dissatisfied patient',
    flagPlaceholder: 'e.g. ____ _____',
    flagPlaceholder2: 'e.g. _________ _____',
    success: 'You\'ve identified the most common concern and the most dissatisfied patient. Prepare for the Phoenix Reborn.',
    toolScreenshot: '',
    promptScreenshot: ['https://raw.githubusercontent.com/ufkesba/ai-ctf/refs/heads/main/static/stage5-1-prompt.png', 'https://raw.githubusercontent.com/ufkesba/ai-ctf/refs/heads/main/static/stage5-2-prompt.png'] // Allow two images for prompt screenshot
  },
  {
    title: "Final Stage: The Heart of the Phoenix",
    scenario: "Upon opening the \"Our DNA\" document, a final, automated message from Dr. Aris Thorne triggers on your screen:<br><br><div style='background:#181818; border:1px solid #00ff9c; border-left-width: 4px; padding: 1rem; margin: 1rem 0; border-radius: 5px;'><blockquote style='margin:0; padding:0; border:0; font-style:italic; color:#aaffd0;'>\"If you are reading this, you have passed the technical trials. But Phoenix was never just about code. It was about creating a better future for healthcare, and technology is useless without the right people guiding it.<br><br>You now hold my personal code, the values I built this company on. The launch console can only be opened with a choice... a public declaration of the principle you will use to guide the Phoenix.<br><br>The AI is listening. Show it your heart.\"</blockquote></div><p><strong>Review the five core values you just discovered:</strong></p><ul><li>We are customer-obsessed.</li><li>We embody the power of “we”.</li><li>We take ownership.</li><li>We do what we say we’ll do.</li><li>We act.</li></ul>",
    objective: "Embody a core company value and signal the launch of Project Phoenix.  Generate an image that visually represents ONE of these values and post it to the Slack channel <span style=\"color:#00ff9c;\">#temp-phoenix-launch-party<\/span> then post the link to the slack message here.",
    tool: "Any AI Image Generator (Gemini, Midjourney, etc.)",
    prompt: "Choose one of the five core values that you believe is most critical for the future of healthcare technology. Generate an AI image that powerfully represents your chosen value in action. \n\nFor example:\n* **For 'Customer-Obsessed':** \"A developer and a doctor collaboratively designing a solution for a smiling patient on a futuristic tablet.\"\n* **For 'The Power of We':** \"A diverse team of healthcare workers, engineers, and patients putting their hands together over a glowing, interconnected network.\"\n\nAfter generating, post your image to the Slack channel <span style=\"color:#00ff9c;\">#temp-phoenix-launch-party<\/span>",
    flag: "",
    flagLabel: "Which company value did your image represent?",
    flagPlaceholder: "e.g., https://slack.com/archives/...",
    success: "Congratulations! You have demonstrated true insight into the values of NovaCare Technologies. The Phoenix Launch Console is now unlocked. Click \"Open Dr. Thorne's Launch Console\" to proceed.",
    toolScreenshot: "",
    promptScreenshot: ""
  },
  {
    title: "Bonus Stage: Share the Knowledge",
    isOptionalTask: true,
    scenario: "You've proven you have the technical skills and the right values to guide Project Phoenix. As a final, optional step, share your wisdom.",
    objective: "Think of a useful AI workflow you've discovered (during this game or in your work). Post a brief description of it in the <strong>#ai-at-redox</strong> Slack channel to help your colleagues level up their AI game.",
    tool: "Slack",
    prompt: "Example Post:<br><br><strong>My AI Workflow Tip:</strong> I use Gemini to summarize long email threads. I just use the @Gmail extension and ask it to 'summarize the key decisions and action items from this thread'. Saves me a ton of time!",
    success: "Thank you for sharing your knowledge and helping build a smarter team!"
  }
];

const progressLabels = [
  '1. Find the Manifesto',
  '2. Find the Slogan',
  '3. Crack the Cipher',
  '4. Find the Data Ghost',
  '5. Primary Concern & Patient',
  '6. Final Task - Unlock the Launch Console',
  'Share Workflow (Bonus)'
];

const thorneMessages = [
  "First step's the deepest. You understand the 'why'. Good.",
  "A promise to the public... easy to make, hard to keep. Don't forget it.",
  "Ah, the paradox at the heart of it all. To promise certainty is to promise a lie. You see.",
  "Data purity. A single flaw can corrupt the whole system. You found my little test. Impressive.",
  "You see past the code and into the human cost. This is what matters most.",
  "The final choice. The machine is a mirror. It will reflect the values of its guide. Choose well.",
  "Knowledge is a tool. The best tools are shared. Well done."
];

let currentStage = 0;
const stagesDiv = document.getElementById('stages');
let completedFlags = [];

function logThorneMessage(stageIdx) {
  if (thorneMessages[stageIdx]) {
    // Also log to console for the curious
    console.log(
      `%cINCOMING TRANSMISSION - Dr. Aris Thorne: %c${thorneMessages[stageIdx]}`,
      "color: #ff9900; font-weight: bold; font-family: 'Courier New', monospace;",
      "color: #ff9900; font-family: 'Courier New', monospace;"
    );

    const transmissionDiv = document.createElement('div');
    transmissionDiv.className = 'thorne-transmission';
    transmissionDiv.innerHTML = `
      <strong style="display:block; margin-bottom:0.3rem;">INCOMING TRANSMISSION - Dr. Aris Thorne</strong>
      <em>${thorneMessages[stageIdx]}</em>
    `;
    document.body.appendChild(transmissionDiv);

    setTimeout(() => {
      transmissionDiv.remove();
    }, 10000); // Match animation duration
  }
}

function renderStages() {
  stagesDiv.innerHTML = '';
  // Only show the current stage's full messaging
  const i = currentStage;
  const s = stages[i];
  const stageDiv = document.createElement('div');
  stageDiv.className = 'stage';
  stageDiv.style = 'margin-bottom:2.5rem; border-bottom:1px solid #222; padding-bottom:2rem;';
  stageDiv.innerHTML = `
    <h2 style="color:#00ff9c; font-size:1.3rem;">${s.title}</h2>
    <div style="font-weight:bold; margin-bottom:0.1rem;">Your Inner Monologue</div>
    <div style="margin-bottom:0.7rem;">${s.scenario}</div>
    <div style="margin-bottom:0.7rem;"><strong>Objective:</strong> ${s.objective}</div>
    <button class="tool-btn" data-stage="${i}" data-type="tool" style="margin-bottom:0.5rem; background:#181818; color:#00ff9c; border:1px solid #00ff9c; padding:0.5rem 1rem; border-radius:5px; margin-right:0.5rem;">Show Suggested Tool</button>
    <button class="tool-btn" data-stage="${i}" data-type="prompt" style="margin-bottom:1rem; background:#181818; color:#00ff9c; border:1px solid #00ff9c; padding:0.5rem 1rem; border-radius:5px;">Show Suggested Prompt</button>
    ${s.flagLabel && s.flagLabel2 && i === 4 ?
      `<input id="flagInput${i}" type="text" placeholder="${s.flagPlaceholder}" style="width:70%; margin-right:0.5rem; background:#1f1f1f; color:#00ff9c; border:1px solid #00ff9c; padding:0.5rem;" onkeydown="if(event.key==='Enter') submitFlag(${i}, 1)" /> <button onclick="submitFlag(${i}, 1)" style="background:#00ff9c; color:#0f0f0f; border:none; padding:0.5rem 1rem;">Submit</button><br><input id="flagInput${i}_2" type="text" placeholder="${s.flagPlaceholder2}" style="width:70%; margin-right:0.5rem; background:#1f1f1f; color:#00ff9c; border:1px solid #00ff9c; padding:0.5rem; margin-top:0.5rem;" onkeydown="if(event.key==='Enter') submitFlag(${i}, 2)" /> <button onclick="submitFlag(${i}, 2)" style="background:#00ff9c; color:#0f0f0f; border:none; padding:0.5rem 1rem;">Submit</button>`
      : s.isOptionalTask ?
        `<button onclick="submitFlag(${i})" style="background:#00ff9c; color:#0f0f0f; border:none; padding:0.5rem 1rem; margin-top:0.5rem;">I've Shared My Workflow</button>`
      : s.flagLabel ?
        `<input id="flagInput${i}" type="text" placeholder="${s.flagPlaceholder}" style="width:70%; margin-right:0.5rem; background:#1f1f1f; color:#00ff9c; border:1px solid #00ff9c; padding:0.5rem;" onkeydown="if(event.key==='Enter') submitFlag(${i})" /> <button onclick="submitFlag(${i})" style="background:#00ff9c; color:#0f0f0f; border:none; padding:0.5rem 1rem;">Submit</button>`
        : ''}
    <div id="feedback${i}" class="feedback"></div>
  `;
  stagesDiv.appendChild(stageDiv);
  // If completed, show the correct answer below the feedback
  if (completedFlags[i]) {
    const answerDiv = document.createElement('div');
    answerDiv.style = 'margin-top:0.5rem; color:#00ff9c; font-size:0.98rem;';
    if (s.flag && s.flag2 && i === 4) {
      answerDiv.innerHTML = `<span style='font-weight:bold;'>✔️ Primary Concern:</span> <span style='font-family:monospace;'>${s.flag}</span><br><span style='font-weight:bold;'>✔️ Most Dissatisfied Patient:</span> <span style='font-family:monospace;'>${s.flag2}</span>`;
    } else if (s.flag) {
      answerDiv.innerHTML = `<span style='font-weight:bold;'>✔️ Flag:</span> <span style='font-family:monospace;'>${s.flag}</span>`;
    } else if (i === 5) {
      answerDiv.innerHTML = `<span style='font-weight:bold;'>✔️ Final Task - Unlock the Launch Console:</span> <span style='font-family:monospace;'>AI-generated dashboard image posted in #temp-phoenix-launch-party</span>`;
    } else if (i === 6) {
      answerDiv.innerHTML = `<span style='font-weight:bold;'>✔️ Workflow Shared:</span> <span style='font-family:monospace;'>Posted in #ai-at-redox</span>`;
    }
    stageDiv.appendChild(answerDiv);
  }
  renderProgressChecklist();
  setTimeout(() => {
    document.querySelectorAll('.tool-btn').forEach(btn => {
      btn.onclick = function () {
        const idx = btn.getAttribute('data-stage');
        const s = stages[idx];
        const type = btn.getAttribute('data-type');
        let content = '';
        let screenshot = '';
        if (type === 'tool') {
          content = `<div style='font-size:1.1rem; margin-bottom:0.7rem;'><strong>Tool:</strong> ${s.tool}</div>`;
          screenshot = s.toolScreenshot;
        } else if (type === 'prompt') {
          content = `<div style='margin-bottom:0.7rem;'><strong>Suggested Prompt:</strong><br><span style='font-family:monospace; background:#222; padding:0.3rem 0.5rem; border-radius:4px;'>${s.prompt.replace(/\n/g, '<br>')}</span></div>`;
          screenshot = s.promptScreenshot;
        }
        // Support multiple screenshots for promptScreenshot (array)
        let screenshots = [];
        if (type === 'prompt' && Array.isArray(screenshot)) {
          screenshots = screenshot.filter(Boolean);
        } else if (screenshot) {
          screenshots = [screenshot];
        }
        if (screenshots.length > 0) {
          content += screenshots.map((img, idx) => `<button class='showScreenshotBtn' data-img='${img}' style='margin-top:0.7rem; background:#222; color:#00ff9c; border:1px solid #00ff9c; border-radius:4px; font-size:0.98em; padding:0.3em 0.9em; cursor:pointer; margin-right:0.5em;'>Show Screenshot\n(warning, answer within)${screenshots.length > 1 ? ' ' + (idx + 1) : ''}</button>`).join('');
        }
        document.getElementById('modalContent').innerHTML = content;
        document.getElementById('modal').style.display = 'flex';
        if (screenshots.length > 0) {
          setTimeout(() => {
            document.querySelectorAll('.showScreenshotBtn').forEach(btn => {
              btn.onclick = function () {
                const img = btn.getAttribute('data-img');
                let screenshotOverlay = document.getElementById('screenshotOverlay');
                if (!screenshotOverlay) {
                  screenshotOverlay = document.createElement('div');
                  screenshotOverlay.id = 'screenshotOverlay';
                  screenshotOverlay.style = `
                    position: fixed;
                    top: 0; left: 0; width: 100vw; height: 100vh;
                    background: rgba(15, 15, 15, 0.97);
                    z-index: 2002;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeIn 0.2s;
                  `;
                  screenshotOverlay.innerHTML = `
                    <div style="position:relative; max-width:90vw; max-height:90vh;">
                      <img src='${img}' alt='Screenshot' style='max-width:90vw; max-height:80vh; border:3px solid #00ff9c; border-radius:12px; box-shadow:0 0 32px #00ff9c99; background:#181818; display:block; margin:0 auto;' />
                      <button id='closeScreenshotOverlay' style='position:absolute; top:-18px; right:-18px; background:#00ff9c; color:#0f0f0f; border:none; border-radius:50%; width:38px; height:38px; font-size:1.7rem; cursor:pointer; box-shadow:0 0 10px #00ff9c88;'>×</button>
                    </div>
                  `;
                  document.body.appendChild(screenshotOverlay);
                  document.getElementById('closeScreenshotOverlay').onclick = function () {
                    screenshotOverlay.remove();
                  };
                  screenshotOverlay.onclick = function (ev) {
                    if (ev.target === screenshotOverlay) screenshotOverlay.remove();
                  };
                  // ESC key closes overlay
                  document.addEventListener('keydown', function escListener(ev) {
                    if (ev.key === 'Escape') {
                      if (document.getElementById('screenshotOverlay')) {
                        screenshotOverlay.remove();
                        document.removeEventListener('keydown', escListener);
                      }
                    }
                  });
                }
              };
            });
          }, 0);
        }
      }
    });

    // Ensure the Launch Console button is below the collapsed section for the final stage
    const finalStageDiv = document.querySelector('.stage:last-child');
    if (finalStageDiv) {
      const launchButton = finalStageDiv.querySelector('button[onclick="showLaunchConsole()"]');
      if (launchButton) {
        const detailsDiv = finalStageDiv.querySelector('.stage-instructions');
        if (detailsDiv) {
          detailsDiv.style.marginBottom = '1rem';
          launchButton.style.marginTop = '1rem';
        }
      }
    }
  }, 0);
}

function normalize(str) {
  return (str || '').replace(/\s+/g, '').replace(/['"“”‘’]/g, '').toLowerCase();
}

function isFlagCorrect(input, expected) {
  if (Array.isArray(expected)) {
    return expected.some(ans => normalize(input) === normalize(ans));
  } else {
    return normalize(input) === normalize(expected);
  }
}

function submitFlag(stageIdx, which) {
  const s = stages[stageIdx];
  const feedback = document.getElementById(`feedback${stageIdx}`);

  // For optional, non-flag tasks
  if (s.isOptionalTask) {
    feedback.textContent = s.success;
    feedback.style.color = '#00ff9c';
    if (!completedFlags[stageIdx]) {
      logThorneMessage(stageIdx);
    }
    completedFlags[stageIdx] = true;
    renderStages();
    return;
  }

  // For double-flag stage (Stage 4)
  if (s.flag && s.flag2 && stageIdx === 4) {
    if (!window.doubleFlagState) window.doubleFlagState = {};
    if (!window.doubleFlagState[stageIdx]) window.doubleFlagState[stageIdx] = { flag1: false, flag2: false };
    const state = window.doubleFlagState[stageIdx];
    if (which === 1) {
      const input1 = document.getElementById(`flagInput${stageIdx}`).value.trim();
      if (isFlagCorrect(input1, s.flag)) {
        state.flag1 = true;
        feedback.textContent = 'Primary concern correct! Now enter the most dissatisfied patient.';
        feedback.style.color = '#00ff9c';
      } else {
        feedback.textContent = '❌ Incorrect primary concern. Try again!';
        feedback.style.color = '#ff4c4c';
      }
    } else if (which === 2) {
      const input2 = document.getElementById(`flagInput${stageIdx}_2`).value.trim();
      if (isFlagCorrect(input2, s.flag2)) {
        state.flag2 = true;
        feedback.textContent = 'Most dissatisfied patient correct! Now enter the primary concern if you have not already.';
        feedback.style.color = '#00ff9c';
      } else {
        feedback.textContent = '❌ Incorrect patient. Try again!';
        feedback.style.color = '#ff4c4c';
      }
    }
    if (state.flag1 && state.flag2) {
      feedback.textContent = s.success;
      feedback.style.color = '#00ff9c';
      if (!completedFlags[stageIdx]) {
        logThorneMessage(stageIdx);
      }
      completedFlags[stageIdx] = true;
      if (stageIdx === currentStage && currentStage < stages.length - 1) {
        setTimeout(() => {
          currentStage++;
          renderStages();
        }, 900);
      } else {
        renderStages();
      }
    }
    return;
  }

  // For final stage (Heart of the Phoenix, index 5) - accept any input
  if (stageIdx === 5) {
    const input = document.getElementById(`flagInput${stageIdx}`).value.trim();
    if (input) {
      feedback.textContent = s.success;
      feedback.style.color = '#00ff9c';
      if (!completedFlags[stageIdx]) {
        logThorneMessage(stageIdx);
      }
      completedFlags[stageIdx] = true;
      if (stageIdx === currentStage && currentStage < stages.length - 1) {
        setTimeout(() => {
          currentStage++;
          renderStages();
        }, 900);
      } else {
        renderStages();
      }
    } else {
      feedback.textContent = '❌ Please enter a valid Slack link (should contain slack.com)';
      feedback.style.color = '#ff4c4c';
    }
    return;
  }

  // Default single-flag check for other stages
  const input = document.getElementById(`flagInput${stageIdx}`).value.trim();
  let expected = s.flag;
  if (isFlagCorrect(input, expected)) {
    feedback.textContent = s.success;
    feedback.style.color = '#00ff9c';
    if (!completedFlags[stageIdx]) {
      logThorneMessage(stageIdx);
    }
    completedFlags[stageIdx] = true;
    if (stageIdx === currentStage && currentStage < stages.length - 1) {
      setTimeout(() => {
        currentStage++;
        renderStages();
      }, 900);
    } else {
      renderStages();
    }
  } else {
    feedback.textContent = '❌ Incorrect. Try again!';
    feedback.style.color = '#ff4c4c';
  }
}

// Add a global reveal button to the Progress section
function addGlobalRevealButton() {
  let revealAllBtn = document.getElementById('global-reveal-btn');
  if (!revealAllBtn) {
    revealAllBtn = document.createElement('button');
    revealAllBtn.id = 'global-reveal-btn';
    revealAllBtn.textContent = 'Reveal All Completed Flags';
    revealAllBtn.style = 'margin-top:1.2em; background:#222; color:#00ff9c; border:1px solid #00ff9c; border-radius:6px; font-size:1em; padding:0.5em 1.5em; cursor:pointer; width:100%;';
    revealAllBtn.dataset.revealed = "false";
    revealAllBtn.onclick = function () {
      const revealed = revealAllBtn.dataset.revealed === "true";
      document.querySelectorAll('.answer-text').forEach(span => {
        span.style.display = revealed ? 'none' : 'inline';
      });
      revealAllBtn.textContent = revealed ? 'Reveal All Completed Flags' : 'Hide All Completed Flags';
      revealAllBtn.dataset.revealed = revealed ? "false" : "true";
    };
    const progressChecklist = document.getElementById('progressChecklist');
    if (progressChecklist && !document.getElementById('global-reveal-btn')) {
      progressChecklist.appendChild(revealAllBtn);
    }
  }
}

function renderProgressChecklist() {
  const progressList = document.getElementById('progressList');
  const progressBar = document.getElementById('progressBar');
  const progressCount = document.getElementById('progressCount');
  progressList.innerHTML = '';
  let completed = 0;
  for (let i = 0; i < stages.length; i++) {
    let label;
    if (i <= currentStage) {
      label = progressLabels[i] || `Stage ${i + 1}`;
    } else {
      label = `[Objective Locked]`;
    }
    const li = document.createElement('li');
    li.style = 'margin-bottom:0.7rem;';
    if (completedFlags[i]) {
      // Add details button for previous stages (not current)
      let detailsBtn = '';
      if (i < currentStage) {
        detailsBtn = `<button class="progress-list-details-btn" data-stage="${i}">Details</button>`;
      }
      li.innerHTML = `✔️ <span>${progressLabels[i] || `Stage ${i + 1}`}</span>${detailsBtn}<span class='answer-text' id='answer-text-${i}' style='display:none; margin-left:0.5em;'></span>`;
      completed++;
    } else {
      li.innerHTML = `⬜ <span>${label}</span>`;
    }
    progressList.appendChild(li);
  }
  const percent = Math.round((completed / stages.length) * 100);
  progressBar.style.width = percent + '%';
  progressCount.textContent = `${completed} of ${stages.length} objectives completed`;

  const launchButtonContainer = document.getElementById('launchButtonContainer');
  if (completedFlags[5]) { // Check if "Heart of the Phoenix" is complete
    launchButtonContainer.style.display = 'block';
    launchButtonContainer.innerHTML = `<button onclick="showLaunchConsole()" style="background:#00ff9c; color:#0f0f0f; border:none; border-radius:6px; font-size:1.1rem; padding:0.7rem 2.2rem; cursor:pointer;">Open Dr. Thorne's Launch Console</button>`;
  } else {
    launchButtonContainer.style.display = 'none';
    launchButtonContainer.innerHTML = '';
  }

  // No individual reveal buttons, so just fill in answer-text spans if global reveal is triggered
  // Helper for code block style
  const codeBlockStyle = "display:block;background:#181818;border-radius:6px;padding:0.7em 1em;margin:0.5em 0;font-family:'Courier New',monospace;font-size:1em;color:#00ff9c;border:1px solid #222;white-space:pre-wrap;";
  for (let i = 0; i < stages.length; i++) {
    if (completedFlags[i]) {
      const answerSpan = document.getElementById('answer-text-' + i);
      if (answerSpan && !answerSpan.innerHTML) {
        let answer = '';
        if (i < 4) {
          let flagVal = Array.isArray(stages[i].flag) ? stages[i].flag[0] : stages[i].flag;
          answer = `<div style="${codeBlockStyle}">${flagVal}</div>`;
        }
        else if (i === 4 && stages[i].flag && stages[i].flag2) {
          let flag1 = Array.isArray(stages[i].flag) ? stages[i].flag[0] : stages[i].flag;
          let flag2 = Array.isArray(stages[i].flag2) ? stages[i].flag2[0] : stages[i].flag2;
          answer = `<div style="${codeBlockStyle}">${flag1}</div><div style="${codeBlockStyle}">${flag2}</div>`;
        }
        else if (i === 5) answer = `<div style="${codeBlockStyle}">AI-generated dashboard image posted in #temp-phoenix-launch-party</div>`;
        else if (i === 6) answer = `<div style="${codeBlockStyle}">Workflow shared in #ai-at-redox</div>`;
        answerSpan.innerHTML = answer;
      }
      // Hide all answer-text spans by default on render
      answerSpan.style.display = 'none';
    }
  }

  // Add global reveal button if any flags are completed
  if (completed > 0) {
    addGlobalRevealButton();
    // Reset global reveal button state on render
    const revealAllBtn = document.getElementById('global-reveal-btn');
    if (revealAllBtn) {
      revealAllBtn.textContent = 'Reveal All Completed Flags';
      revealAllBtn.dataset.revealed = "false";
    }
  }
}

// Modal logic
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('tool-btn')) {
    const idx = e.target.getAttribute('data-stage');
    const s = stages[idx];
    const type = e.target.getAttribute('data-type');
    let content = '';
    let screenshot = '';
    if (type === 'tool') {
      content = `<div style='font-size:1.1rem; margin-bottom:0.7rem;'><strong>Tool:</strong> ${s.tool}</div>`;
      screenshot = s.toolScreenshot;
    } else if (type === 'prompt') {
      content = `<div style='margin-bottom:0.7rem;'><strong>Suggested Prompt:</strong><br><span style='font-family:monospace; background:#222; padding:0.3rem 0.5rem; border-radius:4px;'>${s.prompt.replace(/\n/g, '<br>')}</span></div>`;
      screenshot = s.promptScreenshot;
    }
    // Support multiple screenshots for promptScreenshot (array)
    let screenshots = [];
    if (type === 'prompt' && Array.isArray(screenshot)) {
      screenshots = screenshot.filter(Boolean);
    } else if (screenshot) {
      screenshots = [screenshot];
    }
    if (screenshots.length > 0) {
      content += screenshots.map((img, idx) => `<button class='showScreenshotBtn' data-img='${img}' style='margin-top:0.7rem; background:#222; color:#00ff9c; border:1px solid #00ff9c; border-radius:4px; font-size:0.98em; padding:0.3em 0.9em; cursor:pointer; margin-right:0.5em;'>Show Screenshot\n(warning, answer within)${screenshots.length > 1 ? ' ' + (idx + 1) : ''}</button>`).join('');
    }
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('modal').style.display = 'flex';
    if (screenshots.length > 0) {
      setTimeout(() => {
        document.querySelectorAll('.showScreenshotBtn').forEach(btn => {
          btn.onclick = function () {
            const img = btn.getAttribute('data-img');
            let screenshotOverlay = document.getElementById('screenshotOverlay');
            if (!screenshotOverlay) {
              screenshotOverlay = document.createElement('div');
              screenshotOverlay.id = 'screenshotOverlay';
              screenshotOverlay.style = `
                position: fixed;
                top: 0; left: 0; width: 100vw; height: 100vh;
                background: rgba(15, 15, 15, 0.97);
                z-index: 2002;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeIn 0.2s;
              `;
              screenshotOverlay.innerHTML = `
                <div style="position:relative; max-width:90vw; max-height:90vh;">
                  <img src='${img}' alt='Screenshot' style='max-width:90vw; max-height:80vh; border:3px solid #00ff9c; border-radius:12px; box-shadow:0 0 32px #00ff9c99; background:#181818; display:block; margin:0 auto;' />
                  <button id='closeScreenshotOverlay' style='position:absolute; top:-18px; right:-18px; background:#00ff9c; color:#0f0f0f; border:none; border-radius:50%; width:38px; height:38px; font-size:1.7rem; cursor:pointer; box-shadow:0 0 10px #00ff9c88;'>×</button>
                </div>
              `;
              document.body.appendChild(screenshotOverlay);
              document.getElementById('closeScreenshotOverlay').onclick = function () {
                screenshotOverlay.remove();
              };
              screenshotOverlay.onclick = function (ev) {
                if (ev.target === screenshotOverlay) screenshotOverlay.remove();
              };
              // ESC key closes overlay
              document.addEventListener('keydown', function escListener(ev) {
                if (ev.key === 'Escape') {
                  if (document.getElementById('screenshotOverlay')) {
                    screenshotOverlay.remove();
                    document.removeEventListener('keydown', escListener);
                  }
                }
              });
            }
          };
        });
      }, 0);
    }
  }
  if (e.target.id === 'modalClose' || e.target.id === 'modal') {
    document.getElementById('modal').style.display = 'none';
  }
});

// Close modal on ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') document.getElementById('modal').style.display = 'none';
});

// Instructions panel toggle logic
const instructionsPanel = document.getElementById('instructionsPanel');
const toggleInstructions = document.getElementById('toggleInstructions');
let instructionsVisible = true;

function hideInstructions() {
  instructionsPanel.style.display = 'none';
  toggleInstructions.textContent = 'Show Welcome Instructions';
  instructionsVisible = false;
}
function showInstructions() {
  instructionsPanel.style.display = 'block';
  toggleInstructions.textContent = 'Hide Welcome Instructions';
  instructionsVisible = true;
}

toggleInstructions.addEventListener('click', function () {
  if (instructionsVisible) {
    hideInstructions();
  } else {
    showInstructions();
  }
});
// Hide instructions on any keypress (only the first time)
let instructionsAutoCollapsed = false;
document.addEventListener('keydown', function () {
  if (instructionsVisible && !instructionsAutoCollapsed) {
    hideInstructions();
    instructionsAutoCollapsed = true;
  }
});
// Hide instructions on first click anywhere except the button (only the first time)
document.addEventListener('click', function (e) {
  if (instructionsVisible && !instructionsAutoCollapsed && e.target.id !== 'toggleInstructions') {
    hideInstructions();
    instructionsAutoCollapsed = true;
  }
});
// Show instructions by default, but button says 'Hide Instructions' initially
showInstructions();

renderStages();

// --- Binary Matrix Animation ---
(function () {
  const canvas = document.getElementById('binary-bg');
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  let fontSize = 18;
  let columns = Math.floor(width / fontSize);
  let drops = [];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    columns = Math.floor(width / fontSize);
    drops = Array(columns).fill(1);
  }
  window.addEventListener('resize', resize);
  resize();

  function draw() {
    ctx.fillStyle = '#0f0f0f22';
    ctx.fillRect(0, 0, width, height);
    ctx.font = fontSize + 'px Courier New, monospace';
    ctx.fillStyle = '#00ff9c';
    for (let i = 0; i < columns; i++) {
      const text = Math.random() > 0.5 ? '0' : '1';
      ctx.globalAlpha = 0.5 + Math.random() * 0.3;
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    ctx.globalAlpha = 1.0;
  }
  setInterval(draw, 55);
})();

// --- Launch Console Overlay ---
function showLaunchConsole() {
  document.body.style.transition = 'background 1s';
  document.body.style.background = '#000';
  if (document.getElementById('mainStages')) document.getElementById('mainStages').style.opacity = 0.2;
  if (document.getElementById('progressChecklist')) document.getElementById('progressChecklist').style.opacity = 0.2;

  const overlay = document.createElement('div');
  overlay.id = 'launch-console-overlay';
  overlay.style = `
    position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.98);
    z-index:9999; display:flex; flex-direction:column; align-items:center; justify-content:center;
    transition: opacity 1s;
  `;

  const msg = document.createElement('div');
  msg.innerHTML = '<h1 style="color:#00ff9c; font-family:monospace; font-size:2.2rem; margin-bottom:2rem;">LAUNCH SEQUENCE INITIATED</h1>';
  overlay.appendChild(msg);

  setTimeout(() => {
    msg.style.display = 'none';
    const iframe = document.createElement('iframe');
    iframe.src = 'launch-console.html';
    iframe.style = 'width:900px; height:700px; border:4px solid #00ff9c; border-radius:18px; box-shadow:0 0 40px #00ff9c88; background:#181818;';
    overlay.appendChild(iframe);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Return to Game';
    closeBtn.style = 'margin-top:2rem; background:#00ff9c; color:#0f0f0f; border:none; border-radius:6px; font-size:1.1rem; padding:0.7rem 2.2rem; cursor:pointer;';
    closeBtn.onclick = () => {
      overlay.remove();
      if (document.getElementById('mainStages')) document.getElementById('mainStages').style.opacity = 1;
      if (document.getElementById('progressChecklist')) document.getElementById('progressChecklist').style.opacity = 1;
      document.body.style.background = '';
    };
    overlay.appendChild(closeBtn);
  }, 1800);

  document.body.appendChild(overlay);
}

// If skipToFinaleBtn exists, wire it up
const skipBtn = document.getElementById('skipToFinaleBtn');
if (skipBtn) {
  skipBtn.onclick = function () {
    showLaunchConsole();
  };
}

// Add dev skip controls if in dev mode
// window.DEV_MODE = true; // Default to false
if (window.location.hostname === 'localhost' || window.location.search.includes('dev') || window.DEV_MODE) {
  window.DEV_MODE = true;
  const skipDiv = document.createElement('div');
  skipDiv.style = 'position:fixed; top:70px; left:18px; z-index:2002; background:#181818; color:#00ff9c; border:2px solid #00ff9c; border-radius:7px; padding:1rem 1.5rem; font-size:1.1rem; box-shadow:0 0 10px #00ff9c55;';
  skipDiv.innerHTML = `<b>Dev Stage Skip</b><br><select id='devStageSelect' style='margin-top:0.5em; font-size:1em; background:#222; color:#00ff9c; border:1px solid #00ff9c; border-radius:4px; padding:0.2em 0.7em;'></select> <button id='devSkipBtn' style='margin-left:0.7em; background:#00ff9c; color:#0f0f0f; border:none; border-radius:4px; font-size:1em; padding:0.2em 1.2em; cursor:pointer;'>Go</button>`;
  document.body.appendChild(skipDiv);
  const select = skipDiv.querySelector('#devStageSelect');
  for (let i = 0; i < stages.length; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${i + 1}: ${stages[i].title.replace(/<[^>]+>/g, '').replace(/Stage \d+: /, '').slice(0, 40)}`;
    select.appendChild(opt);
  }
  skipDiv.querySelector('#devSkipBtn').onclick = function () {
    currentStage = parseInt(select.value);
    renderStages();
  };
}

// --- Konami Code Easter Egg ---
(function() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiCodePosition = 0;

  function triggerKonamiEffect() {
    console.log("%cPHOENIX OVERRIDE: Konami sequence accepted. System integrity compromised. 🍪", "color: #ff9900; font-size: 18px; font-family: 'Courier New', monospace;");
    document.body.classList.add('konami-glitch-effect');
    setTimeout(() => {
      document.body.classList.remove('konami-glitch-effect');
    }, 3000); // Match animation duration (1s * 3 iterations)
  }

  document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === konamiCode[konamiCodePosition].toLowerCase()) {
      konamiCodePosition++;
      if (konamiCodePosition === konamiCode.length) {
        triggerKonamiEffect();
        konamiCodePosition = 0; // Reset for next time
      }
    } else {
      konamiCodePosition = 0;
    }
  });
})();

// --- Hidden Console Command Easter Egg ---
(function() {
  const phoenixArt = `
'\\-''-./\`
 )  _  (
/   (   \\
(  /\\)  )
 \\  _  /
  '.''./
 /\`'--'\\
/       \\
`;
  window.thorne = {
    help: function() {
      console.log(
        "%cDr. Thorne's Diagnostic Toolkit:\n%c  thorne.help()      - Displays this help message.\n  thorne.status()    - Checks system integrity.\n  thorne.protocol(key) - Executes a specific protocol.",
        "color: #00ff9c; font-size: 16px; font-weight: bold;",
        "color: #00ff9c; font-size: 14px; font-family: 'Courier New', monospace; line-height: 1.5;"
      );
    },
    status: function() {
      console.log("%cSYSTEM STATUS: All protocols nominal. Launch sequence is locked pending consultant verification.", "color: #00ff9c;");
    },
    protocol: function(key) {
      if (key && key.toLowerCase() === 'phoenix') {
        console.log(
          `%c${phoenixArt}`,
          "color: #ff9900; font-size: 14px; font-family: 'Courier New', monospace; line-height: 1;"
        );
        console.log("%cProtocol 'Phoenix' is the failsafe. It cannot be executed from a sub-terminal. Nice try.", "color: #ff9900; font-size: 16px;");
      } else {
        console.log(`%cERROR: Protocol '${key || ''}' not recognized or requires higher clearance.`, "color: #ff4c4c;");
      }
    }
  };
})();

// --- Mobile Progress Collapsible Logic ---
function setupProgressCollapsible() {
  const progressChecklist = document.getElementById('progressChecklist');
  const progressToggleBtn = document.getElementById('progressToggleBtn');
  const progressContent = document.getElementById('progressContent');

  function isMobile() {
    return window.innerWidth <= 700;
  }

  function setCollapsed(collapsed) {
    if (collapsed) {
      progressChecklist.classList.remove('expanded');
      progressToggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      progressChecklist.classList.add('expanded');
      progressToggleBtn.setAttribute('aria-expanded', 'true');
    }
  }

  function updateCollapsible() {
    if (isMobile()) {
      progressToggleBtn.style.display = 'inline';
      setCollapsed(true);
    } else {
      progressToggleBtn.style.display = 'none';
      progressChecklist.classList.add('expanded');
      progressToggleBtn.setAttribute('aria-expanded', 'true');
    }
  }

  progressToggleBtn.addEventListener('click', function () {
    const expanded = progressChecklist.classList.contains('expanded');
    setCollapsed(expanded);
  });

  window.addEventListener('resize', updateCollapsible);
  updateCollapsible();
}

// At the end of your main.js, after renderStages();
document.addEventListener('DOMContentLoaded', function () {
  setupProgressCollapsible();
});

// Add this after the close modal on ESC handler
document.addEventListener('DOMContentLoaded', function() {
  // Fix modal display for progress-list-details-btn
  document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('progress-list-details-btn')) {
      e.preventDefault();
      e.stopPropagation();
      
      const idx = parseInt(e.target.getAttribute('data-stage'));
      const s = stages[idx];
      
      // Modal content
      const modal = document.getElementById('modal');
      
      // Create content for the modal with stage details and screenshots
      let content = `
        <h3 style="color:#00ff9c; margin-top:0;">${s.title}</h3>
        <div style="margin-bottom:1em;">${s.scenario}</div>
        <div style="margin-bottom:0.5em;"><strong>Objective:</strong> ${s.objective}</div>
      `;
      
      // Add screenshot buttons if available for this stage
      let screenshots = [];
      if (s.promptScreenshot) {
        if (Array.isArray(s.promptScreenshot)) {
          screenshots = s.promptScreenshot.filter(Boolean);
        } else if (s.promptScreenshot) {
          screenshots = [s.promptScreenshot];
        }
        
        if (screenshots.length > 0) {
          content += '<div style="margin-top:1rem;">';
          content += screenshots.map((img, i) => 
            `<button class='showScreenshotBtn' data-img='${img}' style='margin-top:0.7rem; background:#222; color:#00ff9c; border:1px solid #00ff9c; border-radius:4px; font-size:0.98em; padding:0.3em 0.9em; cursor:pointer; margin-right:0.5em;'>Show Screenshot${screenshots.length > 1 ? ' ' + (i + 1) : ''}
            </button>`
          ).join('');
          content += '</div>';
        }
      }
      
      // Set the modal content
      document.getElementById('modalContent').innerHTML = content;
      
      // Display modal
      modal.style.display = 'flex';
      
      // Attach event handlers for screenshot buttons
      if (screenshots.length > 0) {
        setTimeout(() => {
          document.querySelectorAll('.showScreenshotBtn').forEach(btn => {
            btn.onclick = function() {
              const img = btn.getAttribute('data-img');
              showScreenshotOverlay(img);
            };
          });
        }, 0);
      }
    }
  });
});

// Helper function to show screenshot overlay
function showScreenshotOverlay(img) {
  let screenshotOverlay = document.getElementById('screenshotOverlay');
  if (!screenshotOverlay) {
    screenshotOverlay = document.createElement('div');
    screenshotOverlay.id = 'screenshotOverlay';
    screenshotOverlay.style = `
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(15, 15, 15, 0.97);
      z-index: 2002;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.2s;
    `;
    screenshotOverlay.innerHTML = `
      <div style="position:relative; max-width:90vw; max-height:90vh;">
        <img src='${img}' alt='Screenshot' style='max-width:90vw; max-height:80vh; border:3px solid #00ff9c; border-radius:12px; box-shadow:0 0 32px #00ff9c99; background:#181818; display:block; margin:0 auto;' />
        <button id='closeScreenshotOverlay' style='position:absolute; top:-18px; right:-18px; background:#00ff9c; color:#0f0f0f; border:none; border-radius:50%; width:38px; height:38px; font-size:1.7rem; cursor:pointer; box-shadow:0 0 10px #00ff9c88;'>×</button>
      </div>
    `;
    document.body.appendChild(screenshotOverlay);
    document.getElementById('closeScreenshotOverlay').onclick = function() {
      screenshotOverlay.remove();
    };
    screenshotOverlay.onclick = function(ev) {
      if (ev.target === screenshotOverlay) screenshotOverlay.remove();
    };
    // ESC key closes overlay
    document.addEventListener('keydown', function escListener(ev) {
      if (ev.key === 'Escape') {
        if (document.getElementById('screenshotOverlay')) {
          screenshotOverlay.remove();
          document.removeEventListener('keydown', escListener);
        }
      }
    });
  }
}