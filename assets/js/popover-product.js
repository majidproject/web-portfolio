const popover = new bootstrap.Popover('.popover-dismiss', {
  trigger: 'focus'
})

document.addEventListener('DOMContentLoaded', function () {
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  popoverTriggerList.map(function (el) {
      return new bootstrap.Popover(el);
  });
});
