const https = require('https');
const token = "AAAArYDS6hs:APA91bFHs0-zyzi0LoBUViiZTSi5m4d-_P6MC6nkbvo-f29mrObV3ol-ineyWcrkrzt1nhVWQ7ays0Qr5kS8mPyCbngzGF7GmGiFDRewihYJvat02vB4uMnA5WO1Hu_mtkJ1jweIANWU"

const data = JSON.stringify({
    "to": "dfBrgbCWTYyLEimjZiOFkp:APA91bEC1ZgrmmVB8npim-uwx75xUhKljXbpKorM3XIWMnbUA7tMfhRVgT5h66elaMAwGfXocDSC1biKqHkL8g-fj1gwLxKu_0UHoq-BV70tUqQ6ZWmQOxaYUz8sgtdHkFTEmSRe6kX_",
    "notification": {
      "title": "Cobber website Updated",
      "body": "Firebase updated just now for cober-1122.web.app"
      }
});

const options = {
    hostname: 'fcm.googleapis.com',
    path: '/fcm/send',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'Authorization': 'Bearer '+token
    }
};

const req = https.request(options, (res) => {
    let data = '';

    console.log('Status Code:', res.statusCode);

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Body: ', data);
    });

}).on("error", (err) => {
    console.log("Error: ", err.message);
});

req.write(data);
req.end();

