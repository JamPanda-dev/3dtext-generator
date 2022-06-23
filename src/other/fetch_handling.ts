
export function getFontBase64(url: any) {
    var contenttype: any;
    var res_: any;
   return fetch(url).then((res: any) => {
    contenttype = res.headers.get('content-type')
    return res.arrayBuffer()
  }).then((buffer_) => {
     var bns_ = ''
     const nsp_ = new Uint8Array(buffer_);
     for (let i=0; i<nsp_.length;i++) {
      bns_ += String.fromCharCode(nsp_[i])
     }
     let base64String = window.btoa(bns_)
     return (`data:${contenttype};base64,${base64String}`)
  })
}

