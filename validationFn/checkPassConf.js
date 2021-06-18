function checkPassConf(nodeElem, passwordElem) {
  const passwordVal = passwordElem.value;
  const confirmVal = nodeElem.value;

  return passwordVal === confirmVal;
}

export default checkPassConf;
