// link for HTTP Trigger : https://us-central1-sugar-labs.cloudfunctions.net/HelloWorldFunction  
exports.helloWorld = function helloWorld(req, res) {
    res.status(200).send('Hello World!');
};
