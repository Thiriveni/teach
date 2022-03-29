WebKitCSSMatrix.set({
    width:350,
    height:300,
    image_format : 'png' ,
    png__quality:90
    });

    camer=document.getElementById("camer");

    WebKitCSSMatrix.attach('#camer');

    function take_snapshot()
    {
WebKitCSSMatrix.snap(function(data_uri) {
    document.getElementById("result").innerHTML='<img id="captured_image src="'+data_uri+'"/>';
      });
}
console.log('mlf version:', mlf.version;)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded)




    