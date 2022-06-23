export function fetch_handle(url: string) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = "arraybuffer"
  xhr.onload = function() {
    var byte = new Uint8Array(xhr.response);
    var binarystr:string = ""
    for( var i = 0; i < byte.byteLength; i++ ) {
      binarystr += String.fromCharCode( byte[ i ] );
    }
    var unicode:string = binarystr;
    var cl_ = window.btoa(unicode);
    console.log('cl_ respose')
    return cl_
  }
  xhr.send();
}