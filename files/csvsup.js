function getExampleXml(n) {
    n = (n || 1) - 1;
    var s = "<?xml version=\"1.0\"?>\n" + "<ROWSET>\n" + "<ROW>\n" + "<id>1</id>\n" + "<name>Johnson, Smith, and Jones Co.</name>\n" + "<amount>345.33</amount>\n" + "<Remark>Pays on time</Remark>\n" + "</ROW>\n" + "<ROW>\n" + "<id>2</id>\n" + "<name>Sam &quot;Mad Dog&quot; Smith</name>\n" + "<amount>993.44</amount>\n" + "<Remark></Remark>\n" + "</ROW>\n" + "<ROW>\n" + "<id>3</id>\n" + "<name>Barney &amp; Company</name>\n" + "<amount>0</amount>\n" + "<Remark>Great to work with\n" + "and always pays with cash.</Remark>\n" + "</ROW>\n" + "<ROW>\n" + "<id>4</id>\n" + "<name>Johnson&apos;s Automotive</name>\n" + "<amount>2344</amount>\n" + "<Remark></Remark>\n" + "</ROW>\n" + "</ROWSET>";
    return s
}

function loadScript(url) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.id = "dynScriptTemp";
    s.src = url;
    document.getElementsByTagName("head")[0].appendChild(s)
}

function loadScriptAndRun(url) {
    if (!url.startsWith('?')) {
        url = '?' + url
    }
    loadScript("http://www.ddginc-usa.com/cgi-bin/url-to-json.php" + url)
}

function loadDataAndRun(data) {
    document.getElementById('txt1').value = data.html.join("\n");
    document.getElementById('btnRun').click()
}

function loadURL(url) {
    if (url.trim() == "") {
        alert("Missing URL");
        return false
    }
    loadScriptAndRun("?callback=loadDataAndRun&url=" + encodeURIComponent(url))
}

function saveOutput(text, fn, doctype) {
    var blob = new Blob([text], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, fn)
}

function saveFile(text, ext, fnId) {
    var eol = "\r\n";
    var fn = document.getElementById(fnId).value.trim();
    if (fn == "") {
        fn = document.getElementById(fnId).value = "convertjson"
    }
    if (document.getElementById("eol")) eol = document.getElementById("eol").value || eol;
    if (eol == "LF") eol = "\n";
    if (eol == "CRLF") eol = "\r\n";
    var v = text.replace(/\r\n|\r|\n/gm, eol);
    saveOutput(v, fn + "." + ext, null)
}

function clearPage() {
    if (storageSup && storageSup.has_html5_storage()) {
        sessionStorage.setItem("clearPressed", "Y")
    }
    window.location.reload(true)
}

function setCheckboxes(name, tf) {
    var j;
    var fld;
    for (j = 0; j < CSV.maxColumnsFound; j++) {
        fld = document.getElementById(name + (j + 1));
        if (!fld) continue;
        fld.checked = tf
    }
}
