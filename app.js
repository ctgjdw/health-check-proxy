const express = require('express');
const isReachable = require('is-reachable');

const app = express();


app.get('/proxy/git', (req, res) => {
    console.log('Checking Gitlab instance availability.');
    isReachable('https://git.ct-goh.com').then((r) => {
        if (r == true) {
            console.log('Gitlab is online, redirecting to Gitlab');
            res.redirect('https://git.ct-goh.com');
        } else {
            console.log("Gitlab is offline, redirecting to Github");
            res.redirect("https://github.com/ctgjdw");
        }
    }).catch(err => {
        console.log(err);
    });
});

app.listen(8080, () => {
    console.log('Proxy Server running on port 8080!');
});