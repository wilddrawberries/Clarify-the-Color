const primaryTests = [
  { name: "Red", rgb: [255, 0, 0], expected: 0 },
  { name: "Green", rgb: [0, 255, 0], expected: 0 },
  { name: "Blue", rgb: [0, 0, 255], expected: 0 },
  { name: "Black", rgb: [0, 0, 0], expected: 0 },
  { name: "White", rgb: [255, 255, 255], expected: 0 }
];

const spectrumTests = [
  { name: "Red", rgb: [255, 0, 0], expected: 0 },
  { name: "Orange", rgb: [255, 127, 0], expected: 0 },
  { name: "Yellow", rgb: [255, 255, 0], expected: 0 },
  { name: "Green", rgb: [0, 255, 0], expected: 0 },
  { name: "Blue", rgb: [0, 0, 255], expected: 0 },
  { name: "Violet", rgb: [139, 0, 255], expected: 0 },
  { name: "Black", rgb: [0, 0, 0], expected: 0 },
  { name: "White", rgb: [255, 255, 255], expected: 0 }
];

const dailyRandomColors = [
  [240, 248, 255],
  [250, 235, 215],
  [0, 255, 255],
  [127, 255, 212],
  [240, 255, 255],
  [245, 245, 220],
  [255, 228, 196],
  [255, 235, 205],
  [138, 43, 226],
  [165, 42, 42],
  [222, 184, 135],
  [95, 158, 160],
  [127, 255, 0],
  [210, 105, 30],
  [255, 127, 80],
  [100, 149, 237],
  [255, 248, 220],
  [220, 20, 60],
  [0, 139, 139],
  [184, 134, 11],
  [0, 100, 0],
  [189, 183, 107],
  [139, 0, 139],
  [85, 107, 47],
  [255, 140, 0],
  [153, 50, 204],
  [139, 0, 0],
  [233, 150, 122],
  [143, 188, 143],
  [72, 61, 139],
  [47, 79, 79],
  [0, 206, 209],
  [148, 0, 211],
  [255, 20, 147],
  [0, 191, 255],
  [30, 144, 255],
  [178, 34, 34],
  [255, 250, 240],
  [34, 139, 34],
  [255, 0, 255],
  [248, 248, 255],
  [255, 215, 0],
  [218, 165, 32],
  [173, 255, 47],
  [240, 255, 240],
  [255, 105, 180],
  [205, 92, 92],
  [75, 0, 130],
  [255, 255, 240],
  [240, 230, 140],
  [230, 230, 250],
  [255, 240, 245],
  [124, 252, 0],
  [255, 250, 205],
  [173, 216, 230],
  [240, 128, 128],
  [224, 255, 255],
  [250, 250, 210],
  [144, 238, 144],
  [255, 182, 193],
  [255, 160, 122],
  [32, 178, 170],
  [135, 206, 250],
  [119, 136, 153],
  [176, 196, 222],
  [255, 255, 224],
  [50, 205, 50],
  [250, 240, 230],
  [128, 0, 0],
  [102, 205, 170],
  [0, 0, 205],
  [186, 85, 211],
  [147, 112, 219],
  [60, 179, 113],
  [123, 104, 238],
  [0, 250, 154],
  [72, 209, 204],
  [199, 21, 133],
  [25, 25, 112],
  [245, 255, 250],
  [255, 228, 225],
  [255, 228, 181],
  [255, 222, 173],
  [0, 0, 128],
  [253, 245, 230],
  [128, 128, 0],
  [107, 142, 35],
  [255, 69, 0],
  [218, 112, 214],
  [238, 232, 170],
  [152, 251, 152],
  [175, 238, 238],
  [219, 112, 147],
  [255, 239, 213],
  [255, 218, 185],
  [205, 133, 63],
  [255, 192, 203],
  [221, 160, 221],
  [176, 224, 230],
  [128, 0, 128],
  [102, 51, 153],
  [188, 143, 143],
  [65, 105, 225],
  [139, 69, 19],
  [250, 128, 114],
  [244, 164, 96],
  [46, 139, 87],
  [255, 245, 238],
  [160, 82, 45],
  [135, 206, 235],
  [106, 90, 205],
  [112, 128, 144],
  [255, 250, 250],
  [0, 255, 127],
  [70, 130, 180],
  [210, 180, 140],
  [0, 128, 128],
  [216, 191, 216],
  [255, 99, 71],
  [64, 224, 208],
  [245, 222, 179],
  [154, 205, 50]
];

