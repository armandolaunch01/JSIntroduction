function selectLanguage(value) {
    var language;

    switch (value) {
        case 1:
            language = "Spanish";
            break;
        case 2:
            language = "French";
            break;
        case 3:
            language = "Italian";
            break;
        default:
            language = "English";
            break;

    }

    /*if (value == 1){
        language ="spanish";
    }else if (value == 2){
        language = "French";
    }else if (value == 3){
        language = "Italian";
    }else{
        language = "English"
    }*/
    return language;


}