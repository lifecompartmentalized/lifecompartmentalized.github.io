
ArrayList<Point> points; // store points in array list
int n;                   // metric flag

// initialize for display
void setup(){

  var width = document.getElementById("paige-root").offsetWidth
  var canvas = document.getElementById('canv');
  size(width,300);
  //size(canvas.width,canvas.height);
  background(#ffffff);
  points = new ArrayList<Point>();
  noLoop();
  // starting metric is Euclidean
  n = 1;
  initializeBoard();
}

// add points to start
void initializeBoard(){
  float x1 = random(width);
  float x2 = random(width);
  float x3 = random(width);
  float x4 = random(width);
  float x5 = random(width);
  float x6 = random(width);
  float x7 = random(width);
  float x8 = random(width);
  float y1 = random(height);
  float y2 = random(height);
  float y3 = random(height);
  float y4 = random(height);
  float y5 = random(height);
  float y6 = random(height);
  float y7 = random(height);
  float y8 = random(height);
  points.add(new Point(x1, y1, n));
  points.add(new Point(x2, y2, n));
  points.add(new Point(x3, y3, n));
  points.add(new Point(x4, y4, n));
  points.add(new Point(x5, y5, n));
  points.add(new Point(x6, y6, n));
  points.add(new Point(x7, y7, n));
  points.add(new Point(x8, y8, n));
  redraw();
}

// display points
void draw(){
  background(#ffffff);
  fillBoard();
  for (int i = points.size()-1; i >= 0; i--) { 
    Point p = points.get(i);
    p.display();
  }
}

// add points to board
void fillBoard(){
  for (int w=0; w<width; w++){
    for (int h=0; h<height; h++){
      set(w,h,nearestNeighbor(w,h));
    }
  }
}

// returns the color of the nearest neighbor point
color nearestNeighbor(int x, int y){
  float mindist = points.get(0).getMetric(x,y);
  color c = points.get(0).c;
  for (int i = points.size()-1; i >= 0; i--) { 
    Point p = points.get(i);
    if ( p.getMetric(x,y) < mindist ){
      c = p.c;
      mindist = p.getMetric(x,y);
    }
  }
  return c;
}

// add new point on mouse click
void mouseClicked() {
  points.add(new Point(mouseX, mouseY, n));
  redraw();
}

// remove all elements from board
void clearBoard(){
    for (int i = points.size()-1; i >= 0; i--) { 
      points.remove(i);
    }
    initializeBoard();
    redraw();
}

// update points on the plane
void updatePoints(int n){
    for (int i = points.size()-1; i >= 0; i--) { 
        Point p = points.get(i);
        p.changeMetric(n);
    }
    redraw();
}

void keyPressed() {
  // clear board
  if (key == 'r'){
    clearBoard();

  // toggle through metrics
  } else if (key == 'n'){
    n = (n+1)%3;
    updatePoints(n);

  // Euclidean distance
  } else if (key == '1'){
    n = 0;
    updatePoints(n);
  // Manhattan distance
  } else if (key == '2'){
    n = 1;
    updatePoints(n);

  // Chebyshev distance
  } else if (key =='0'){
    n = 2;
    updatePoints(n);
  }
}


class Point{
  int x, y;     // x and y coordinate
  color c;      // color
  int n;        // metric flag
  Point(int x, int y, int n){
    this.x = x;
    this.y = y;
    // choose a random color
    c = color(random(0,255),random(0,255),random(0,255));
    this.n = n;
  }

  // display the point
  void display(){
    fill(#000000);
    stroke(#000000);
    noStroke();
    ellipse(x,y,8,8);
  }

  // Euclidean distance
  float getEuclidean(int a, int b){
    return (x-a)*(x-a)+(y-b)*(y-b);
    // omit square root to decrease computation (it's monotonic function)
  }

  // Chebyshev distance
  float getChebyshev(int a, int b){
    if(abs(x-a)>abs(y-b)){
        return abs(x-a);
    } else return abs(y-b);
  }

  // Manhattan distance
  float getManhattan(int a, int b){
    return abs(x - a) + abs(y - b);
  }

  // choose metric calculation
  float getMetric(int a, int b){
    if (n == 0){
      return getEuclidean(a,b);
    } else if (n == 1) {
      return getManhattan(a,b);
    } else if (n == 2) {
      return getChebyshev(a,b);
    } else { return 0; }
  }

  // change the metric value
  void changeMetric(int n){
    this.n = n;
  }
}