const modes = {
  perceptron: {
    title: "Today + RGB + B/W",
    controls: [
      { key: "wR", label: "Red weight", min: -10, max: 10, step: 0.1, value: 0 },
      { key: "wG", label: "Green weight", min: -10, max: 10, step: 0.1, value: 0 },
      { key: "wB", label: "Blue weight", min: -10, max: 10, step: 0.1, value: 0 },
      { key: "bias", label: "Bias", min: -10, max: 10, step: 0.1, value: 0 }
    ],
    tests: primaryTests
  },
  hidden: {
    title: "Today + ROYGBV + B/W",
    controls: [
      { key: "rA", label: "R -> H1", min: -12, max: 12, step: 0.1, value: 0 },
      { key: "gA", label: "G -> H1", min: -12, max: 12, step: 0.1, value: 0 },
      { key: "bA", label: "B -> H1", min: -12, max: 12, step: 0.1, value: 0 },
      { key: "biasA", label: "H1 bias", min: -12, max: 12, step: 0.1, value: 0 },
      { key: "rB", label: "R -> H2", min: -12, max: 12, step: 0.1, value: 0 },
      { key: "gB", label: "G -> H2", min: -12, max: 12, step: 0.1, value: 0 },
      { key: "bB", label: "B -> H2", min: -12, max: 12, step: 0.1, value: 0 },
      { key: "biasB", label: "H2 bias", min: -12, max: 12, step: 0.1, value: 0 },
      { key: "aOut", label: "H1 -> Out", min: -12, max: 12, step: 0.1, value: 0 },
      { key: "bOut", label: "H2 -> Out", min: -12, max: 12, step: 0.1, value: 0 },
      { key: "outBias", label: "Output bias", min: -4, max: 4, step: 0.1, value: 0 }
    ],
    tests: spectrumTests
  }
};

const els = {
  dayLabel: document.querySelector("#dayLabel"),
  infoButton: document.querySelector("#infoButton"),
  infoModal: document.querySelector("#infoModal"),
  infoBackdrop: document.querySelector("#infoBackdrop"),
  infoClose: document.querySelector("#infoClose"),
  targetLabel: document.querySelector("#targetLabel"),
  targetSwatch: document.querySelector("#targetSwatch"),
  targetRgb: document.querySelector("#targetRgb"),
  targetHex: document.querySelector("#targetHex"),
  sourceButtons: [...document.querySelectorAll(".source-button")],
  customControls: document.querySelector("#customControls"),
  customColor: document.querySelector("#customColor"),
  customR: document.querySelector("#customR"),
  customG: document.querySelector("#customG"),
  customB: document.querySelector("#customB"),
  randomButton: document.querySelector("#randomButton"),
  answerValue: document.querySelector("#answerValue"),
  confidenceValue: document.querySelector("#confidenceValue"),
  scoreFormula: document.querySelector("#scoreFormula"),
  nodeOutput: document.querySelector("#nodeOutput"),
  outputNode: document.querySelector("#outputNode"),
  passChip: document.querySelector("#passChip"),
  testGrid: document.querySelector("#testGrid"),
  testTitle: document.querySelector("#testTitle"),
  controlStack: document.querySelector("#controlStack"),
  resetButton: document.querySelector("#resetButton"),
  network: document.querySelector(".network"),
  equationStack: document.querySelector("#equationStack"),
  modeButtons: [...document.querySelectorAll(".mode-button")],
  viewButtons: [...document.querySelectorAll(".view-button")],
  wires: {
    wR: document.querySelector("#wireR"),
    wG: document.querySelector("#wireG"),
    wB: document.querySelector("#wireB"),
    bias: document.querySelector("#wireBias"),
    rA: document.querySelector("#wireRA"),
    gA: document.querySelector("#wireGA"),
    bA: document.querySelector("#wireBA"),
    biasA: document.querySelector("#wireBiasA"),
    rB: document.querySelector("#wireRB"),
    gB: document.querySelector("#wireGB"),
    bB: document.querySelector("#wireBB"),
    biasB: document.querySelector("#wireBiasB"),
    aOut: document.querySelector("#wireAOut"),
    bOut: document.querySelector("#wireBOut")
  }
};

