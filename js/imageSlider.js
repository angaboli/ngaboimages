/**
 * imageSlider for canvas 
 * @param {*} canvas 
 */
function ImageSlider(canvas) {
  this.canvas = canvas;
  this.image1 = new Image();
  this.image2 = new Image();
  this.idxF;

  var context = canvas.getContext("2d");
  this.dessine = function() {
    context.drawImage(this.image1,0,0,this.idxF,this.canvas.height,0,0,this.idxF,this.canvas.height);
    context.drawImage(this.image2,this.idxF,0,this.canvas.width-this.idxF,this.canvas.height,this.idxF,0,this.canvas.width-this.idxF,this.canvas.height);
    context.fillStyle = '#F5734E';
    context.fillRect(this.idxF,0,3,this.canvas.height);
  };

  this.init = function() {
    this.canvas.width = this.image2.width;
    this.canvas.height = this.image2.height;
    this.idxF = this.canvas.width/2;
    this.dessine();
    this.canvas.addEventListener('keydown',this.keyActionHandler.bind(this));
  };

  this.initImages = function(src1,src2) {
    this.image1.src=src1;
    this.image2.src=src2;
    this.image2.addEventListener("load",this.init.bind(this));
  };
}

ImageSlider.prototype.keyActionHandler = function(event) {
  switch (event.key) {
    case 'ArrowLeft' :
    case 'Left' :
      this.idxF-=10;
      if(this.ixF<0) this.idxF=0;
    break;
    case 'ArrowRight' :
    case 'Right' :
      this.idxF+=10;
      if(this.idxF > this.canvas.width) this.idxF = this.canvas.width;
    break;
    case ' ' :
      event.preventDefault();
      this.idxF = this.canvas.width/2;
    break;
    default :
      return ;
  }
  this.dessine();
}
