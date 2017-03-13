/**
 * Created by 17ZY- on 2017/3/13.
 */
var express=require('express');
var multer=require('multer');
var app = express()

var stroageZip=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/uploads/zip')
    },
    filename:function () {
        cb(null,file.fieldname+'_'+Date.now())
    }
});

var uploadZip=multer({
    stroage:stroageZip
})

app.post('/webgl/upload/zip',uploadZip.single('file'),function(req,res){
    res.json(req.file)
})