let sourceMode = "daily";
let activeMode = "perceptron";
let activeView = "combined";
let activeTests = [];
let sliders = {};
let outputs = {};

document.body.classList.add("combined-mode");

function dayNumber(date = new Date()) {
  const start = new Date(Date.UTC(2026, 0, 1));
  const today = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  return Math.floor((today - start) / 86400000) + 1;
}

function displayDate(date = new Date()) {
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function mulberry32(seed) {
  return function random() {
    let t = seed += 0x6d2b79f5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function dailyColor() {
  const random = mulberry32(dayNumber() * 982451653);
  return pickColor(dailyRandomColors, random);
}

function randomColor() {
  return pickColor(dailyRandomColors, Math.random);
}

function pickColor(colors, random) {
  return [...colors[Math.floor(random() * colors.length)]];
}

function isPlayableColor(candidate) {
  return hasPerceptronSeparator(candidate, primaryTests) && hasHiddenSeparator(candidate, spectrumTests);
}

function randomByte(random) {
  return Math.floor(random() * 256);
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16)
  ];
}

function clampByte(value) {
  return Math.round(clamp(Number(value) || 0, 0, 255));
}

function toHex(rgb) {
  return "#" + rgb.map((value) => value.toString(16).padStart(2, "0")).join("").toUpperCase();
}

function barColor(rgb) {
  const [r, g, b] = rgb;
  if (r + g + b < 45) {
    return "rgb(25, 24, 23)";
  }
  if (r + g + b > 720) {
    return "rgb(226, 219, 208)";
  }
  return `rgb(${rgb.join(", ")})`;
}

function barTextColor(rgb) {
  return "#191817";
}

function isDarkBar(rgb) {
  const [r, g, b] = rgb;
  return r + g + b < 45;
}

function sigmoid(value) {
  return 1 / (1 + Math.exp(-value));
}

function trainingVector(rgb) {
  return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, 1];
}

function dot(left, right) {
  return left.reduce((sum, value, index) => sum + value * right[index], 0);
}

function hasPerceptronSeparator(candidate, negativeTests) {
  const trainingSet = [
    { x: trainingVector(candidate), y: 1 },
    ...negativeTests.map((test) => ({ x: trainingVector(test.rgb), y: -1 }))
  ];
  const trained = [0, 0, 0, 0];

  for (let epoch = 0; epoch < 2500; epoch += 1) {
    let mistakes = 0;
    trainingSet.forEach((sample) => {
      if (sample.y * dot(trained, sample.x) <= 0) {
        trained.forEach((_, index) => {
          trained[index] += 0.35 * sample.y * sample.x[index];
        });
        mistakes += 1;
      }
    });

    if (mistakes === 0) {
      return true;
    }
  }

  return false;
}

function hasHiddenSeparator(candidate, negativeTests) {
  return findHiddenSolution(candidate, negativeTests) !== null;
}

function findHiddenSolution(candidate, negativeTests) {
  const allColors = [candidate, ...negativeTests.map((test) => test.rgb)];
  const targetPoint = trainingVector(candidate).slice(0, 3);

  for (let first = 0; first < allColors.length; first += 1) {
    for (let second = first + 1; second < allColors.length; second += 1) {
      const aPoint = midpoint(targetPoint, trainingVector(allColors[first]).slice(0, 3));
      const bPoint = midpoint(targetPoint, trainingVector(allColors[second]).slice(0, 3));
      const h1 = planeTowardTarget(targetPoint, aPoint, 0.02);
      const h2 = planeTowardTarget(targetPoint, bPoint, 0.02);
      const hiddenSamples = [
        { hidden: hiddenPair(candidate, h1, h2), y: 1 },
        ...negativeTests.map((test) => ({ hidden: hiddenPair(test.rgb, h1, h2), y: -1 }))
      ];
      const out = trainOutputSeparator(hiddenSamples);

      if (out) {
        return {
          rA: h1[0],
          gA: h1[1],
          bA: h1[2],
          biasA: h1[3],
          rB: h2[0],
          gB: h2[1],
          bB: h2[2],
          biasB: h2[3],
          aOut: out[0],
          bOut: out[1],
          outBias: out[2]
        };
      }
    }
  }

  return null;
}

