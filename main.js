function setup() {
  canvas = createCanvas(200, 200);
  video = createCapture(VIDEO);
  video.hide();
  
  classifier = ml5.imageClassifier("MobileNet", modelLoaded);
}

function modelLoaded(){
  console.log("mode loaded");
}

function draw(){
  image(video, 0, 0, 200, 200);
  classifier.classify(video, gotResult);
}

function gotResult(error, results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_onject_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}