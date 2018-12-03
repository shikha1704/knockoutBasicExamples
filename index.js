const express=require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,"./")));

app.listen(3003,function(){
    console.log('nm')
})  

app.get('/applyBindingFirst',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/applyBindingFirst.html'));
})

app.get('/observableBasics',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/observableBasics.html'));
})

app.get('/observableArray',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/observableArray.html'));
})

app.get('/bindings',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/bindings.html'));
})

app.get('/controlFlow',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/controlFlow.html'));
})

app.get('/ifBinding',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/ifBinding.html'));
})

app.get('/clickBinding',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/clickBinding.html'));
})

app.get('/eventBinding',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/eventBinding.html'));
})

app.get('/textInputBinding',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/textInputBinding.html'));
})

app.get('/hasFocus',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/hasFocus.html'));
})

app.get('/checkedBinding',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/checkedBinding.html'));
})

app.get('/optionBinding',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/optionBinding.html'));
})

app.get('/nativeTemplateBinding',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/nativeTemplateBinding.html'));
})

app.get('/customBinding',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/customBinding.html'));
})

app.get('/componentBinding',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/componentBinding.html'));
})

app.get('/componentBindingExample2',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/componentBindingExample2.html'));
})

app.get('/dynamicData',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/dynamicData.html'));
})

app.get('/testingReact',function(req,res){
    res.sendFile(path.join(__dirname,'./templates/testingReact.html'));
})