function midpoint(left, right) {
  return left.map((value, index) => (value + right[index]) / 2);
}

function planeTowardTarget(targetPoint, borderPoint, nudge) {
  const normal = targetPoint.map((value, index) => value - borderPoint[index]);
  const bias = -dot(normal, borderPoint) + nudge;
  return [...normal, bias].map((value) => clamp(value * 10, -12, 12));
}

function hiddenPair(rgb, h1, h2) {
  const x = trainingVector(rgb);
  return [step(dot(h1, x)), step(dot(h2, x)), 1];
}

function trainOutputSeparator(samples) {
  for (let a = -12; a <= 12; a += 1) {
    for (let b = -12; b <= 12; b += 1) {
      for (let bias = -4; bias <= 4; bias += 1) {
        const candidate = [a, b, bias];
        const works = samples.every((sample) => {
          const activation = dot(candidate, sample.hidden);
          return sample.y === 1 ? activation > 0 : activation <= 0;
        });

        if (works) {
          return candidate;
        }
      }
    }
  }

  return null;
}

function step(value) {
  return value >= 0 ? 1 : 0;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

let target = dailyColor();
let customTarget = [...target];

function renderTarget() {
  const rgbText = `rgb(${target[0]}, ${target[1]}, ${target[2]})`;
  els.dayLabel.textContent = sourceMode === "daily" ? displayDate() : sourceTestName();
  els.targetLabel.textContent = sourceMode === "daily"
    ? "Today's color"
    : `${sourceMode.charAt(0).toUpperCase()}${sourceMode.slice(1)} color`;
  els.targetSwatch.style.background = rgbText;
  els.targetRgb.innerHTML = rgbHtml(target);
  els.targetHex.textContent = toHex(target);
}

function rgbHtml(rgb) {
  return `
    <span class="rgb-function">rgb(</span>
    <span class="rgb-channel rgb-red">${rgb[0]}</span>
    <span class="rgb-comma">,</span>
    <span class="rgb-channel rgb-green">${rgb[1]}</span>
    <span class="rgb-comma">,</span>
    <span class="rgb-channel rgb-blue">${rgb[2]}</span>
    <span class="rgb-function">)</span>
  `;
}

function applyTarget(rgb) {
  target = rgb.map(clampByte);
  renderTarget();
  renderTests();
  render();
}

function syncCustomControls(rgb = target) {
  const [r, g, b] = rgb.map(clampByte);
  els.customR.value = r;
  els.customG.value = g;
  els.customB.value = b;
  els.customColor.value = toHex([r, g, b]);
}

function customRgb() {
  return [els.customR.value, els.customG.value, els.customB.value].map(clampByte);
}

function setSource(mode) {
  sourceMode = mode;
  els.sourceButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.source === sourceMode);
  });
  els.customControls.hidden = sourceMode !== "custom";
  els.randomButton.hidden = sourceMode !== "random";
  els.testTitle.innerHTML = testTitle();

  if (sourceMode === "daily") {
    applyTarget(dailyColor());
    return;
  }

  if (sourceMode === "random") {
    applyTarget(randomColor());
    return;
  }

  syncCustomControls(customTarget);
  applyTarget(customTarget);
}

function controlValues() {
  return Object.fromEntries(
    Object.entries(sliders).map(([key, slider]) => [key, Number(slider.value)])
  );
}

function currentTests() {
  return [
    { name: sourceTestName(), rgb: target, expected: 1 },
    ...modes[activeMode].tests
  ];
}

