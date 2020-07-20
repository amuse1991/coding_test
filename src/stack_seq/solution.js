export default function solution(totalCount, seqStr) {
  const sequence = seqStr.split(" ").map(val => Number(val));
  const stack = {
    top: -1,
    list: [],
    log: [],
    pushNumber: 1,
    push: function(item) {
      this.list.push(item);
      this.top = this.top + 1;
      this.log.push("+");
      this.pushNumber += 1;
      return this.top;
    },
    pop: function() {
      if (this.top < 0) return false;
      this.top = this.top - 1;
      this.log.push("-");
      return this.list.pop();
    },
    pushTo: function(destNum) {
      for (let num = this.pushNumber; num <= destNum; num++) {
        stack.push(num);
      }
    }
  };

  for (const seqNum of sequence) {
    const topVal = stack.list[stack.top];
    if (stack.top < 0 || topVal < seqNum) {
      stack.pushTo(seqNum);
      stack.pop();
    } else if (topVal === seqNum) {
      stack.pop();
    } else {
      return ["NO"];
    }
  }

  return stack.log;
}
