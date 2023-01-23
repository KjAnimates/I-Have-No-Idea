function insertAtCursor(input, text) {
  var start = input.selectionStart;
  var end = input.selectionEnd;

  // set textarea value to: text before caret + tab + text after caret
  input.value = input.value.substring(0, start) +
    text + input.value.substring(end);

  // put caret at right position again
  input.selectionStart =
    input.selectionEnd = start + text.length;
}
