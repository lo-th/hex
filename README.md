<p align="center"><a href="https://lo-th.github.io/hex/"><img src="./assets/icon.svg"/></a></p>

<p align="center">Simple LZMA compressor<br><br>
Use this webpage <a href="http://lo-th.github.io/hex/">COMPRESSOR</a><br>
to compress and save any javascript libs or any text file like .OBJ .BVH ...<br>
For example three.min.js = 523ko to 106ko | ammo.js = 1599ko to 265ko<br><br>
You only need extract.js to decompress you script and<br>
add to you webpage or your worker look examples<br><br>
i use <a href="https://github.com/LZMA-JS/LZMA-JS">lzma-js</a> engine for compression<br><br>
<a href="https://lo-th.github.io/hex/examples/three_test.html">three example</a><br>
<a href="https://lo-th.github.io/hex/examples/ammo_test.html">ammo worker example</a><br>
</p>

```javascript
extract.load( ['./hex/three.min.hex', './hex/ammo.hex', './hex/bvh.hex'], callback, [0,1,2] );
// 0 return javasript main element
// 1 return Blob for send in worker : extract.get('ammo');
// 2 return textfile for any parser : extract.get('bvh'); 
// callback is the function launch after load and decompression
```
