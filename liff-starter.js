window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {

    // sendMessages call
        const context.utouId = 'UU4afa6ecbbed707ef723336758e03162c467ae883ca9e18508c496ffa364ec4d497ea3801cd1af078dfbe427d4bdedea3d5c980bd955a37916b0670050ffe27ad';

        liff.sendMessages([{
            type: 'text',
            text: "You've successfully sent a message! Hooray!"
        }, {
            type: 'sticker',
            packageId: '2',
            stickerId: '144'
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
}
