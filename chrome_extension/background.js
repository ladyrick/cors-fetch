chrome.runtime.onMessage.addListener(
    (req, sender, sendResponse) => {
        console.log('%cCrosFetch req ' + req.key, 'color: #e88d67', req);
        const response_obj = {
            key: req.key,
            resolve: null,
            error: null,
        };
        fetch(req.input, req.init).then(rsp => {
            response_obj.resolve = {};
            response_obj.resolve.headers = {};
            response_obj.resolve.ok = rsp.ok;
            response_obj.resolve.redirected = rsp.redirected;
            response_obj.resolve.status = rsp.status;
            response_obj.resolve.statusText = rsp.statusText;
            response_obj.resolve.type = rsp.type;
            response_obj.resolve.url = rsp.url;
            for (let h of rsp.headers.entries()) {
                response_obj.resolve.headers[h[0]] = h[1];
            }
            return rsp.text();
        }).then(text => {
            response_obj.resolve.text = text;
            try {
                response_obj.resolve.json = JSON.parse(text);
            } catch {
                // not a json response;
            };
            console.log('%cCrosFetch rsp ' + response_obj.key, 'color: #7b8cde', response_obj);
            sendResponse(response_obj);
        }).catch((e) => {
            response_obj.error = {
                name: e.name,
                message: e.message,
            };
            console.log('%cCrosFetch rsp ' + response_obj.key, 'color: #7b8cde', response_obj);
            sendResponse(response_obj);
        })
        return true;
    }
);