function sourceTestName() {
  if (sourceMode === "daily") {
    return "Today";
  }
  return sourceMode.charAt(0).toUpperCase() + sourceMode.slice(1);
}

function testTitle() {
  const first = sourceTestName().toUpperCase();
  const suite = activeMode === "hidden" ? "ROYGBV + B&W" : "RGB + B&W";
  return `
    <span>${first}</span>
    <em>vs</em>
    <span>${suite}</span>
  `;
}

function renderControls() {
  els.controlStack.innerHTML = "";
  sliders = {};
  outputs = {};

  if (activeMode === "hidden") {
    renderHiddenControlGroups();
    return;
  }

  modes[activeMode].controls.forEach((control) => {
    els.controlStack.append(controlRow(control));
  });
}

function renderHiddenControlGroups() {
  const isCompactLayout = window.matchMedia("(max-width: 720px)").matches;
  const groups = [
    { title: "H1", keys: ["rA", "gA", "bA", "biasA"], open: true },
    { title: "H2", keys: ["rB", "gB", "bB", "biasB"], open: true },
    { title: "OUT", keys: ["aOut", "bOut", "outBias"], open: true }
  ];

  groups.forEach((group) => {
    const details = document.createElement("details");
    details.className = "control-group";
    details.open = isCompactLayout ? group.title === "H1" : group.open;
    details.innerHTML = `<summary>${group.title}</summary>`;
    const body = document.createElement("div");
    body.className = "control-group-body";
    group.keys.forEach((key) => {
      body.append(controlRow(modes.hidden.controls.find((control) => control.key === key)));
    });
    details.append(body);
    els.controlStack.append(details);
  });
}

function controlRow(control) {
  const row = document.createElement("label");
  row.className = "slider-row";
  row.innerHTML = `
    <span>${control.label}</span>
    <output>${Number(control.value).toFixed(2)}</output>
    <input type="range" min="${control.min}" max="${control.max}" step="${control.step}" value="${control.value}">
  `;
  sliders[control.key] = row.querySelector("input");
  outputs[control.key] = row.querySelector("output");
  sliders[control.key].addEventListener("input", render);
  return row;
}

function renderTests() {
  activeTests = currentTests();
  els.testGrid.innerHTML = "";
  els.testGrid.style.setProperty("--test-count", activeTests.length);
  activeTests.forEach((test) => {
    const card = document.createElement("article");
    card.className = "test-card";
    card.dataset.test = test.name;
    card.dataset.expected = test.expected;
    card.classList.toggle("dark-meter", isDarkBar(test.rgb));
    card.style.setProperty("--bar-color", barColor(test.rgb));
    card.style.setProperty("--bar-text", barTextColor(test.rgb));
    card.innerHTML = `
      <div class="bar-stage" aria-label="Signal strength">
        <div class="signal-fill"></div>
      </div>
      <div class="test-tab">
        <div class="mini-swatch" style="background: rgb(${test.rgb.join(", ")})"></div>
        <span class="prediction">Is ${test.name}? NO</span>
        <span class="signal-label">Confidence: 0%</span>
        <span class="expected">Should be: ${yesNo(test.expected)}</span>
      </div>
    `;
    els.testGrid.append(card);
  });
}

function yesNo(value) {
  return value === 1 ? "YES" : "NO";
}

function yesNoBit(value) {
  return value === 1 ? "YES (1)" : "NO (0)";
}

function evaluate(rgb, values = controlValues()) {
  return activeMode === "hidden"
    ? evaluateHidden(rgb, values)
    : evaluatePerceptron(rgb, values);
}

function evaluatePerceptron(rgb, values) {
  const [r, g, b] = rgb.map((value) => value / 255);
  const sum = (r * values.wR) + (g * values.wG) + (b * values.wB) + values.bias;
  const signal = sigmoid(sum);
  return {
    sum,
    signal,
    output: sum > 0 ? 1 : 0,
    formula: `sum = ${sum.toFixed(2)}`
  };
}

