function charFreq(txt){
    var obj = {};
    for(var i = 0; i < txt.length; i++){
        obj[txt[i]] = ++obj[txt[i]]||1;
    }
    return obj;
}
