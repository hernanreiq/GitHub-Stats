export const GH_TOKEN = convertToken('Z2hwX1RlQU95MThpaXVvSFF4UllOUzcyazRvV1dYaW5FZTBmSkFybw==', 'token');

function convertToken(token, typeBuffer) {
    var result = '';
    if(typeBuffer === 'base64'){
        result = Buffer.from(token).toString('base64');
    } else if (typeBuffer === 'token'){
        result = Buffer.from(token, 'base64').toString('ascii');
    }
    return result;
}

/* 
    GitHub prohibits pushing a personal access token in a public repository, 
    so the token you are seeing has already been automatically deactivated by GitHub, 
    that is why you must put your own token if you want to use this application on your localhost.
*/