function perceptronTerms(rgb, values) {
  const [r, g, b] = rgb.map((value) => value / 255);
  return {
    r: {
      label: "R",
      input: rgb[0],
      weight: values.wR,
      value: r * values.wR
    },
    g: {
      label: "G",
      input: rgb[1],
      weight: values.wG,
      value: g * values.wG
    },
    b: {
      label: "B",
      input: rgb[2],
      weight: values.wB,
      value: b * values.wB
    },
    bias: {
      label: "X",
      input: null,
      weight: values.bias,
      value: values.bias
    }
  };
}

function evaluateHidden(rgb, values) {
  const [r, g, b] = rgb.map((value) => value / 255);
  const h1Sum = (r * values.rA) + (g * values.gA) + (b * values.bA) + values.biasA;
  const h2Sum = (r * values.rB) + (g * values.gB) + (b * values.bB) + values.biasB;
  const h1 = step(h1Sum);
  const h2 = step(h2Sum);
  const sum = (h1 * values.aOut) + (h2 * values.bOut) + values.outBias;
  const signal = sigmoid(sum);
  return {
    sum,
    signal,
    output: sum > 0 ? 1 : 0,
    h1,
    h2,
    h1Sum,
    h2Sum,
    formula: `H1 ${h1} - H2 ${h2} - sum = ${sum.toFixed(2)}`
  };
}

function renderWires(values) {
  Object.entries(values).forEach(([key, value]) => {
    if (!els.wires[key]) {
      return;
    }
    els.wires[key].classList.toggle("negative", value < 0);
    els.wires[key].classList.toggle("positive", Math.abs(value) >= 0.1);
    els.wires[key].style.strokeWidth = 4 + Math.abs(value) * 1.1;
  });

  document.querySelector("#wireBias").classList.toggle("positive", activeMode === "hidden");
}

function render() {
  const values = controlValues();
  Object.entries(values).forEach(([key, value]) => {
    outputs[key].textContent = value.toFixed(2);
  });
  renderWires(values);

  const targetResult = evaluate(target, values);
  els.answerValue.textContent = yesNoBit(targetResult.output);
  els.nodeOutput.textContent = yesNoBit(targetResult.output);
  els.confidenceValue.textContent = `${Math.round(targetResult.signal * 100)}%`;
  els.scoreFormula.textContent = targetResult.formula;
  els.outputNode.classList.toggle("active", targetResult.output === 1);
  renderEquation(values, targetResult);

  let passing = 0;
  [...els.testGrid.children].forEach((card, index) => {
    const test = activeTests[index];
    const result = evaluate(test.rgb, values);
    const didPass = result.output === test.expected;
    passing += didPass ? 1 : 0;
    card.classList.toggle("pass", didPass);
    card.classList.toggle("fail", !didPass);
    card.querySelector(".prediction").textContent = `Is ${test.name}? ${yesNo(result.output)}`;
    card.querySelector(".signal-fill").style.height = `${Math.round(result.signal * 100)}%`;
    card.querySelector(".signal-label").textContent = `Confidence: ${Math.round(result.signal * 100)}%`;
  });

  const solved = passing === activeTests.length;
  els.passChip.classList.toggle("solved", solved);
  els.passChip.textContent = solved ? "Color clarified!" : `${passing} / ${activeTests.length} passing`;
}

function renderEquation(values, targetResult) {
  if (activeMode === "hidden") {
    renderHiddenEquation(values, targetResult);
    return;
  }

  renderPerceptronEquation(values, targetResult.sum);
}

function renderPerceptronEquation(values, sum) {
  const terms = perceptronTerms(target, values);
  if (els.equationStack.dataset.layout !== "perceptron") {
    els.equationStack.dataset.layout = "perceptron";
    els.equationStack.innerHTML = equationRow([
      termHtml("r-term", "r", terms.r, "wR"),
      operatorHtml("+"),
      termHtml("g-term", "g", terms.g, "wG"),
      operatorHtml("+"),
      termHtml("b-term", "b", terms.b, "wB"),
      operatorHtml("+"),
      termHtml("x-term", "bias", terms.bias, "bias"),
      operatorHtml("="),
      `<span class="sum-term" data-sum>${sum.toFixed(2)}</span>`
    ]);
    bindEquationSliders();
  }
  els.equationStack.querySelector("[data-sum]").textContent = sum.toFixed(2);
  scaleEquationTerms(terms);
}

