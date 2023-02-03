/*
let reader = new FileReader();
reader.readAsArrayBuffer(droppedFile);
reader.onload = () => {
    this.drawNewBaseLayout({
        droppedFileResult       : reader.result,
        droppedFileName         : droppedFile.name
    });
    delete reader.result;
};

drawNewBaseLayout(options)
{
    $('#resetPreviousCollected').hide();

    if(this.baseLayout !== null)
    {
        this.baseLayout.reset();
    }

    window.requestAnimationFrame(() => {
        options.build               = this.build;
        options.debug               = this.debug;
        options.version             = this.scriptsVERSION;

        options.staticUrl           = this.staticAssetsUrl;
        options.dataUrl             = this.gameDataUrl;
        options.modsUrl             = this.modsDataUrl;
        options.tetrominoUrl        = this.tetrominoUrl;
        options.usersUrl            = this.usersUrl;

        options.language            = this.language;
        options.translate           = this.translate;

        options.satisfactoryMap     = this.map;
        options.saveGameParser      = new SaveParser({
            arrayBuffer                 : options.droppedFileResult,
            fileName                    : options.droppedFileName,
            language                    : this.language,
            translate                   : this.translate,

            saveParserReadWorker        : this.saveParserReadWorker,
            saveParserWriteWorker       : this.saveParserWriteWorker
        });

        this.baseLayout = new BaseLayout(options);
        this.baseLayout.draw();
    });
}
*/

const fileName = 'C:\\repos\\SC-InteractiveMap\\Dunesday_090123-010103.sav'


import SaveParser                               from './SaveParser.js';
//const sp = require('./SaveParser.js');

import fs from 'fs'
//const fs = require('fs');
var array = fs.readFileSync(fileName);

let parser = new SaveParser({
    arrayBuffer                 : array,
    fileName                    : fileName,
    language                    : 'en',
    translate                   : null,

    saveParserReadWorker        : './SaveParser/Read.js',
    saveParserWriteWorker       : './SaveParser/Write.js'
});

parser.load();

/*
parser.getObjects().forEach(element  => {
    console.log(element);
});
*/

console.log('Hello World!');

//let reader = new SaveParser_Read()



