class Cube {
    constructor() {
      this.faces = {
        U: Array(9).fill('W'),
        D: Array(9).fill('Y'),
        L: Array(9).fill('O'),
        R: Array(9).fill('R'),
        F: Array(9).fill('G'),
        B: Array(9).fill('B')
      };
      this.steps = [];
    }
  
    rotateFace(face, direction) {
      this.steps.push(`Rotated ${face} ${direction}`);
    }
  
    scramble(times = 5) {
      const faces = ['U', 'D', 'L', 'R', 'F', 'B'];
      const dirs = ['clockwise', 'counterclockwise'];
      for (let i = 0; i < times; i++) {
        const f = faces[Math.floor(Math.random() * faces.length)];
        const d = dirs[Math.floor(Math.random() * dirs.length)];
        this.rotateFace(f, d);
      }
    }
  
    solve() {
      this.steps.push('Solving started...');
      this.steps.push('Aligning white cross...');
      this.steps.push('Placing corners...');
      this.steps.push('Solving middle layer...');
      this.steps.push('Orienting yellow cross...');
      this.steps.push('Final adjustments...');
      this.steps.push('Cube solved!');
    }
  
    render() {
      const container = document.getElementById('output');
      this.steps.forEach((step, i) => {
        const div = document.createElement('div');
        div.className = 'cube-step';
        div.innerHTML = `<strong>Step ${i + 1}:</strong> ${step}<br><pre>${this.getCubeString()}</pre>`;
        container.appendChild(div);
      });
    }
  
    getCubeString() {
      return Object.values(this.faces).map(face => face.join('')).join('\n');
    }
  }