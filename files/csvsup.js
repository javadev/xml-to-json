function getExampleXml(n) {
    n = (n || 1) - 1;
    var s = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<!--Anagrafica del clienti del mercato-->\r\n<anagrafica>\r\n\t<testata>\r\n\t\t<nomemercato id=\"007\">Mercato di test</nomemercato>\r\n\t\t<data>Giovedi 18 dicembre 2003 16.05.29</data>\r\n\t</testata>\r\n\t<record>\r\n\t\t<codice_cliente>5</codice_cliente>\r\n\t\t<rag_soc>Miami American Cafe</rag_soc>\r\n\t\t<codice_fiscale>IT07654930130</codice_fiscale>\r\n\t\t<indirizzo tipo=\"casa\">Viale Carlo Espinasse 5, Como</indirizzo>\r\n\t\t<num_prodotti>13</num_prodotti>\r\n\t</record>\r\n\t<record>\r\n\t\t<codice_cliente>302</codice_cliente>\r\n\t\t<rag_soc>Filiberto Gilardi</rag_soc>\r\n\t\t<codice_fiscale>IT87654770157</codice_fiscale>\r\n\t\t<indirizzo tipo=\"ufficio\">Via Biancospini 20, Messina</indirizzo>\r\n\t\t<num_prodotti>8</num_prodotti>\r\n\t</record>\r\n\t<record>\r\n\t\t<codice_cliente>1302</codice_cliente>\r\n\t\t<rag_soc>Eidon</rag_soc>\r\n\t\t<codice_fiscale>IT887511231</codice_fiscale>\r\n\t\t<indirizzo tipo=\"ufficio\">Via Bassini 17/2, Milano</indirizzo>\r\n\t\t<num_prodotti>18</num_prodotti>\r\n\t</record>\r\n\t<record>\r\n\t\t<codice_cliente>202</codice_cliente>\r\n\t\t<rag_soc>SkillNet</rag_soc>\r\n\t\t<codice_fiscale>IT887642131</codice_fiscale>\r\n\t\t<indirizzo tipo=\"ufficio\">Via Chiasserini 11A, Milano</indirizzo>\r\n\t\t<num_prodotti>24</num_prodotti>\r\n\t</record>\r\n\t<record>\r\n\t\t<codice_cliente>12</codice_cliente>\r\n\t\t<rag_soc>Eidon</rag_soc>\r\n\t\t<codice_fiscale>IT04835710965</codice_fiscale>\r\n\t\t<indirizzo tipo=\"casa\">Via Cignoli 17/2, Roma</indirizzo>\r\n\t\t<num_prodotti>1112</num_prodotti>\r\n\t</record>\r\n\t<record>\r\n\t\t<codice_cliente>5</codice_cliente>\r\n\t\t<rag_soc>Miami American Cafe</rag_soc>\r\n\t\t<codice_fiscale>IT07654930130</codice_fiscale>\r\n\t\t<indirizzo tipo=\"casa\">Viale Carlo Espinasse 5, Como</indirizzo>\r\n\t\t<num_prodotti>13</num_prodotti> \r\n\t</record>\r\n\t<record>\r\n\t\t<codice_cliente>302</codice_cliente>\r\n\t\t<rag_soc>Filiberto Gilardi</rag_soc>\r\n\t\t<codice_fiscale>IT87654770157</codice_fiscale>\r\n\t\t<indirizzo tipo=\"ufficio\">Via Biancospini 20, Messina</indirizzo>\r\n\t\t<num_prodotti>8</num_prodotti>\r\n\t</record>\r\n\t<record>\r\n\t\t<codice_cliente>1302</codice_cliente>\r\n\t\t<rag_soc>Eidon</rag_soc>\r\n\t\t<codice_fiscale>IT887511231</codice_fiscale>\r\n\t\t<indirizzo tipo=\"ufficio\">Via Bassini 17/2, Milano</indirizzo>\r\n\t\t<num_prodotti>18</num_prodotti>\r\n\t</record>\r\n\t<record>\r\n\t\t<codice_cliente>202</codice_cliente>\r\n\t\t<rag_soc>SkillNet</rag_soc>\r\n\t\t<codice_fiscale>IT887642131</codice_fiscale>\r\n\t\t<indirizzo tipo=\"ufficio\">Via Chiasserini 11A, Milano</indirizzo>\r\n\t\t<num_prodotti>24</num_prodotti>\r\n\t</record>\r\n\t<record>\r\n\t\t<codice_cliente>202</codice_cliente>\r\n\t\t<rag_soc>SkillNet</rag_soc>\r\n\t\t<codice_fiscale>IT887642131</codice_fiscale>\r\n\t\t<indirizzo tipo=\"ufficio\">Via Chiasserini 11A, Milano</indirizzo>\r\n\t\t<num_prodotti>24</num_prodotti>\r\n\t</record>\r\n\t<record>\r\n\t\t<codice_cliente>12</codice_cliente>\r\n\t\t<rag_soc>Eidon</rag_soc>\r\n\t\t<codice_fiscale>IT04835710965</codice_fiscale>\r\n\t\t<indirizzo tipo=\"casa\">Via Cignoli 17/2, Roma</indirizzo>\r\n\t\t<num_prodotti>1112</num_prodotti>\r\n    </record>\r\n</anagrafica>";
    return s
}

