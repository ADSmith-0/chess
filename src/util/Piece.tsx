export const nameFromId = (id:string):string => {
    const splitId = [id.substr(0, 1), id.substr(1)];
    let str = "";
    switch(splitId[0]){
        case 'w':
            str += 'White';
            break;
        case 'b':
            str += 'Black';
            break;
        default:
            return `Bad Input: ${splitId[0]}`;
    }
    str += " ";
    switch(splitId[1][0].toLowerCase()){
        case 'r':
            str += 'Rook';
            break;
        case 'n':
            str += 'Knight';
            break;
        case 'b':
            str += 'Bishop';
            break;
        case 'q':
            str += 'Queen';
            break;
        case 'k':
            str += 'King';
            break;
        case 'p':
            str += 'Pawn';
            break;
        default:
            return `${splitId[1][0]} does not exist`;
    }
    return str;
}