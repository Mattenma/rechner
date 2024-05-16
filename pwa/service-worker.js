<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">self.addEventListener('install', (e) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>e.waitUntil(</p>
<p class="p1"><span class="Apple-converted-space">    </span>caches.open('rendite-schaetzer').then((cache) =&gt; cache.addAll([</p>
<p class="p1"><span class="Apple-converted-space">      </span>'/',</p>
<p class="p1"><span class="Apple-converted-space">      </span>'/index.html',</p>
<p class="p1"><span class="Apple-converted-space">      </span>'/sheet.css',</p>
<p class="p1"><span class="Apple-converted-space">      </span>'/manifest.json',</p>
<p class="p1"><span class="Apple-converted-space">      </span>'/icon-192x192.png',</p>
<p class="p1"><span class="Apple-converted-space">      </span>'/icon-512x512.png'</p>
<p class="p1"><span class="Apple-converted-space">    </span>])),</p>
<p class="p1"><span class="Apple-converted-space">  </span>);</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">self.addEventListener('fetch', (e) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>e.respondWith(</p>
<p class="p1"><span class="Apple-converted-space">    </span>caches.match(e.request).then((response) =&gt; response || fetch(e.request)),</p>
<p class="p1"><span class="Apple-converted-space">  </span>);</p>
<p class="p1">});</p>
</body>
</html>