function renderHiddenEquation(values, result) {
  const h1Terms = hiddenInputTerms(values.rA, values.gA, values.bA, values.biasA);
  const h2Terms = hiddenInputTerms(values.rB, values.gB, values.bB, values.biasB);
  const outTerms = {
    h1: { label: "H1", input: `(${result.h1})`, weight: values.aOut, value: result.h1 * values.aOut },
    h2: { label: "H2", input: `(${result.h2})`, weight: values.bOut, value: result.h2 * values.bOut },
    bias: { label: "X", input: null, weight: values.outBias, value: values.outBias }
  };

  if (els.equationStack.dataset.layout !== "hidden") {
    els.equationStack.dataset.layout = "hidden";
    els.equationStack.innerHTML = [
      equationRow([
        labelHtml("H1"),
        operatorHtml("="),
        termHtml("r-term", "h1-r", h1Terms.r, "rA"),
        operatorHtml("+"),
        termHtml("g-term", "h1-g", h1Terms.g, "gA"),
        operatorHtml("+"),
        termHtml("b-term", "h1-b", h1Terms.b, "bA"),
        operatorHtml("+"),
        termHtml("x-term", "h1-bias", h1Terms.bias, "biasA"),
        operatorHtml("="),
        resultHtml(result.h1, "h1")
      ]),
      equationRow([
        labelHtml("H2"),
        operatorHtml("="),
        termHtml("r-term", "h2-r", h2Terms.r, "rB"),
        operatorHtml("+"),
        termHtml("g-term", "h2-g", h2Terms.g, "gB"),
        operatorHtml("+"),
        termHtml("b-term", "h2-b", h2Terms.b, "bB"),
        operatorHtml("+"),
        termHtml("x-term", "h2-bias", h2Terms.bias, "biasB"),
        operatorHtml("="),
        resultHtml(result.h2, "h2")
      ]),
      equationRow([
        labelHtml("OUT"),
        operatorHtml("="),
        termHtml("h-term", "out-h1", outTerms.h1, "aOut"),
        operatorHtml("+"),
        termHtml("h-term", "out-h2", outTerms.h2, "bOut"),
        operatorHtml("+"),
        termHtml("x-term", "out-bias", outTerms.bias, "outBias"),
        operatorHtml("="),
        resultHtml(result.output, "out")
      ])
    ].join("");
    bindEquationSliders();
  }

  updateResultChip("h1", result.h1);
  updateResultChip("h2", result.h2);
  updateResultChip("out", result.output);
  scaleEquationTerms({
    ...prefixTerms(h1Terms, "h1"),
    ...prefixTerms(h2Terms, "h2"),
    ...prefixTerms(outTerms, "out")
  });
}

function hiddenInputTerms(rWeight, gWeight, bWeight, biasWeight) {
  const [r, g, b] = target.map((value) => value / 255);
  return {
    r: { label: "R", input: target[0], weight: rWeight, value: r * rWeight },
    g: { label: "G", input: target[1], weight: gWeight, value: g * gWeight },
    b: { label: "B", input: target[2], weight: bWeight, value: b * bWeight },
    bias: { label: "X", input: null, weight: biasWeight, value: biasWeight }
  };
}

function prefixTerms(terms, prefix) {
  return Object.fromEntries(
    Object.entries(terms).map(([key, value]) => [`${prefix}-${key}`, value])
  );
}

function equationRow(parts) {
  return `<div class="living-equation">${parts.join("")}</div>`;
}

function labelHtml(label) {
  return `<span class="equation-row-label">${label}</span>`;
}

function operatorHtml(value) {
  return `<span class="operator">${value}</span>`;
}

function resultHtml(value, key) {
  return `<span class="sum-term hidden-result ${value === 1 ? "active" : ""}" data-result="${key}">${value}</span>`;
}

