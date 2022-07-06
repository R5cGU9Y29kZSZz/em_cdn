function toast(options) {
  var duration = options.duration || 2000
  var message  = typeof options === 'string' ? options : options.message
  var type     = options.type || 'success'
  var status;
  if (type === 'success') {
    status = '✔'
  } else if (type === 'error') {
    status = '!'
  }
  var str = '<div class="wraper-toast"><div class="toast-inner"><span>' + message + '</span><span class=" ' + type + ' ">' + status + '</span></div></div>'
  $("body").append(str);
  setTimeout(function () {
    $(".wraper-toast").remove();
  }, duration)
}