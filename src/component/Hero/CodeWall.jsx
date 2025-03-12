const CodeWall = () => {
  return (
    <div className="absolute right-0 w-2/3 h-full bg-transparent">
      <pre className="text-blue-400 font-mono text-sm p-8 leading-relaxed">
        {`// Bug detection and elimination system
  import { BugDetector } from '@debug/core';
  import { SmartPatrol } from './utils';
  
  class BugTerminator extends SmartPatrol {
    constructor() {
      super();
      this.detector = new BugDetector({
        sensitivity: 'high',
        mode: 'aggressive'
      });
    }
  
    async findBug() {
      const codeBase = await this.scanDirectory();
      return this.detector.analyze(codeBase);
    }
  
    async squashBug(bug) {
      if (bug.isActive) {
        const impact = await this.calculateForce();
        return this.smash(bug, impact);
      }
      return this.patrol();
    }
  
    // Keep debugging...
  }`}
      </pre>
    </div>
  );
};

export default CodeWall;
