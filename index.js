var CustomStack = function(maxSize) {
    this.maxSize=maxSize;
    this.stack=[],this.inc=new Array(maxSize).fill(0);
    this.index=-1;
};
CustomStack.prototype.push = function(x) {
    if(this.index===this.maxSize-1){
        return;
    }
    this.index++;
    this.stack[this.index]=x;
};
CustomStack.prototype.pop = function() {
    if(this.index===-1){
        return -1;
    }
    let result=this.stack[this.index]+this.inc[this.index];
    if(this.index>0){
        this.inc[this.index-1]+=this.inc[this.index];
    }
    this.inc[this.index]=0;
    this.index--;
    return result;
};
CustomStack.prototype.increment = function(k, val) {
    const limit=Math.min(k-1,this.index);
    if(limit>=0){
        this.inc[limit]+=val;
    }
};