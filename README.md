Mark Quickly
============

Quickly render all `<script type="text/x-markdown">` tags

How To Use
----------

#### Pick one of these to render with

    <script src="//cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/pagedown/1.0/Markdown.Converter.js"></script>

#### Or name some custom renderer `markQuickly`

    var markQuickly = function(input) {
      var output = "";
      for (var line in input.split('\n')) {
        output += "<p>" + line + "<\p>";
      }
      return output;
    }

#### Then include this library

    <script src="//cdn.rawgit.com/invisibledrygoods/mark-quickly/97c4bfe90f356ff39baff4664c15c7a4e45e461d/mark-quickly.js"></script>

#### Put some markdown in your body

    <body>
      <script type="text/x-markdown" class="article">
        Wow
        ===

        This gum is *amazing!*
      </script>
    </body>

#### And all your markdown will ~magickally~ turn into html (wow) (so cool)

    <body>
      <div class="article">
        <h1>Wow</h1>
        <p>This gum is <em>amazing!</em><p>
      </div>
    </body>

`<//script>` tags
-----------------
  
Yo dawg, you can't put `</script>` in your `<script>`, so try using
`<//script>` instead. That's the only special case I'm gonna make, I promise.
