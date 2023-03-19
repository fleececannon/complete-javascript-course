
function getAPIData() {
    console.log("::: Running API :::");
    
    // /API Call configuration
    // /*******************************************
    var AylienNewsApi = require('aylien-news-api');
    var defaultClient = AylienNewsApi.ApiClient.instance;
    var app_id = defaultClient.authentications['app_id'];
    app_id.apiKey = 'f04cbe97';
    var app_key = defaultClient.authentications['app_key'];
    app_key.apiKey = '8383f818ae80dcc91ae286403600fc43';
    var apiInstance = new AylienNewsApi.DefaultApi();
    var opts = {
    body: 'startup',
    text: 'startup company',
    language: ['en', 'de'],
    perPage: 2
    };
    const apiData = [];

    var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        const [story1, story2] = data.stories;
        apiData.push(story1, story2);
        apiData.forEach(e =>{
            console.log(e.sentiment);
            console.log(e.title);
            console.log("******************");
            return apiData;
        });
    }

}

apiInstance.listStories(opts, callback);
}

export { getAPIData } 