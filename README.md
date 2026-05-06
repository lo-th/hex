<p align="center"><a href="https://lo-th.github.io/hex/"><img src="./assets/icon.svg"/></a></p>

<p align="center">Simple LZMA compressor<br><br>
Use this webpage <a href="http://lo-th.github.io/hex/">COMPRESSOR</a><br>
to compress and save in .hex or .bin<br>
any javascript libs or text file like .OBJ .BVH ...<br><br>
You only need Extractor.js to decompress you script and<br>
add to you webpage or your worker look examples<br><br>
i use <a href="https://github.com/Wu-Yijun/lzma-wasm">lzma-wasm</a> engine for compression<br><br>
<a href="https://lo-th.github.io/hex/examples/three_test.html">simple three example</a><br>
<a href="https://lo-th.github.io/hex/examples/ammo_test.html">ammo worker example</a><br>
</p>

```javascript
import { Extractor } from '../build/Extractor.js'
const extract = new Extractor();
extract.load( ['./hex/three.hex', './hex/ammo.hex', './hex/bvh.hex'], callback, [0,1,2] );
// 0 return javasript main element
// 1 return Blob for send in worker : extract.get('ammo');
// 2 return textfile for any parser : extract.get('bvh'); 
// callback is the function launch after load and decompression
```
