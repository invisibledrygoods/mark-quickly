(function() { 
  var convert;
  
  if (typeof markQuickly === "function") {
    convert = markQuickly;
  } else if (typeof Showdown !== "undefined") {
    convert = new Showdown.converter().makeHtml;
  } else if (typeof marked !== "undefined") {
    convert = marked;
  } else if (typeof Markdown !== "undefined") {
    convert = new Markdown.Converter().makeHtml;
  }

  function blockTrim(input) {
    var lines = input.split('\n');

    var firstNonWhiteCharacter = Number.POSITIVE_INFINITY;

    for (var i = 0; i < lines.length; i++) {
      if (lines[i].trim().length != 0) {
        for (var j = 0; j < lines[i].length; j++) {
          if (lines[i][j] != ' ' && j < firstNonWhiteCharacter) {
            firstNonWhiteCharacter = j;
          }
        }
      }
    }

    for (var i = 0; i < lines.length; i++) {
      lines[i] = lines[i].substr(firstNonWhiteCharacter);
    }

    return lines.join('\n');
  }
  
  if (!convert) {
    throw "no markdown converter found, currently supporting: showdown";
  } else {
    window.addEventListener("load", function() {
      var scripts = document.getElementsByTagName('script');

      for (var i = scripts.length - 1; i >= 0; i--) {
        var script = scripts[i];

        if (script.getAttribute('type') == 'text/x-markdown') {
          var markdown = script.innerHTML;
          
          var div = document.createElement('div');
  
          for (var j = 0; j < script.attributes.length; j++) {
            div.attributes.setNamedItem(script.attributes[j].cloneNode());
          }
  
          // since this goes in a <script> tag, </script> won't work in the
          // markdown so we can use <//script> instead
          var markdown = script.innerHTML.replace(/<\/(\/+)(script)>/ig, '<$1$2>');
          div.innerHTML = convert(blockTrim(markdown));
  
          script.parentNode.replaceChild(div, script);
        }
      }
    });
  }
})();
