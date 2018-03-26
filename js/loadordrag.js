var LoadorDrag = function( callback, isOld ){

    this.pool = [];
    //this.isOld = isOld || false;

    this.callback = callback || new function(){};

    this.reader = new FileReader();
    this.file = null;


    //var def = "font-weight: bold; ";
    this.def = "text-align:center; font-weight: bold; color:#ccc; font-size:14px; font-family:monospace; padding-top:10px; ";
    this.drager = document.createElement('div');
    this.loader = document.createElement('div');
    this.hide = document.createElement('input');
    this.hide.type = "file";

    this.drager.style.cssText = this.def+"position:absolute; top:70px; left:6px; width:50px; height:30px; border:1px dashed #ccc; pointer-events:auto; cursor:pointer;";
    this.loader.style.cssText = this.def+"position:absolute; top:70px; left:66px; width:50px; height:30px; pointer-events:none; border:1px solid #ccc;";
    this.hide.style.cssText = "position:absolute; top:70px; left:66px; width:50px; height:30px; opacity:0; overflow:hidden; cursor:pointer;";

    this.drager.innerHTML = 'DRAG';
    this.loader.innerHTML = 'LOAD';

    var _this = this;
    this.reader.onload = function(e) { _this.sending(e.target.result); };

    this.drager.addEventListener('dragover', function(e){_this.dragOver(e);}, false);
    this.drager.addEventListener('dragend', function(e){_this.dragEnd(e);}, false);
    this.drager.addEventListener('dragleave', function(e){_this.dragEnd(e);}, false);
    this.drager.addEventListener('drop', function(e){_this.drop(e);}, false);

    //this.drager.ondragover = function (e) { _this.dragOver(e); };
    //this.drager.ondragend = function (e) { _this.dragEnd(e); };
    //this.drager.ondrop = function (e) {_this.drop(e); };

    
    this.hide.addEventListener('mouseover', function(){_this.fileOver();}, false);
    this.hide.addEventListener('mouseout', function(){_this.fileOut();}, false);
    this.hide.addEventListener('change', function(e){_this.handleFileSelect(e);}, false);

    document.body.appendChild(this.hide);
    document.body.appendChild(this.loader);
    document.body.appendChild(this.drager);
}

LoadorDrag.prototype = {
    // DRAGER

    dragOver:function(e){
        e = e || window.event;
        if(e.preventDefault) e.preventDefault();
        this.drager.style.border = '1px dashed #F33';
        this.drager.style.color = '#F33';
        return false;
    },
    dragEnd:function(e){
        e = e || window.event;
        if(e.preventDefault) e.preventDefault();
        this.drager.style.border = '1px dashed #ccc';
        this.drager.style.color = '#ccc';
        return false;
    },
    drop:function(e){
        //e = e || window.event;
        //if(e.preventDefault) e.preventDefault();

        this.dragEnd(e);

        this.file = e.dataTransfer.files[0];
        //var reader = new FileReader();
        //this.drager.innerHTML = '<br>'+ f.name;
        //var _this = this;
        //reader.onload = (function(theFile) { return function(e) { _this.sending(e.target.result); }; })(f);
        this.read();

        //this.reader.readAsText(this.file);
        //this.reader.readAsArrayBuffer(this.file);
        return false;
    },

    addSave: function ( callback ) {

        this.save = document.createElement('div');
        this.save.innerHTML = 'SAVE';
        this.save.style.cssText = this.def+"position:absolute; top:120px; left:6px; width:110px; height:30px; pointer-events:auto; border:1px solid #ccc;";
        document.body.appendChild(this.save);

        var _this = this;

        this.save.addEventListener('mouseover', function(){_this.saveOver();}, false);
        this.save.addEventListener('mouseout', function(){_this.saveOut();}, false);
        this.save.addEventListener('mousedown', callback, false);

    },


    // LOADER

    handleFileSelect : function(e){
        this.file = e.target.files[0];
        //var reader = new FileReader();
        //var _this = this;
        //reader.onload = (function(theFile) { return function(e) { _this.sending(e.target.result); }; })(f);
        this.read();
        //this.reader.readAsText(this.file);
    },

    saveOver:function( e ){
        this.save.style.border = '1px solid #F33';
        this.save.style.color = '#F33';
    },
    saveOut:function( e ){
        this.save.style.border = '1px solid #ccc';
        this.save.style.color = '#ccc';
    },

    fileOver:function( e ){
        this.loader.style.border = '1px solid #F33';
        this.loader.style.color = '#F33';
    },
    fileOut:function( e ){
        this.loader.style.border = '1px solid #ccc';
        this.loader.style.color = '#ccc';
    },

    // FINAL

    read:function(){
        var fname = this.file.name;
        var type = fname.substring(fname.lastIndexOf('.')+1, fname.length);

       // if(this.isOld && this.pool.indexOf(fname) !== -1 ) this.callback(null, this.file.name);
       // else{
            if(type==='z' || type==='sea' || type==='7z' || type==='bin' || type==='hex' ) this.reader.readAsArrayBuffer(this.file);
            else this.reader.readAsText(this.file);
       // }

        
    },

    sending:function(result){
        this.pool.push(this.file.name);
        this.callback(result, this.file.name);
    }
}