function termHtml(className, key, term, controlKey) {
  const input = term.input === null ? "" : typeof term.input === "number" ? `(${term.input})` : term.input;
  const control = controlConfig(controlKey);
  return `
    <span class="equation-term ${className}" data-term="${key}" data-control="${controlKey}">
      <span class="term-main">
        <span class="term-letter">${term.weight < 0 ? "-" : ""}${term.label}</span>
        <span class="term-input">${input}</span>
      </span>
      <input class="term-slider" type="range" min="${control.min}" max="${control.max}" step="${control.step}" value="${term.weight}">
      <span class="term-control-label">${control.label}</span>
    </span>
  `;
}

function scaleEquationTerms(terms) {
  const maxAbs = Math.max(1, ...Object.values(terms).map((term) => Math.abs(term.weight)));
  [...els.equationStack.querySelectorAll(".equation-term")].forEach((node) => {
    const term = terms[node.dataset.term];
    if (!term) {
      return;
    }
    const scale = 0.15 + (Math.abs(term.weight) / maxAbs) * 0.85;
    node.classList.toggle("negative", term.weight < 0);
    node.style.setProperty("--term-scale", scale.toFixed(3));
    node.querySelector(".term-letter").textContent = `${term.weight < 0 ? "-" : ""}${term.label}`;
    node.querySelector(".term-input").textContent = term.input === null ? "" : typeof term.input === "number" ? `(${term.input})` : term.input;
    node.querySelector(".term-slider").value = term.weight;
  });
}

function controlConfig(key) {
  return modes[activeMode].controls.find((control) => control.key === key);
}

function bindEquationSliders() {
  els.equationStack.querySelectorAll(".term-slider").forEach((slider) => {
    slider.addEventListener("input", () => {
      const key = slider.closest(".equation-term").dataset.control;
      if (sliders[key]) {
        sliders[key].value = slider.value;
      }
      render();
    });
  });
}

function updateResultChip(key, value) {
  const chip = els.equationStack.querySelector(`[data-result="${key}"]`);
  if (!chip) {
    return;
  }
  chip.textContent = value;
  chip.classList.toggle("active", value === 1);
}

function setView(view) {
  activeView = "combined";
  document.body.classList.remove("equation-mode");
  els.viewButtons.forEach((button) => {
    button.classList.toggle("active", false);
  });
}

function setMode(mode) {
  activeMode = mode;
  document.body.classList.toggle("hidden-mode", activeMode === "hidden");
  setView(activeView);
  els.testTitle.innerHTML = testTitle();
  els.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === activeMode);
  });
  renderControls();
  renderTests();
  render();
}

els.sourceButtons.forEach((button) => {
  button.addEventListener("click", () => setSource(button.dataset.source));
});

els.randomButton.addEventListener("click", () => {
  setSource("random");
});

els.customColor.addEventListener("input", () => {
  const rgb = hexToRgb(els.customColor.value);
  customTarget = rgb;
  els.customR.value = rgb[0];
  els.customG.value = rgb[1];
  els.customB.value = rgb[2];
  applyTarget(rgb);
});

[els.customR, els.customG, els.customB].forEach((input) => {
  input.addEventListener("input", () => {
    const rgb = customRgb();
    customTarget = rgb;
    els.customColor.value = toHex(rgb);
    applyTarget(rgb);
  });

  input.addEventListener("change", () => {
    customTarget = customRgb();
    syncCustomControls(customTarget);
  });
});

els.modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

els.viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setView(button.dataset.view);
    render();
  });
});

els.resetButton.addEventListener("click", () => {
  modes[activeMode].controls.forEach((control) => {
    sliders[control.key].value = control.value;
  });
  render();
});

function setInfoOpen(isOpen) {
  els.infoModal.hidden = !isOpen;
}

els.infoButton.addEventListener("click", () => setInfoOpen(true));
els.infoBackdrop.addEventListener("click", () => setInfoOpen(false));
els.infoClose.addEventListener("click", () => setInfoOpen(false));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setInfoOpen(false);
  }
});

renderTarget();
syncCustomControls();
setMode(activeMode);
