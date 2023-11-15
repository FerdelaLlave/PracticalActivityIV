// Cuadrado perimetro
function squarePerimeter(side){
    return side*4;
}

function squarePerimeterCalculate(){
    const numberSide = document.getElementById("squareInput");
    const result = parseFloat(numberSide.value);
    const perimeter = squarePerimeter(result);
    document.getElementById("squarePerimeter").innerText = "The perimeter is "+perimeter+" cm";
}

// Cuadrado Area
function squareArea(side){
    return side*side;
}

function squareAreaCalculate(){
    const numberSide = document.getElementById("squareInput");
    const result = parseFloat(numberSide.value);
    const area = squareArea(result);
    document.getElementById("squareArea").innerText = "The area is "+area+" cm2"
}
//Limpiar form cuadrado

function clearSquare(){

    document.getElementById("squareInput").value = "";
    document.getElementById("squareArea").innerText = "";
    document.getElementById("squarePerimeter").innerText = "";


}

//Circle perimetro

function circlePerimeter(radius){
    return 2* Math.PI * radius;
}

function circlePerimeterCalculate(){
    const numberRadius = document.getElementById("circleInput");
    const result = parseFloat(numberRadius.value);

    const perimeter = circlePerimeter(result);
    document.getElementById("circlePerimeter").innerText = "The perimeter is " + perimeter + " cm";
}

//circle area

function circleArea(radius){
    return radius*radius* Math.PI;
}

function circleAreaCalculate(){
    const numberRadius = document.getElementById("circleInput");
    const result = parseFloat(numberRadius.value);
    const area = circleArea(result);
    document.getElementById("circleArea").innerText = "The area is "+area+" cm2"

}

//limpiar form cicle
function clearCircle(){

    document.getElementById("circleInput").value = "";
    document.getElementById("circleArea").innerText = "";
    document.getElementById("circlePerimeter").innerText = "";
}

//triangle perimeter

function trianglePerimeter(ladoA,ladoB,base){
    return ladoA + ladoB + base;
}

function trianglePerimeterCalculate(){
    const ladoA = document.getElementById("firstSideInput");
    const ladoB = document.getElementById("secondSideInput");
    const base = document.getElementById("baseInput");

    const result = parseFloat(ladoA.value);
    const result2= parseFloat(ladoB.value); 
    const result3 = parseFloat(base.value);

    const perimeter = trianglePerimeter(result,result2,result3);

    document.getElementById("trianglePerimeter").innerText = "The perimeter is " + perimeter + " cm";
}

//triangle area

function triangleArea(base,altura){
    return base*altura/2
}

function triangleAreaCalculate(){
    const base = document.getElementById("baseInput");
    const altura= document.getElementById("heightInput");

    const result = parseFloat(base.value);
    const result2 = parseFloat(altura.value);

    const area = triangleArea(result,result2);

    document.getElementById("triangleArea").innerText = "The area is " + area + " cm";
}

//limpiar form triangle

function clearTriangle(){
    document.getElementById("firstSideInput").value = "";
    document.getElementById("secondSideInput").value = "";
    document.getElementById("baseInput").value = "";
    document.getElementById("heightInput").value = "";
    document.getElementById("triangleArea").innerText = "";
    document.getElementById("trianglePerimeter").innerText = "";

}



    
