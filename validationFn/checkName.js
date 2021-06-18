function checkName(nodeElem) {
  const val = nodeElem.value;
  const regex = /[a-ząęńółńżź]/gm;
  if (val.length <= 2) {
    console.log('za mało znaków');
  }

  console.log(regex.test(val));

  console.dir(val.length);
}

export default checkName;