function getExampleJson(n) {
    n = (n || 1) - 1;
    var s = ["[\n" + "  {\n" + "    \"id\":1," + "    \"name\":\"Johnson, Smith, and Jones Co.\",\n" + "    \"amount\":345.33," + "    \"Remark\":\"Pays on time\"\n" + "  },\n" + "  {\n" + "    \"id\":2," + "    \"name\":\"Sam \\\"Mad Dog\\\" Smith\",\n" + "    \"amount\":993.44," + "    \"Remark\":\"\"\n" + "  },\n" + "  {\n" + "    \"id\":3," + "    \"name\":\"Barney & Company\",\n" + "    \"amount\":0," + "    \"Remark\":\"Great to work with\\nand always pays with cash.\"\n" + "  },\n" + "  {\n" + "    \"id\":4," + "    \"name\":\"Johnson's Automotive\",\n" + "    \"amount\":2344," + "    \"Remark\":\"\"\n" + "  }\n" + "]\n", "{ \"data\" : [\n" + "  {" + "    \"id\":1," + "    \"name\":\"Johnson, Smith, and Jones Co.\"" + "  },\n" + "  {" + "    \"id\":2," + "    \"name\":\"Sam \\\"Mad Dog\\\" Smith\"" + "  },\n" + "  {" + "    \"id\":3," + "    \"name\":\"Barney & Company\"" + "  },\n" + "  {" + "    \"id\":4," + "    \"name\":\"Johnson's Automotive\"" + "  }\n" + "] }\n", "{ \"race\" : \n" + " { \"entries\" : [\n" + "  {" + "    \"id\":11," + "    \"name\":\"Johnson, Smith, and Jones Co.\"" + "  },\n" + "  {" + "    \"id\":22," + "    \"name\":\"Sam \\\"Mad Dog\\\" Smith\"" + "  },\n" + "  {" + "    \"id\":33," + "    \"name\":\"Barney & Company\"" + "  },\n" + "  {" + "    \"id\":44," + "    \"name\":\"Johnson's Automotive\"" + "  }\n" + "] }\n}\n", "{\n" + "    \"id\":1," + "    \"name\":\"Johnson, Smith, and Jones Co.\"," + "    \"amount\":345.33," + "    \"Remark\":\"Pays on time\"\n" + "}\n", "[\n" + "    [" + "      1," + "      \"Johnson, Smith, and Jones Co.\"," + "      345.33" + "    ],\n" + "    [" + "      99," + "      \"Acme Food Inc.\"," + "      2993.55" + "    ]\n" + "]"];
    return s[n]
}

function loadScript(url) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.id = "dynScriptTemp";
    s.src = url;
    document.getElementsByTagName("head")[0].appendChild(s)
}

function loadScriptAndRun(url) {
    if (!url.indexOf('?') == 0) {
        url = '?' + url
    }
    loadScript("https://xml-json.herokuapp.com/" + url)
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
